export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_H3TQUd3ePlYDCQC1Q4lPa1d200ofPZaiyD",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://la7fhgzg0m.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Nqy3wBXYY",
    APP_CLIENT_ID: "7i9ik3fdjhg2or1a8p1smrokf3",
    IDENTITY_POOL_ID: "us-east-1:598580b7-cc6b-4453-9e4e-76d52f4223d8"
  }
};