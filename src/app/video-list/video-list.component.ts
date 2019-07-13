import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Video } from '../Models/video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

AllVideos:Video[];

  constructor(private dataservice:DataService) { }

  ngOnInit() {

    this.dataservice.getAllVideos()
  .then((response) => {response.json()
  .then((res:Video[])=>{
    this.AllVideos=res;
    console.log(res);
    });
  })
  }

}
