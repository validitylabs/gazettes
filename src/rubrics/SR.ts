import {ISubRubric} from './rubrics.interface';

export interface ISubRubricSR {
    SR01: ISubRubric;
    SR02: ISubRubric;
    SR03: ISubRubric;
    SR04: ISubRubric;
    SR06: ISubRubric;
}

export default {
    SR01: {
        en: {
            title: 'Call to creditors following the merger of companies limited by shares acc. MerA'
        },
        de: {
            title: 'Schuldenruf infolge Fusion nach FusG'
        }
    },
    SR02: {
        en: {
            title: 'Call to creditors following a demerger'
        },
        de: {
            title: 'Schuldenruf infolge Spaltung'
        }
    },
    SR03: {
        en: {
            title:
                'Call to creditors following the transformation of a company limited by shares into a limited liability company'
        },
        de: {
            title:
                'Schuldenruf infolge Umwandlung einer Aktiengesellschaft in eine Gesellschaft mit beschränkter Haftung'
        }
    },
    SR04: {
        en: {
            title:
                "Call to creditors following the transfer of the company's registered office from Switzerland to another country"
        },
        de: {
            title: 'Schuldenruf infolge Sitzverlegung ins Ausland'
        }
    },
    // Yes right, there is no SR05 in the specification
    SR06: {
        en: {
            title: 'Call to creditors following the merger under CO (previous version)'
        },
        de: {
            title: 'Schuldenruf infolge Fusion nach Altrecht (OR)'
        }
    }
} as ISubRubricSR;
