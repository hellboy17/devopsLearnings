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
				powershell 'npm install'
			}
		}

		stage ('Pakage and Archive') {
			steps {
				powershell 'Compress-Archive -Path * -DestinationPath myapp.zip -Force -Exclude node_modules, .git, .github, *.env, .gitignore, *.log, .DS_Store'
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
