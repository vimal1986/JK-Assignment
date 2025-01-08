provider "aws" {
  region = "us-east-1"
}

resource "aws_ecr_repository" "blog_repo" {
  name = "blog-application"
}