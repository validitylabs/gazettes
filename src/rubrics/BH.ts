import {ISubRubric} from './rubrics.interface';

export interface ISubRubricBH {
    BH01: ISubRubric;
    BH02: ISubRubric;
    BH03: ISubRubric;
    BH04: ISubRubric;
    BH05: ISubRubric;
    BH06: ISubRubric;
    BH07: ISubRubric;
}

export default {
    BH01: {
        en: {
            title: 'Call under Art. 152 CRO'
        },
        de: {
            title: 'Aufforderung nach Art. 152 HRegV'
        }
    },
    BH02: {
        en: {
            title: 'Call under Art. 153 CRO'
        },
        de: {
            title: 'Aufforderung nach Art. 153 HRegV'
        }
    },
    BH03: {
        en: {
            title: 'Call under Art. 154 CRO'
        },
        de: {
            title: 'Aufforderung nach Art. 154 HRegV'
        }
    },
    BH04: {
        en: {
            title: 'Call under Art. 155 CRO'
        },
        de: {
            title: 'Aufforderung nach Art. 155 HRegV'
        }
    },
    BH05: {
        en: {
            title: 'Call under several articles CRO'
        },
        de: {
            title: 'Aufforderung nach mehreren Artikeln HRegV'
        }
    },
    BH06: {
        en: {
            title: 'Call to account under Art. 155 CRO'
        },
        de: {
            title: 'Rechnungsruf nach Art. 155 HRegV'
        }
    },
    BH07: {
        en: {
            title: 'Official decision'
        },
        de: {
            title: 'Verfügung'
        }
    }
} as ISubRubricBH;
