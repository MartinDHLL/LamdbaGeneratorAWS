import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import path = require("path");

export class CdkLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const lambdaNodeJs = cdk.aws_lambda_nodejs;
    const lambda = cdk.aws_lambda;

    // The code that defines your stack goes here
    // We have created the VPC object from the VPC class
    new lambdaNodeJs.NodejsFunction(this, "mainVPC", {
      runtime: lambda.Runtime.NODEJS_14_X,
      entry: path.join(__dirname, "lambda/get-humidity.js"),
      handler: "index.main",
    });
  }
}
