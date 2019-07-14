import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Video } from "../Models/video";
import { User } from "../Models/user";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "video-details",
  templateUrl: "./video-details.component.html",
  styleUrls: ["./video-details.component.css"]
})
export class VideoDetailsComponent implements OnInit {
  AllVideos: Video[];
  user: User[];
  SelectedVideo: Video;

  GetUserName = [];
  comments: Comment[];
  userId: number;

  constructor(
    private dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let PostId: number = parseInt(this.route.snapshot.paramMap.get("id"));
    if (!PostId) {
      PostId = 1;
    }
    this.reloadVideo(PostId);
    //   this.dataservice.getPostById(PostId)
    // .then((response) => {response.json()
    // .then((res:Video)=>{
    //   this.SelectedVideo=res;
    //   console.log(res);
    //   });
    // })

    //   // this.dataservice.getPostById(PostId)
    //   // .subscribe(
    //   //   (data: Video) => this.SelectedVideo = data,
    //   //   (err: any) => console.log(err),
    //   //   ()=>console.log(this.SelectedVideo)
    //   // );

    //   this.dataservice.getAllPosts()
    // .then((response) => {response.json()
    // .then((res:Video[])=>{
    //   this.AllVideos=res;

    //   console.log(res);
    //   });
    // })
    // this.loadVideo()
  }

  OnClick(id: Number) {
    this.reloadVideo(id);
    // this.router.navigate(['/videos',id]);
    //this.ngOnInit();
  }

  loadVideo(id: number) {
    if (!id) {
      id = 1;
    }
    var notifications = [];
    this.dataservice.getUsers().then(response => {
      response.json().then((res: User[]) => {
        this.user = res;
        this.GetUserName.push(res);
      });
    });
    this.dataservice.getComments(id).then(response => {
      response.json().then((res: Comment[]) => {
        this.comments = res;
        debugger;
        for (var i = 0; this.comments.length > i; i++) {
          for (var j = 0; this.GetUserName[0].length > j; j++) {
            if (this.comments[i]["userId"] == this.GetUserName[0][j]["id"]) {
              this.comments[i]["name"] = this.GetUserName[0][j]["name"];
            }
          }
        }
      });
    });

    this.dataservice.getAllVideos().then(response => {
      response.json().then((res: Video[]) => {
        this.AllVideos = res;
        console.log(res);
      });
    });
  }

  reloadVideo(id) {
    this.dataservice.getVideoById(id).then(response => {
      response.json().then((res: Video) => {
        this.SelectedVideo = res;
        console.log(res);
      });
    });

    // this.dataservice.getPostById(PostId)
    // .subscribe(
    //   (data: Video) => this.SelectedVideo = data,
    //   (err: any) => console.log(err),
    //   ()=>console.log(this.SelectedVideo)
    // );

    this.dataservice.getAllVideos().then(response => {
      response.json().then((res: Video[]) => {
        this.AllVideos = res;

        console.log(res);
      });
    });
    this.loadVideo(id);
  }
}
