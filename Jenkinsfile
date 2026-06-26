pipeline {
    agent any

    options {
        timeout(time: 1, unit: 'HOURS')
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Code checked out successfully'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    bat 'npm install'
                }
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                script {
                    echo 'Installing Playwright browsers...'
                    sh 'npx playwright install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo 'Running Playwright tests...'
                    catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                        sh 'npm test'
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                echo 'Archiving test results...'
                archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
                archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            }
        }

        success {
            echo 'All tests passed successfully!'
        }

        failure {
            echo 'Tests failed. Check the reports for details.'
        }

        cleanup {
            cleanWs()
        }
    }
}
