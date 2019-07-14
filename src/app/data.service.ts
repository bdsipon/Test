import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private url =
    "https://my-json-server.typicode.com/apollo-motorhomes/youtube-test/videos";

  private user_url = "https://my-json-server.typicode.com/apollo-motorhomes/youtube-test/users";

  constructor() {}

  getAllVideos() {
    return fetch(this.url);
  }

  getVideoById(id: number) {
    return fetch(this.url + "/" + id);
  }

  getComments(id: number) {
    return fetch(this.url + "/" + id + "/comments");
  }

  getUsers() {
    return fetch(this.user_url);
  }

  getUser(id) {
    return fetch(this.user_url + "/" + id);
  }
}
