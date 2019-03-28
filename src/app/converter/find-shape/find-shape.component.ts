import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-find-shape',
  templateUrl: './find-shape.component.html',
  styleUrls: ['../find-param.css']
})
export class FindShapeComponent implements OnInit {

  frets = [
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

  public chordShape;
  public showCollapsible: boolean;

  findShapeForm = new FormGroup({
    capoPosition: new FormControl(''),
    chordSound: new FormControl('')
  });

  constructor(
    private converterService: ConverterService
  ) {
    this.chordShape = '';
    this.showCollapsible = true;
  }

  ngOnInit() {
    this.findShapeForm.valueChanges.subscribe(() => {
      this.chordShape = '';
    });
  }

  findChordShape(): void {
    const capoPosition = this.findShapeForm.value.capoPosition;
    const chordSound = this.findShapeForm.value.chordSound;
    if (!capoPosition) {
      this.triggerErrorModal('Please select a Capo Position');
      return;
    } else if (!chordSound) {
      this.triggerErrorModal(`Please enter the desired Chord Sound you want to hear. You'll just need the root note (e.g. "C").`);
      return;
    } else if (!this.converterService.isValidPitchInput(chordSound)) {
      this.triggerErrorModal(
        `We couldn't identify "${chordSound}" as a pitch. Please enter a valid pitch.
         Remember, all you need to enter is the pitch of the root note of the chord. For example, "B flat minor" would just be "B flat".`
      );
      return;
    }
    const chordShapeObj = this.converterService.transposePitchNameBySemitonesUp(chordSound, -capoPosition.fretNum);
    let chordShapeDisplayName = chordShapeObj.letter.toUpperCase();
    if (chordShapeObj.accidental) {
      chordShapeDisplayName += '#';
    }
    this.chordShape = chordShapeDisplayName;
  }

  triggerErrorModal(message: string) { // TODO: add popup modal
    alert(message);
  }

}
