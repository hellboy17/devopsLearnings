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
				powershell '''
				$7zPath = "$Env:ProgramFiles\\7-Zip\\7z.exe"
				& "$7zPath" a -r "myapp.zip" "." "-x!node_modules" "-x!.git" "-x!.github" "-x!*.env"
				'''
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
