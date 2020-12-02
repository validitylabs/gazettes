import {ISubRubric} from './rubrics.interface';

export interface ISubRubricLS {
    LS01: ISubRubric;
    LS02: ISubRubric;
    LS03: ISubRubric;
    LS04: ISubRubric;
    LS05: ISubRubric;
    LS06: ISubRubric;
    LS07: ISubRubric;
    LS08: ISubRubric;
}

export default {
    LS01: {
        en: {
            title: 'Call to creditors referred to liquidation of a share company'
        },
        de: {
            title: 'Liquidationsschuldenruf einer Aktiengesellschaft'
        }
    },
    LS02: {
        en: {
            title: 'Call to creditors following the liquidation of a limited liability company'
        },
        de: {
            title: 'Liquidationsschuldenruf einer Gesellschaft mit beschränkter Haftung'
        }
    },
    LS03: {
        en: {
            title: 'Call to creditors following the liquidation of a cooperative'
        },
        de: {
            title: 'Liquidationsschuldenruf einer Genossenschaft'
        }
    },
    LS04: {
        en: {
            title: 'Call to creditors following the liquidation of an association'
        },
        de: {
            title: 'Liquidationsschuldenruf eines Vereins'
        }
    },
    LS05: {
        en: {
            title: 'Call to creditors following the liquidation of a foundation'
        },
        de: {
            title: 'Liquidationsschuldenruf einer Stiftung'
        }
    },
    LS06: {
        en: {
            title: 'Call to creditors following the liquidation of a general partnership'
        },
        de: {
            title: 'Liquidationsschuldenruf einer Kollektivgesellschaft'
        }
    },
    LS07: {
        en: {
            title: 'Call to creditors following the liquidation of a limited partnership'
        },
        de: {
            title: 'Liquidationsschuldenruf einer Kommanditgesellschaft'
        }
    },
    LS08: {
        en: {
            title: 'Call to creditors following the liquidation of a partnership limited by shares'
        },
        de: {
            title: 'Liquidationsschuldenruf einer Kommanditaktiengesellschaft'
        }
    }
} as ISubRubricLS;
