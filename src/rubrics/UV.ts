import {ISubRubric} from './rubrics.interface';

export interface ISubRubricUV {
    UV01: ISubRubric;
    UV02: ISubRubric;
    UV03: ISubRubric;
    UV04: ISubRubric;
}

export default {
    UV01: {
        en: {
            title: 'Commercial court ruling'
        },
        de: {
            title: 'Handelsgerichtsentscheid'
        }
    },
    UV02: {
        en: {
            title: 'Other court ruling'
        },
        de: {
            title: 'Weiterer Gerichtsentscheid'
        }
    },
    UV03: {
        en: {
            title: 'Summon to appear'
        },
        de: {
            title: 'Gerichtliche Vorladung'
        }
    },
    UV04: {
        en: {
            title: 'Other public notice'
        },
        de: {
            title: 'Weitere Bekanntmachung'
        }
    }
} as ISubRubricUV;
