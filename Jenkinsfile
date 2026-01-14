pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
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

        stage('Run Frontend Tests') {
            steps {
                bat 'npm test -- --watch=false'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    bat '''
                    npx sonar-scanner ^
                      -Dsonar.projectKey=zomato-frontend ^
                      -Dsonar.projectName=zomato-frontend ^
                      -Dsonar.sources=src ^
                      -Dsonar.host.url=http://localhost:9000
                    '''
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Build Frontend') {
            steps {
                bat 'npm run build'
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
            echo '❌ Pipeline failed'
        }
    }
}
