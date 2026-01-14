pipeline {
    agent any

    tools {
        nodejs 'NodeJS'            // if configured
        maven 'Maven'              // for Selenium tests
        sonarQubeScanner 'SonarScanner'
    }

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
                bat "docker build -t %IMAGE_NAME% ."
            }
        }

        stage('Deploy Frontend') {
            steps {
                bat '''
                docker rm -f %CONTAINER_NAME% || exit 0

                docker run -d ^
                  --name %CONTAINER_NAME% ^
                  -p %PORT%:80 ^
                  %IMAGE_NAME%
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
