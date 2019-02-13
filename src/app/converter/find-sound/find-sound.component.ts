import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-sound',
  templateUrl: './find-sound.component.html',
  styleUrls: ['../find-param.css']
})
export class FindSoundComponent implements OnInit {

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

  public chordSound;
  public showCollapse: boolean;

  findSoundForm = new FormGroup({
    capoPosition: new FormControl('', Validators.required),
    chordShape: new FormControl('', Validators.required)
  });


  constructor(
    private converterService: ConverterService
  ) {
    this.chordSound = '';
    this.showCollapse = true;
  }

  ngOnInit() {
    this.findSoundForm.valueChanges.subscribe(() => {
      this.chordSound = '';
    });
  }

  findChordSound(): void {
    const capoPosition = this.findSoundForm.value.capoPosition;
    const chordShape = this.findSoundForm.value.chordShape;
    if (!chordShape) {
      this.triggerErrorModal(`Please enter the Chord fingering you want to play. You'll just need the root note (e.g. "C").`);
      return;
    } else if (!this.converterService.isValidPitchInput(chordShape)) {
      this.triggerErrorModal(
        `We couldn't identify "${chordShape}" as a pitch. Please enter a valid pitch.
         Remember, all you need to enter is the pitch of the root note of the chord. For example, "B flat minor" would just be "B flat".`
      );
      return;
    } else if (!capoPosition) {
      this.triggerErrorModal('Please select a Capo Position');
      return;
    }
    const chordSoundObj = this.converterService.transposePitchNameBySemitonesUp(chordShape, capoPosition.fretNum);
    let chordSoundDisplayName = chordSoundObj.letter.toUpperCase();
    if (chordSoundObj.accidental) {
      chordSoundDisplayName += '#';
    }
    this.chordSound = chordSoundDisplayName;
  }

  triggerErrorModal(message: string) { // TODO: add popup modal
    alert(message);
  }


}
