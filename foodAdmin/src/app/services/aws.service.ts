import { Injectable } from '@angular/core';
import { config, Credentials, S3 } from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class AwsService {
  BUCKET_NAME: any;

  constructor() {
    config.update({
      region: 'ap-south-1',
      credentials: new Credentials('33', 'ddd')
    })
  }

  getS3Ref() {
    return new S3({
      apiVersion: '2006-03-01',
      params: {
        Bucket: this.BUCKET_NAME
      }
    })
  }


}
