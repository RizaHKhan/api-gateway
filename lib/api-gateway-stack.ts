import * as cdk from "aws-cdk-lib";
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ApiGatewayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloWorldFunction = new Function(this, "HelloWorldFunction", {
      runtime: Runtime.NODEJS_LATEST,
      code: Code.fromAsset("lambda"),
      handler: "hello.handler",
    });

    const api = new LambdaRestApi(this, "HelloWorldApi", {
      handler: helloWorldFunction,
      proxy: false,
    });

    const helloResource = api.root.addResource("hello");
    helloResource.addMethod("GET");
  }
}
