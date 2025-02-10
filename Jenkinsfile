pipeline {
	agent any
	stages {
		stage ('Clone Repository') {
			steps {
				git branch: 'jenkinsShell', url: 'https://github.com/hellboy17/devopsLearnings.git'
			}
		}
		stage ('Run Shell commands') {
			steps {
				sh 'echo "Hello WOrld"'
				sh 'ls -l'
			}
		}
	}
	post {
		success {
			echo 'Build complete'
		}
		failure {
			echo 'Build Failed'
		}
	}
}
