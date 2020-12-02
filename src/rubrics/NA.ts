import {ISubRubric} from './rubrics.interface';

export interface ISubRubricNA {
    NA01: ISubRubric;
    NA02: ISubRubric;
    NA03: ISubRubric;
    NA04: ISubRubric;
    NA05: ISubRubric;
    NA06: ISubRubric;
    NA07: ISubRubric;
    NA08: ISubRubric;
    NA09: ISubRubric;
    NA10: ISubRubric;
    NA11: ISubRubric;
}

export default {
    NA01: {
        en: {
            title: 'Provisional composition moratorium'
        },
        de: {
            title: 'Provisorische Nachlassstundung'
        }
    },
    NA02: {
        en: {
            title: 'Definitive composition moratorium'
        },
        de: {
            title: 'Definitive Nachlassstundung'
        }
    },
    NA03: {
        en: {
            title: 'Call to creditors as part of composition proceedings/creditors meeting'
        },
        de: {
            title: 'Schuldenruf im Nachlassverfahren/Gläubigerversammlung'
        }
    },
    NA04: {
        en: {
            title: 'Extension of the composition moratorium'
        },
        de: {
            title: 'Verlängerung der Nachlassstundung'
        }
    },
    NA05: {
        en: {
            title: 'Bankruptcy during composition proceedings'
        },
        de: {
            title: 'Konkurs im Nachlassverfahren'
        }
    },
    NA06: {
        en: {
            title: 'Approval hearing on the composition agreement'
        },
        de: {
            title: 'Verhandlung über die Bestätigung des Nachlassvertrages'
        }
    },
    NA07: {
        en: {
            title: 'Approval of the composition agreement'
        },
        de: {
            title: 'Bestätigung des Nachlassvertrages'
        }
    },
    NA08: {
        en: {
            title: 'Lifting of composition moratorium following restructuring'
        },
        de: {
            title: 'Aufhebung der Nachlassstundung infolge Sanierung'
        }
    },
    NA09: {
        en: {
            title: 'Schedule of claims in the composition proceedings, including assignment of assets'
        },
        de: {
            title: 'Kollokationsplan im Nachlassverfahren mit Vermögensabtretung'
        }
    },
    NA10: {
        en: {
            title:
                'Report of activities/distribution plan and the final counting in the composition proceedings, including assignment of assets'
        },
        de: {
            title:
                'Rechenschaftsbericht/Verteilungsliste und Schlussrechnung im Nachlassverfahren mit Vermögensabtretung'
        }
    },
    NA11: {
        en: {
            title: 'Other public notice'
        },
        de: {
            title: 'Weitere Bekanntmachung'
        }
    }
} as ISubRubricNA;
