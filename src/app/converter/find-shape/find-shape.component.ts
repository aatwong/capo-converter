import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-find-shape',
  templateUrl: './find-shape.component.html',
  styleUrls: ['../find-param.css']
})
export class FindShapeComponent implements OnInit {

  constructor(
    private converterService: ConverterService
  ) { }

  ngOnInit() {
  }

}
