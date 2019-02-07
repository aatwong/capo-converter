import { Component, OnInit } from '@angular/core';
import { ConverterService } from './converter.service';
import { Pitch } from './music.interface';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor(
    private converterService: ConverterService
  ) { }

  ngOnInit() {
  }

  getPitchNumByName(pitchName: string): number {
    const pitchMap = this.converterService.pitchNameMap; // pitchMap is a Dictionary
    const searchName = pitchName.toLowerCase().replace(/\s/g, '');
    let pitchNum = -1;
    for (const key in pitchMap) {
      if (key === searchName) {
        console.log(key);
        pitchNum = pitchMap[key];
      }
    }
    console.log(pitchNum);
    if (pitchNum < 0) {
      console.log('Uh Oh! Could not find the pitch: ' + pitchName);
      return;
    } else {
      return pitchNum;
    }
  }

  getPitchByNum(pitchNumber: number): Pitch {
    for (const pitch of this.converterService.scale) {
      if (pitch.pitchNum === pitchNumber) {
        return pitch;
      }
    }
  }

  getInterval(startingPitch: Pitch, endingPitch: Pitch, isAscending: boolean): number { // return interval in num of semitones
    return 0;
  }

  /*
   return pitch after transposing x number of semitonesUp, which can be negative number for descending interval
  */
  transpose(originPitch: Pitch, semitonesUp: number): Pitch {
    return;
  }

  transposeByPitchNum(startingPitchNum: number, semitonesUp: number): number {
    return ((startingPitchNum + semitonesUp) % 12);
  }

  transposePitchNameBySemitonesUp(pitchName: string, semitonesUp: number): Pitch {
    const originPitchNum = this.getPitchNumByName(pitchName);
    const transposedPitchNum = this.transposeByPitchNum(originPitchNum, semitonesUp);
    console.log(this.getPitchByNum(transposedPitchNum));
    return this.getPitchByNum(transposedPitchNum);
  }

  clearForm() {
    // TODO
  }


}
