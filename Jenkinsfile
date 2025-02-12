pipeline {
	agent any
	stages {
		stage ("Checkout") {
			steps {
				git branch: 'jenkinsNodeJS', url: 'https://github.com/hellboy17/devopsLearnings.git'
			}
		}

		stage ("Install Dependencies") {
			steps {
				sh 'wsl -- bash -c "npm install"'
			}
		}

		stage ('Pakage and Archive') {
			steps {
				sh 'wsl -- bash -c "zip -r myapp.zip . -x \'node_modules/*\' \'.git/*\' \'.github/*\' \'*.env\' \'.gitignore\' \'*.log\' \'.DS_Store\'"'
				archiveArtifacts artifacts: 'myapp.zip', fingerprint: true
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
