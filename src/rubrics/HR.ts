import {ISubRubric} from './rubrics.interface';

export interface ISubRubricHR {
    HR01: ISubRubric;
    HR02: ISubRubric;
    HR03: ISubRubric;
}

export default {
    HR01: {
        en: {
            title: 'New entry'
        },
        de: {
            title: 'Neueintrag'
        }
    },
    HR02: {
        en: {
            title: 'Change'
        },
        de: {
            title: 'Mutation'
        }
    },
    HR03: {
        en: {
            title: 'Deletion'
        },
        de: {
            title: 'Löschung'
        }
    }
} as ISubRubricHR;
