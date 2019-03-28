import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public thirdPartyCapoChartUrl = 'https://www.thaliacapos.com/blogs/blog/how-to-use-a-guitar-capo-chart';

  constructor() { }

  ngOnInit() {
  }

}
