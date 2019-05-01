import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Album } from "../album.model";

@Component({
  selector: "app-album-card",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.css"]
})
export class AlbumCardComponent implements OnInit {
  @Input()
  album: Album;

  @Output()
  albumClicked: EventEmitter<Album> = new EventEmitter<Album>();

  new_price: number;

  constructor() {}

  showAlbum() {
    this.albumClicked.emit(this.album);
  }

  ngOnInit() {
    // Check if the album is on sale
    if (this.album.on_sale)
      // Apply 10% discount
      this.new_price = this.album.price - (this.album.price * .10);
  }
}
