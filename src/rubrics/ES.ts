import {ISubRubric} from './rubrics.interface';

export interface ISubRubricES {
    ES01: ISubRubric;
    ES02: ISubRubric;
    ES03: ISubRubric;
    ES04: ISubRubric;
    ES05: ISubRubric;
    ES06: ISubRubric;
}

export default {
    ES01: {
        en: {
            title: 'Reading of the will'
        },
        de: {
            title: 'Testamentseröffnung'
        }
    },
    ES02: {
        en: {
            title: 'Call for heirs'
        },
        de: {
            title: 'Erbenaufruf'
        }
    },
    ES03: {
        en: {
            title: 'Call to account in connection with the public inventory'
        },
        de: {
            title: 'Rechnungsruf zur Aufnahme des öffentlichen Inventars'
        }
    },
    ES04: {
        en: {
            title: 'Charge of the public inventory'
        },
        de: {
            title: 'Auflage des öffentlichen Inventars'
        }
    },
    ES05: {
        en: {
            title: 'Call to account following an official liquidation'
        },
        de: {
            title: 'Rechnungsruf infolge amtlicher Liquidation'
        }
    },
    ES06: {
        en: {
            title: 'Call following the passing of an estate to a public entity'
        },
        de: {
            title: 'Rechnungsruf infolge Erbschaft an Gemeinwesen'
        }
    }
} as ISubRubricES;
