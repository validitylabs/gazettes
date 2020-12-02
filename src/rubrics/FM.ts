import {ISubRubric} from './rubrics.interface';

export interface ISubRubricFM {
    FM01: ISubRubric;
    FM02: ISubRubric;
    FM03: ISubRubric;
    FM04: ISubRubric;
    FM05: ISubRubric;
    FM06: ISubRubric;
    FM07: ISubRubric;
    FM08: ISubRubric;
    FM09: ISubRubric;
    FM10: ISubRubric;
    FM11: ISubRubric;
    FM12: ISubRubric;
}

export default {
    FM01: {
        en: {
            title: 'Notification issued to collective investment scheme unitholders'
        },
        de: {
            title: 'Mitteilung an die Anteilsinhaber kollektiver Kapitalanlagen'
        }
    },
    FM02: {
        en: {
            title: 'Balance sheet'
        },
        de: {
            title: 'Bilanz'
        }
    },
    FM03: {
        en: {
            title: 'Approval of the general agent for insurance companies'
        },
        de: {
            title: 'Genehmigung des Generalbevollmächtigten von Versicherungen'
        }
    },
    FM04: {
        en: {
            title: 'Licence to operate as an insurance provider'
        },
        de: {
            title: 'Bewilligung zum Betrieb von Versicherungszweigen'
        }
    },
    FM05: {
        en: {
            title: 'Transfer of the insurance stock'
        },
        de: {
            title: 'Übertragung des Versicherungsbestands'
        }
    },
    FM06: {
        en: {
            title: 'Surrender of licence by insurance company'
        },
        de: {
            title: 'Verzicht auf Bewilligung für Versicherungen'
        }
    },
    FM07: {
        en: {
            title: 'End of FINMA supervision'
        },
        de: {
            title: 'Entlassung aus der Finanzmarktaufsicht'
        }
    },
    FM08: {
        en: {
            title: 'Disclosure of shareholdings'
        },
        de: {
            title: 'Offenlegung von Beteiligung'
        }
    },
    FM09: {
        en: {
            title: 'Public notice of the partial liquidation'
        },
        de: {
            title: 'Bekanntmachung einer Teilliquidation'
        }
    },
    FM10: {
        en: {
            title: 'FINMA bankruptcy'
        },
        de: {
            title: 'FINMA-Konkurs'
        }
    },
    FM11: {
        en: {
            title: 'Cancellation of the outstanding equity securities'
        },
        de: {
            title: 'Kraftloserklärung restlicher Beteiligungspapiere'
        }
    },
    FM12: {
        en: {
            title: 'Other public notice'
        },
        de: {
            title: 'Weitere Bekanntmachung'
        }
    }
} as ISubRubricFM;
