import {ISubRubric} from './rubrics.interface';

export interface ISubRubricUP {
    UP01: ISubRubric;
    UP02: ISubRubric;
    UP03: ISubRubric;
    UP04: ISubRubric;
    UP05: ISubRubric;
    UP06: ISubRubric;
}

export default {
    UP01: {
        en: {
            title: 'Increase of capital'
        },
        de: {
            title: 'Kapitalerhöhung'
        }
    },
    UP02: {
        en: {
            title: 'Bond, dividend, distribution'
        },
        de: {
            title: 'Anleihe, Dividende, Ausschüttung'
        }
    },
    UP03: {
        en: {
            title: 'Conversion of securities'
        },
        de: {
            title: 'Umwandlung von Wertpapieren'
        }
    },
    UP04: {
        en: {
            title: 'Invitation to the General Meeting'
        },
        de: {
            title: 'Einladung zur Generalversammlung'
        }
    },
    UP05: {
        en: {
            title: 'Listing'
        },
        de: {
            title: 'Kotierung'
        }
    },
    UP06: {
        en: {
            title: 'Other notification issued to company members'
        },
        de: {
            title: 'Weitere Mitteilung an Gesellschafter'
        }
    }
} as ISubRubricUP;
