pipeline {
	agent any
	stages {
		stage ("Checkout") {
			git branch: 'jenkinsNodeJS', url: 'https://github.com/hellboy17/devopsLearnings.git'
		}

		stage ("Install Dependencies") {
			steps {
				sh 'npm install'
			}
		}

		stage ('Run Tests') {
			steps {
				sh 'npm test'
			}
		}
	}
	post {
		success {
			echo 'Success'
		}
		failure {
			echo 'Failure'
		}
	}
}