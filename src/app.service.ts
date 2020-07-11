import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello World!';
  }

  public saveData(data: any): Object {
    return {message: 'Hi I am TCP-Microservice to Save Data',data};
  }
  
  public getData() {
    return 'Hi I am TCP-Microservice';
  }
}
