// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5a36is3jjbusm8uvhf3h4gotis",     // CognitoClientID
  "api_base_url": "https://w28seks9x2.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverless-1.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d3897lie9x9qyj.amplifyapp.com"                                      // AmplifyURL
};

export default config;
