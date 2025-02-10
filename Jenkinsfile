pipeline {
	agent any
	
	environment {
		JAVA_HOME = tool 'JDK11'
		PATH = "$JAVA_HOME/bin:$PATH"
	}
	
	stages {
		stage ('clone repository') {
			steps {
				git branch: 'master', url: 'https://github.com/hellboy17/devopsLearnings.git'
			}
		}
		
		stage ('Build') {
			steps {
				sh 'mvn install'
			}
		}
	}
	
	post {
		success {
			echo 'Build completed'
		}
		failure {
			echo 'Build Failed'
		}
	}
}