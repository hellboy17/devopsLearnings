pipeline {
	agent any
	
	environment {
		JAVA_HOME = tool 'JDK17'
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
				bat 'mvn install'
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