import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo07-style",
  templateUrl: "./demo07-style.component.html",
  styleUrls: ["./demo07-style.component.css"]
})
export class Demo07StyleComponent implements OnInit {
  myColor = "green";
  answer = "f";
  constructor() {}

  ngOnInit() {}
}
