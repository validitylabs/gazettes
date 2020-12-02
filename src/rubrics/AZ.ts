import {ISubRubric} from './rubrics.interface';

export interface ISubRubricAZ {
    AZ01: ISubRubric;
    AZ02: ISubRubric;
}

export default {
    AZ01: {
        en: {
            title: 'Notice of examination'
        },
        de: {
            title: 'Prüfungsausschreibung'
        }
    },
    AZ02: {
        en: {
            title: 'Other notice'
        },
        de: {
            title: 'Weitere Anzeige'
        }
    }
} as ISubRubricAZ;
