import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-find-fret',
  templateUrl: './find-fret.component.html',
  styleUrls: ['../find-param.css']
})
export class FindFretComponent implements OnInit {

  public frets = [
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

  public capoPosition;

  findCapoPositionForm = new FormGroup({
    chordShape: new FormControl(''),
    chordSound: new FormControl('')
  });

  constructor(
    private converterService: ConverterService
  ) {
    this.capoPosition = '';
  }

  ngOnInit() {
    this.findCapoPositionForm.valueChanges.subscribe(() => {
      this.capoPosition = '';
    });
  }

  findCapoPosition(): void {
    const chordShape = this.findCapoPositionForm.value.chordShape;
    const chordSound = this.findCapoPositionForm.value.chordSound;
    if (!chordShape && !chordSound) {
      this.triggerErrorModal('Please enter the Chord Shape and desired Chord Sound.');
      return;
    } else if (!chordShape) {
      this.triggerErrorModal(`Please enter the Chord Shape you want to play. You'll just need the root note (e.g. "C").`);
      return;
    } else if (!chordSound) {
      this.triggerErrorModal(`Please enter the desired Chord Sound you want to hear. You'll just need the root note (e.g. "C").`);
      return;
    } else if (!this.converterService.isValidPitchInput(chordShape)) {
      this.triggerErrorModal(
        `We couldn't identify "${chordShape}" as a pitch. Please enter a valid pitch. Remember, all you need to enter is the pitch of the root note of the chord. For example, "B flat minor" would just be "B flat".`
      );
      return;
    } else if (!this.converterService.isValidPitchInput(chordSound)) {
      this.triggerErrorModal(
        `We couldn't identify "${chordSound}" as a pitch. Please enter a valid pitch. Remember, all you need to enter is the pitch of the root note of the chord. For example, "B flat minor" would just be "B flat".`
      );
      return;
    }
    const shapePitchNum = this.converterService.getPitchNumByName(chordShape);
    const soundPitchNum = this.converterService.getPitchNumByName(chordSound);
    const capoFret = this.converterService.mod(soundPitchNum - shapePitchNum, 12);
    this.capoPosition = capoFret;
  }

  triggerErrorModal(message: string) { // TODO: add popup modal
    alert(message);
  }

}
