pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/AbhijeethChandra/zomato-devops-frontend.git'
            }
        }

        stage('Frontend Build') {
            steps {
                sh '''
                  npm install
                  npm run build
                '''
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                  docker build -t zomato-frontend:ci .
                '''
            }
        }
    }

    post {
        success {
            echo 'Frontend CI pipeline completed successfully'
        }
        failure {
            echo 'Frontend CI pipeline failed'
        }
    }
}
