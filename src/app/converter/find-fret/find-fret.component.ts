import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-find-fret',
  templateUrl: './find-fret.component.html',
  styleUrls: ['../find-param.css']
})
export class FindFretComponent implements OnInit {

  constructor(
    private converterService: ConverterService
  ) { }

  ngOnInit() {
  }

}
