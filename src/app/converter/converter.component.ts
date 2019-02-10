import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConverterService } from './converter.service';
import { Pitch } from './music.interface';
import * as $ from 'jquery/dist/jquery.min.js';
import 'bootstrap/js/dist/tooltip';
// import * as $ from 'jquery';

declare var jQuery: any;
// declare var $: any;

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit, AfterViewInit {

  public allFieldsStable: boolean;
  public capoChartsGoogleSearchUrl = 'https://www.google.com/search?safe=off&q=guitar+capo+chart&tbm=isch&source=univ&sa=X&ved=2ahUKEwigs768q63gAhU_HzQIHf97CL8QsAR6BAgEEAE&biw=1333&bih=948';
  public rootWikiUrl = 'https://en.wikipedia.org/wiki/Root_(chord)';

  private frets = [
    { name: 'No Capo', fretNum: 0 },
    { name: '1', fretNum: 1 },
    { name: '2', fretNum: 2 },
    { name: '3', fretNum: 3 },
    { name: '4', fretNum: 4 },
    { name: '5', fretNum: 5 },
    { name: '6', fretNum: 6 },
    { name: '7', fretNum: 7 },
    { name: '8', fretNum: 8 },
    { name: '9', fretNum: 9 },
    { name: '10', fretNum: 10 },
    { name: '11', fretNum: 11 }
  ];

  transpositionForm = new FormGroup({
    capoPosition: new FormControl(this.frets[0]),
    chordShape: new FormControl(''),
    chordSound: new FormControl('')
  });

  constructor(
    private converterService: ConverterService
  ) { }

  ngOnInit() {
    this.transpositionForm.valueChanges.subscribe(() => {
      this.allFieldsStable = false;
    });
  }

  ngAfterViewInit() {
    // $('[data-toggle="tooltip"]').tooltip();
  }

  getPitchNumByName(pitchName: string): number {
    const pitchMap = this.converterService.pitchNameMap; // pitchMap is a Dictionary
    const searchName = pitchName.toLowerCase().replace(/\s/g, '');
    let pitchNum = -1;
    for (const key in pitchMap) {
      if (key === searchName) {
        pitchNum = pitchMap[key];
      }
    }
    if (pitchNum < 0) {
      console.log('Could not find the pitch: ' + pitchName);
      return;
    } else {
      return pitchNum;
    }
  }

  isValidPitchInput(pitchName: string): boolean {
    const searchName = pitchName.toLowerCase().replace(/\s/g, '');
    for (const key in this.converterService.pitchNameMap) {
      if (key === searchName) {
        return true;
      }
    }
    return false;
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

  mod(n, m) {
    return ((n % m) + m) % m;
  }

  transposeByPitchNum(startingPitchNum: number, semitonesUp: number): number {
    return (this.mod(startingPitchNum + semitonesUp, 12));
  }

  transposePitchNameBySemitonesUp(pitchName: string, semitonesUp: number): Pitch {
    const originPitchNum = this.getPitchNumByName(pitchName);
    const transposedPitchNum = this.transposeByPitchNum(originPitchNum, semitonesUp);
    return this.getPitchByNum(transposedPitchNum);
  }

  resetForm() {
    // TODO
  }

  generateChordSound(): void {
    const capoPosition = this.transpositionForm.value.capoPosition;
    const chordShape = this.transpositionForm.value.chordShape;
    if (!chordShape) {
      this.triggerErrorModal(`Please enter the Chord Shape you want to play. You'll just need the root note (e.g. "C").`);
      return;
    } else if (!this.isValidPitchInput(chordShape)) {
      this.triggerErrorModal(
        `We couldn't identify "${chordShape}" as a pitch. Please enter a valid pitch. Remember, all you need to enter is the pitch of the root note of the chord. For example, "B flat minor" would just be "B flat".`
      );
      return;
    }
    const chordSoundObj = this.transposePitchNameBySemitonesUp(chordShape, capoPosition.fretNum);
    let chordSoundDisplayName = chordSoundObj.letter.toUpperCase();
    if (chordSoundObj.accidental) {
      chordSoundDisplayName += ' sharp';
    }
    this.transpositionForm.patchValue({
      chordSound: chordSoundDisplayName
    });
    this.allFieldsStable = true;
  }

  generateChordShape(): void {
    const capoPosition = this.transpositionForm.value.capoPosition;
    const chordSound = this.transpositionForm.value.chordSound;
    if (!chordSound) {
      this.triggerErrorModal(`Please enter the desired Chord Sound you want to hear. You'll just need the root note (e.g. "C").`);
      return;
    } else if (!this.isValidPitchInput(chordSound)) {
      this.triggerErrorModal(
        `We couldn't identify "${chordSound}" as a pitch. Please enter a valid pitch. Remember, all you need to enter is the pitch of the root note of the chord. For example, "B flat minor" would just be "B flat".`
      );
      return;
    }
    const chordShapeObj = this.transposePitchNameBySemitonesUp(chordSound, -capoPosition.fretNum);
    let chordShapeDisplayName = chordShapeObj.letter.toUpperCase();
    if (chordShapeObj.accidental) {
      chordShapeDisplayName += ' sharp';
    }
    this.transpositionForm.patchValue({
      chordShape: chordShapeDisplayName
    });
    this.allFieldsStable = true;
  }

  generateCapoPosition(): void {
    const chordShape = this.transpositionForm.value.chordShape;
    const chordSound = this.transpositionForm.value.chordSound;
    if (!chordShape && !chordSound) {
      this.triggerErrorModal('Please enter the Chord Shape and desired Chord Sound.');
      return;
    } else if (!chordShape) {
      this.triggerErrorModal(`Please enter the Chord Shape you want to play. You'll just need the root note (e.g. "C").`);
      return;
    } else if (!chordSound) {
      this.triggerErrorModal(`Please enter the desired Chord Sound you want to hear. You'll just need the root note (e.g. "C").`);
      return;
    } else if (!this.isValidPitchInput(chordShape)) {
      this.triggerErrorModal(
        `We couldn't identify "${chordShape}" as a pitch. Please enter a valid pitch. Remember, all you need to enter is the pitch of the root note of the chord. For example, "B flat minor" would just be "B flat".`
      );
      return;
    } else if (!this.isValidPitchInput(chordSound)) {
      this.triggerErrorModal(
        `We couldn't identify "${chordSound}" as a pitch. Please enter a valid pitch. Remember, all you need to enter is the pitch of the root note of the chord. For example, "B flat minor" would just be "B flat".`
      );
      return;
    }
    const shapePitchNum = this.getPitchNumByName(chordShape);
    const soundPitchNum = this.getPitchNumByName(chordSound);
    const capoFret = this.mod(soundPitchNum - shapePitchNum, 12);
    this.transpositionForm.patchValue({
      capoPosition: this.getFretObject(capoFret)
    });
    this.allFieldsStable = true;
  }

  getFretObject(fretNumber: number): object {
    for (const fret of this.frets) {
      if (fret.fretNum ===  fretNumber) {
        return fret;
      }
    }
  }

  triggerErrorModal(message: string) { // TODO: add popup modal
    alert(message);
  }

}
