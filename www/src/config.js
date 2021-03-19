// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7h4d191pm8bpjgme2h99fqrvvp",     // CognitoClientID
  "api_base_url": "https://6rhyrxw4i0.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-servless-sample-1.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1pdws71sfcsy8.amplifyapp.com"                                      // AmplifyURL
};

export default config;
