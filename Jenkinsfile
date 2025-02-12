pipeline {
	agent any
	environment {
		AWS_REGION = "us-east-1"
		S3_BUCKET = "test-bucket-1213124124124124142"
		FILE_NAME = "myapp.zip"
	}
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

		stage ('upload to s3') {
			steps {
				powershell '''
                		Write-Host "Deploying to AWS S3"
                		Write-Host "Using AWS Region: $env:AWS_REGION"
		  		$filePath = "C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\jenkinsNodejsBuild\\$env:FILE_NAME"
		                aws s3 cp $filePath s3://$env:S3_BUCKET//$env:FILE_NAME --region $env:AWS_REGION
                		'''
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
