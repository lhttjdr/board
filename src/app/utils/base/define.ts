export enum RULE {
    GO,
    Renju,
    Gomuku,
}

export enum FORMAT {
    sgf,
    lib,
}

export enum COLOR {
    Black,
    White,
}

export enum SHAPE {
    Circle,
    Indicator,
    Pass,
    Last,
    Square,
}

export enum BACKGROUND {
    None,
    White,
    Wood,
}

export enum MODE {
    Edit,
    Play,
    ReadOnly,
}

export enum FORBIDDEN {
    None,
    Five,  // [Renju] contentious view: Five will block open three/four by ending the game,
           // as same as other forbidden fork can block open three/four by losing the game immediately.
    DoubleThree, // [Renju]
    DoubleFour,  // [Renju]
    Overline,  // [Renju]
    Suicide, // [Go] forbidden under most rule-set (JP, CN)
    Repetition, // [Go] prohibit recurrences of an earlier board position,
    Overlap, // stone already exist
}

export enum KO {
    BasicKo, // Japanese style Ko. If one player captures the ko,
                // the opponent is prohibited from recapturing the ko immediately.
                // Thus, the capture two, recapture one (打二还一) is allowed.
    PositionalSuperko, // It prohibits a board play from repeating a position,
                        // regardless of whose turn it was when that position was first reached.
    SituationalSuperko, // It is illegal to recreate a previous board position from the game,
                        // with the same player to play.
    NaturalSituationalSuperko, // A player may not use a board play to recreate a position,
                                // if the player used a board play to create it.
    ChineseSuperko, // A play may not recreate a previous board position
                        // from the game by means of basic ko or Sending two, returning one.
}

export enum SUICIDE {
    Forbidden,
    MoreThanOne,
}

export enum OPEN3 {
    RIF,
    Chinese,
}


export enum PLAYER {
    White,
    Black,
}

export enum MOVE {
    Board, // board play = put stone on board
    Pass, // for Go
    Resign, // give up
    Jusge, // ask for judgement
    Next, // for review mode
    Mark, // for board mark
    Indicator, // for mouse
    Preset, // preset stones
    Ready, // super root = ready to start
}

export enum MARK {
    Text,
    Triangle,
    Square,
}
