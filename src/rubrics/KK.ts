import {ISubRubric} from './rubrics.interface';

export interface ISubRubricKK {
    KK01: ISubRubric;
    KK02: ISubRubric;
    KK03: ISubRubric;
    KK04: ISubRubric;
    KK05: ISubRubric;
    KK06: ISubRubric;
    KK07: ISubRubric;
    KK08: ISubRubric;
    KK09: ISubRubric;
    KK10: ISubRubric;
}

export default {
    KK01: {
        en: {
            title: 'Prior notification of launch of bankruptcy proceedings'
        },
        de: {
            title: 'Vorläufige Konkursanzeige'
        }
    },
    KK02: {
        en: {
            title: 'Notification of bankruptcy proceedings/Call to creditors'
        },
        de: {
            title: 'Konkurspublikation/Schuldenruf'
        }
    },
    KK03: {
        en: {
            title: 'Suspension of bankruptcy proceedings'
        },
        de: {
            title: 'Einstellung des Konkursverfahrens'
        }
    },
    KK04: {
        en: {
            title: 'Schedule of claims and inventory'
        },
        de: {
            title: 'Kollokationsplan und Inventar'
        }
    },
    KK05: {
        en: {
            title: 'Distribution plan and the final counting'
        },
        de: {
            title: 'Verteilungsliste und Schlussrechnung'
        }
    },
    KK06: {
        en: {
            title: 'Closing of bankruptcy proceedings'
        },
        de: {
            title: 'Schluss des Konkursverfahrens'
        }
    },
    KK07: {
        en: {
            title: 'Revocation of bankruptcy proceedings'
        },
        de: {
            title: 'Widerruf des Konkurses'
        }
    },
    KK08: {
        en: {
            title: 'Property auction initiated by the bankruptcy office'
        },
        de: {
            title: 'Konkursamtliche Grundstücksteigerung'
        }
    },
    KK09: {
        en: {
            title: 'Schedule of charges'
        },
        de: {
            title: 'Lastenverzeichnis'
        }
    },
    KK10: {
        en: {
            title: 'Other public notice'
        },
        de: {
            title: 'Weitere Bekanntmachung'
        }
    }
} as ISubRubricKK;
