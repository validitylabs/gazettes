import {ISubRubric} from './rubrics.interface';

export interface ISubRubricEK {
    EK10: ISubRubric;
    EK20: ISubRubric;
    EK30: ISubRubric;
}

export default {
    EK10: {
        en: {
            title: 'New entry'
        },
        de: {
            title: 'Neueintragung'
        }
    },
    EK20: {
        en: {
            title: 'Changed entry'
        },
        de: {
            title: 'Mutation'
        }
    },
    EK30: {
        en: {
            title: 'Deleted entry'
        },
        de: {
            title: 'Löschung'
        }
    }
} as ISubRubricEK;
