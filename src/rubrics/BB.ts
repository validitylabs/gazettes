import {ISubRubric} from './rubrics.interface';

export interface ISubRubricBB {
    BB01: ISubRubric;
    BB02: ISubRubric;
    BB03: ISubRubric;
    BB04: ISubRubric;
    BB05: ISubRubric;
    BB06: ISubRubric;
}

export default {
    BB01: {
        en: {
            title: 'Shipping register'
        },
        de: {
            title: 'Schiffsregister'
        }
    },
    BB02: {
        en: {
            title: 'Application for inclusion in the Swiss Aircraft Records Register'
        },
        de: {
            title: 'Anmeldung zur Aufnahme in das Schweizerische Luftfahrzeugbuch'
        }
    },
    BB03: {
        en: {
            title: 'Public notice concerning the register of designations of origin and geographical indications'
        },
        de: {
            title: 'Bekanntmachung zum Register der Ursprungsbezeichnungen und geografischen Angaben'
        }
    },
    BB04: {
        en: {
            title: 'Public notice on foodstuffs'
        },
        de: {
            title: 'Bekanntmachung zu Lebensmittel'
        }
    },
    BB05: {
        en: {
            title: 'Public notice issued by the Competition Commission'
        },
        de: {
            title: 'Bekanntmachung der Wettbewerbskommission'
        }
    },
    BB06: {
        en: {
            title: 'Informal notification'
        },
        de: {
            title: 'Informelle Bekanntmachung'
        }
    }
} as ISubRubricBB;
