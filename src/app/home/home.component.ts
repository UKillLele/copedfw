import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videoTag;

  constructor(private sanitizer: DomSanitizer) {
    this.videoTag = this.getVideoTag();
  }

  private getVideoTag() {
    return this.sanitizer.bypassSecurityTrustHtml(
        `<video id="backgroundVideo" muted loop autoplay playsinline disableRemotePlayback>
            <source src="/assets/videos/Dallas.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>`
    );
  }

  ngOnInit() {
  }

}
