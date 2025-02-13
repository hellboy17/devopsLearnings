pipeline {
	agent any
	environment {
		AWS_REGION = "us-east-1"
		LAMBDA_FUNCTION_NAME = "MyLambdaFunction"
	}
	stages {
		stage ("Checkout Lambda Code") {
			steps {
				git branch: 'jenkinsLambda', url: 'https://github.com/hellboy17/devopsLearnings.git'
			}
		}

		stage ("Package Lambda") {
			steps {
				powershell '''
				cd $Env:WORKSPACE
				Compress-Archive -Path * -DestinationPath lambda_function.zip -Force
				'''
			}
		}

		stage ("Deploy to AWS") {
			steps {
				powershell 'aws lambda update-function-code --function-name $Env:LAMBDA_FUNCTION_NAME --zip-file fileb://lambda_function.zip --region $Env:AWS_REGION'
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
