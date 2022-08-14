import * as dotenv from 'dotenv';
import { S3 } from 'aws-sdk';
const fs = require('fs');

export const task5 = (): void => {
  dotenv.config();
  const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  type s3UploadParams = {
    Body: string;
    Bucket: string;
    Key: string;
  };
  var params: s3UploadParams = {
    Body: fs.readFileSync('./Anjan-Rai/output.csv'),
    Bucket: 'inquisitive-backend-developer-tests',
    Key: 'Anjan-Rai/output.csv',
  };
  s3.putObject(params, function (err: Error, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
};
