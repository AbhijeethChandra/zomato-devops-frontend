pipeline {
    agent any

    environment {
        IMAGE_NAME = "zomato-frontend:ci"
        CONTAINER_NAME = "zomato-frontend"
        PORT = "8081"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
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

        stage('UI Tests - Selenium') {
            steps {
                echo 'Running Selenium UI Tests'
                bat '''
                cd C:\\selenium-devops-demo\\selenium-demo
                mvn clean test
                '''
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    bat '''
                    sonar-scanner ^
                      -Dsonar.projectKey=zomato-frontend ^
                      -Dsonar.projectName=zomato-frontend ^
                      -Dsonar.sources=src ^
                      -Dsonar.exclusions=node_modules/**,dist/**
                    '''
                }
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t zomato-frontend:ci .'
            }
        }

        stage('Deploy Frontend') {
            steps {
                bat '''
                docker rm -f zomato-frontend || exit 0

                docker run -d ^
                  --name zomato-frontend ^
                  -p 8081:80 ^
                  zomato-frontend:ci
                '''
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD pipeline completed successfully'
        }
        failure {
            echo '❌ CI/CD pipeline failed'
        }
    }
}
