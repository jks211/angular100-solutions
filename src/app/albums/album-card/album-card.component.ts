import { Component, OnInit, Input } from "@angular/core";
import { Album } from "../album.model";

@Component({
  selector: "app-album-card[album]",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.css"]
})
export class AlbumCardComponent implements OnInit {
  @Input()
  album: Album;

  constructor() {}

  ngOnInit() {
    if (this.album == undefined) {
      throw Error("Alum was not passed")
    }
  }
}
