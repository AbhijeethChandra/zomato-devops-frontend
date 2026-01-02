pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'ci-setup',
                    url: 'https://github.com/AbhijeethChandra/zomato-devops-frontend.git'
            }
        }

        stage('Frontend Build') {
            steps {
                bat '''
                npm install
                npm run build
                '''
            }
        }

        stage('Docker Build') {
            steps {
                bat '''
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
