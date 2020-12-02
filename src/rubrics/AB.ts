import {ISubRubric} from './rubrics.interface';

export interface ISubRubricAB {
    AB01: ISubRubric;
    AB02: ISubRubric;
    AB03: ISubRubric;
    AB04: ISubRubric;
    AB05: ISubRubric;
    AB06: ISubRubric;
}

export default {
    AB01: {
        en: {
            title: 'Request for work-time permit'
        },
        de: {
            title: 'Gesuch um Erteilung von Arbeitszeitbewilligung'
        }
    },
    AB02: {
        en: {
            title: 'Work-time permit granted'
        },
        de: {
            title: 'Erteilte Arbeitszeitbewilligung'
        }
    },
    AB03: {
        en: {
            title: 'Permit denied'
        },
        de: {
            title: 'Abgelehntes Gesuch'
        }
    },
    AB04: {
        en: {
            title: 'Employment contract'
        },
        de: {
            title: 'Arbeitsvertrag'
        }
    },
    AB05: {
        en: {
            title: 'Revocation of the federal licence for recruitment and hiring services.s'
        },
        de: {
            title: 'Entzug der eidgenössischen Vermittlungs- und Verleihbewilligung'
        }
    },
    AB06: {
        en: {
            title: 'Other notification'
        },
        de: {
            title: 'Weitere Bekanntmachung'
        }
    }
} as ISubRubricAB;
