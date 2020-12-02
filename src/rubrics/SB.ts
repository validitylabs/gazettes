import {ISubRubric} from './rubrics.interface';

export interface ISubRubricSB {
    SB01: ISubRubric;
    SB02: ISubRubric;
    SB03: ISubRubric;
    SB04: ISubRubric;
    SB05: ISubRubric;
    SB06: ISubRubric;
}

export default {
    SB01: {
        en: {
            title: 'Property auction initiated by the debt enforcement office'
        },
        de: {
            title: 'Betreibungsamtliche Grundstücksteigerung'
        }
    },
    SB02: {
        en: {
            title: 'Payment order'
        },
        de: {
            title: 'Zahlungsbefehl'
        }
    },
    SB03: {
        en: {
            title: 'Sequestration order and report'
        },
        de: {
            title: 'Arrestbefehl/-urkunde'
        }
    },
    SB04: {
        en: {
            title: 'Seizure notice and report'
        },
        de: {
            title: 'Pfändungsanzeige/-urkunde'
        }
    },
    SB05: {
        en: {
            title: 'Purging of the retention of title register'
        },
        de: {
            title: 'Bereinigung des Eigentumsvorbehaltsregisters'
        }
    },
    SB06: {
        en: {
            title: 'Other public notice'
        },
        de: {
            title: 'Weitere Bekanntmachung'
        }
    }
} as ISubRubricSB;
