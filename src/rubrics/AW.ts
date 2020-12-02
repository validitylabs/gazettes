import {ISubRubric} from './rubrics.interface';

export interface ISubRubricAW {
    AW01: ISubRubric;
    AW02: ISubRubric;
    AW03: ISubRubric;
}

export default {
    AW01: {
        en: {
            title: 'Call'
        },
        de: {
            title: 'Aufruf'
        }
    },
    AW02: {
        en: {
            title: 'Annulment'
        },
        de: {
            title: 'Kraftloserklärung'
        }
    },
    AW03: {
        en: {
            title: 'Revocation'
        },
        de: {
            title: 'Widerruf'
        }
    }
} as ISubRubricAW;
