
export interface Pitch {
    pitchNum: number;
    letter: string;
    accidental: boolean;
    sharpLetter?: string;
    flatLetter?: string;
    octave?: number;
}

export interface Chord {
    root: Pitch;
    isMajor: boolean;
}
