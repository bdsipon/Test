import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url='https://my-json-server.typicode.com/apollo-motorhomes/youtube-test/videos';

  constructor() { }



  getAllVideos(){
    return fetch(this.url);
  }
}

