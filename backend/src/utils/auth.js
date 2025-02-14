// utils/auth.js
const {
    SignUpCommand,
    InitiateAuthCommand
  } = require("@aws-sdk/client-cognito-identity-provider");
  const cognitoClient = require('../config/firebase');

  const signUp = async (email, password) => {
    const command = new SignUpCommand({
      ClientId: process.env.COGNITO_CLIENT_ID,
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: 'email',
          Value: email
        }
      ]
    });

    try {
      return await cognitoClient.send(command);
    } catch (error) {
      console.error('Cognito SignUp Error:', error);
      throw error;
    }
  };

  const signIn = async (email, password) => {
    const command = new InitiateAuthCommand({
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: process.env.COGNITO_CLIENT_ID,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password
      }
    });

    try {
      return await cognitoClient.send(command);
    } catch (error) {
      console.error('Cognito SignIn Error:', error);
      throw error;
    }
  };

  module.exports = {
    signUp,
    signIn
  };