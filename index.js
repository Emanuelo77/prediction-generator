const AWS = require ('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();


exports.handler = async (event) => {

   const predictionID = 'pred-$ (Date.now())';
   const { question, prrediction } = event;

   const param = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      predictionID,
      question,
      prediction
    }
   };
  try {
    await dynamodb.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Prediction saved successfully' }),
    };
    
  } catch (error) {
     return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error saving prediction', error }),
    };
  }
};