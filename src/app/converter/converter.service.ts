import { Injectable } from '@angular/core';
import { Pitch } from './music.interface';

@Injectable()
export class ConverterService {

  public scale: Pitch[] = [ // array representation of chromatic scale starting from C natural
    {
        pitchNum: 0,
        letter: 'c',
        accidental: false,
        sharpLetter: null,
        flatLetter: null
    },
    {
        pitchNum: 1,
        letter: 'c',
        accidental: true,
        sharpLetter: 'c',
        flatLetter: 'd'
    },
    {
        pitchNum: 2,
        letter: 'd',
        accidental: false,
        sharpLetter: null,
        flatLetter: null
    },
    {
        pitchNum: 3,
        letter: 'd',
        accidental: true,
        sharpLetter: 'd',
        flatLetter: 'e'
    },
    {
        pitchNum: 4,
        letter: 'e',
        accidental: false,
        sharpLetter: null,
        flatLetter: null
    },
    {
        pitchNum: 5,
        letter: 'f',
        accidental: false,
        sharpLetter: null,
        flatLetter: null
    },
    {
        pitchNum: 6,
        letter: 'f',
        accidental: true,
        sharpLetter: 'f',
        flatLetter: 'g'
    },
    {
        pitchNum: 7,
        letter: 'g',
        accidental: false,
        sharpLetter: null,
        flatLetter: null
    },
    {
        pitchNum: 8,
        letter: 'g',
        accidental: true,
        sharpLetter: 'g',
        flatLetter: 'a'
    },
    {
        pitchNum: 9,
        letter: 'a',
        accidental: false,
        sharpLetter: null,
        flatLetter: null
    },
    {
        pitchNum: 10,
        letter: 'a',
        accidental: true,
        sharpLetter: 'a',
        flatLetter: 'b'
    },
    {
        pitchNum: 11,
        letter: 'b',
        accidental: false,
        sharpLetter: null,
        flatLetter: null
    },
  ];

  public pitchNameMap: any = { // toLowercase and remove spaces
    'bsharp': 0,
    'b+': 0,
    'b#': 0,
    'c': 0,

    'csharp': 1,
    'c+': 1,
    'c#': 1,
    'dflat': 1,
    'd-': 1,
    'db': 1,

    'd': 2,

    'dsharp': 3,
    'd+': 3,
    'd#': 3,
    'eflat': 3,
    'e-': 3,
    'eb': 3,

    'e': 4,
    'fflat': 4,
    'f-': 4,
    'fb': 4,

    'esharp': 5,
    'e+': 5,
    'e#': 5,
    'f': 5,

    'fsharp': 6,
    'f+': 6,
    'f#': 6,
    'gflat': 6,
    'g-': 6,
    'gb': 6,

    'g': 7,

    'gsharp': 8,
    'g+': 8,
    'g#': 8,
    'aflat': 8,
    'a-': 8,
    'ab': 8,

    'a': 9,

    'asharp': 10,
    'a+': 10,
    'a#': 10,
    'bflat': 10,
    'b-': 10,
    'bb': 10,

    'b': 11,
    'cflat': 11,
    'c-': 11,
    'cb': 11

  };

  constructor() { }

}
