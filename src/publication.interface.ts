import {CantonsType, PublicationStateType, TenantCodeType, RubricsType, SubRubricsType} from './types';

interface IRegistrationOffice {
    id: string;
    displayName: string;
    street: string;
    streetNumber: string;
    swissZipCode: string;
    town: string;
    containsPostOfficeBox: string;
    postOfficeBox: string;
}

interface ITitle {
    de: string;
    en: string;
    it: string;
    fr: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMunicipality {
    swissZipCode: string;
    town: string;
}

interface IMeta {
    id: string;
    creationDate: string;
    updateDate: string;
    rubric: RubricsType;
    subRubric: SubRubricsType;
    language: string;
    registrationOffice: IRegistrationOffice;
    publicationNumber: string;
    publicationState: PublicationStateType;
    publicationDate: string;
    expirationDate: string | null;
    primaryTenantCode: TenantCodeType;
    onBehalfOf: unknown | null;
    invoiceAddressId: string;
    legalRemedy: string;
    cantons: CantonsType[];
    secondaryTenants: TenantCodeType[] | null;
    repeatedPublications: unknown | null;
    followUpPublicationTypeId: unknown | null;
    customsStampImages: [];
    title: ITitle;
    uid: string[];
    municipalities: IMunicipality[] | unknown;
    hasSignedPdf: boolean;
}

export interface IPublication {
    meta: IMeta;
    privateMeta: unknown | null;
    links: string[];
    comments: string[];
    attachments: string[];
    editFormId: string;
    viewFormId: string;
    version: number;
}
