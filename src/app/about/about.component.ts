import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  template: `
    <>This app is written in ANgular and displays albums</p>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  title = "My Angular Albums";

  constructor() { }

  ngOnInit() { }
}
