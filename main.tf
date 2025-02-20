terraform {
  backend "s3" {
    bucket = "tf-state-bucket-111321131313" #bucket Name
    key = "terraform.tfstate"
    region = "us-east-1"
    encrypt = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-east-1"
}

resource "aws_instance" "app_server" {
  ami           = "ami-0f9575d3d509bae0c"
  instance_type = "t2.micro"

  tags = {
    Name = "MyServerInstance"
  }
}
