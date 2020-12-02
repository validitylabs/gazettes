export interface IRubric {
    en: {
        title: string;
        description: string;
    };
    de: {
        title: string;
        description: string;
    };
}

export interface IRubrics {
    AB: IRubric;
    AW: IRubric;
    AZ: IRubric;
    BB: IRubric;
    BH: IRubric;
    EK: IRubric;
    ES: IRubric;
    FM: IRubric;
    HR: IRubric;
    KK: IRubric;
    LS: IRubric;
    NA: IRubric;
    SB: IRubric;
    SR: IRubric;
    UP: IRubric;
    UV: IRubric;
}

export interface ISubRubric {
    en: {
        title: string;
    };
    de: {
        title: string;
    };
}
