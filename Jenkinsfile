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
				sh 'wsl -- npm install'
			}
		}

		stage ('Pakage and Archive') {
			steps {
				sh 'wsl -- zip -r myapp.zip . -x "node_modules/*" ".git/*" ".github/*" "*.env"'
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
