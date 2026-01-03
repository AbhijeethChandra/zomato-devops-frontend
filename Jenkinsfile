pipeline {
    agent any

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
            echo '✅ Frontend deployed successfully'
        }
        failure {
            echo '❌ Frontend deployment failed'
        }
    }
}
