pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = "zomato-frontend:ci"
        FRONTEND_CONTAINER = "zomato-frontend"
        FRONTEND_PORT = "8081"
        SELENIUM_PATH = "C:\\selenium-devops-demo\\selenium-demo"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'ci-setup',
                    url: 'https://github.com/AbhijeethChandra/zomato-devops-frontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Frontend') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Selenium UI Tests') {
            steps {
                bat """
                cd ${SELENIUM_PATH}
                mvn clean test
                """
            }
        }

        stage('SonarQube Code Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    bat '''
                    sonar-scanner ^
                      -Dsonar.projectKey=zomato-frontend ^
                      -Dsonar.projectName=zomato-frontend ^
                      -Dsonar.sources=src ^
                      -Dsonar.language=js ^
                      -Dsonar.sourceEncoding=UTF-8
                    '''
                }
            }
        }

        stage('Docker Build') {
            steps {
                bat "docker build -t %FRONTEND_IMAGE% ."
            }
        }

        stage('Deploy Frontend') {
            steps {
                bat """
                docker rm -f %FRONTEND_CONTAINER% || exit 0

                docker run -d ^
                  --name %FRONTEND_CONTAINER% ^
                  -p %FRONTEND_PORT%:80 ^
                  %FRONTEND_IMAGE%
                """
            }
        }
    }

    post {
        success {
            echo '✅ Build → Test → Scan → Deploy completed successfully'
        }
        failure {
            echo '❌ Pipeline failed — deployment blocked'
        }
    }
}
