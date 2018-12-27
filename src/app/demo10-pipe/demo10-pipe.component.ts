import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo10-pipe",
  templateUrl: "./demo10-pipe.component.html",
  styleUrls: ["./demo10-pipe.component.css"]
})
export class Demo10PipeComponent implements OnInit {
  stu = { stuName: "mike", stuScore: 80 };
  constructor() {}

  ngOnInit() {}
}
