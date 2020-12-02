import {CantonsType, LanguageType, PublicationStateType, RubricsType, SubRubricsType, TenantCodeType} from './types';

interface IRegistrationOffice {
    id: string;
    displayName: string;
    street: string;
    streetNumber: string;
    swissZipCode: string;
    town: string;
    containsPostOfficeBox: boolean;
    postOfficeBox: unknown | null | string;
}

interface ILanguages {
    de: string;
    en: string;
    fr: string;
    it: string;
}

interface IMeta {
    id: string;
    creationDate: string;
    updateDate: string;
    rubric: RubricsType;
    subRubric: SubRubricsType;
    language: LanguageType;
    registrationOffice: IRegistrationOffice;
    publicationOriginator: unknown | null | string;
    publicationNumber: string;
    publicationState: PublicationStateType;
    publicationDate: string;
    expirationDate: string | null;
    primaryTenantCode: TenantCodeType;
    onBehalfOf: null | unknown;
    invoiceAddressId: null | string;
    legalRemedy: string;
    cantons: CantonsType[];
    secondaryTenants: TenantCodeType | null;
    repeatedPublications: unknown | null;
    customsStampImages: unknown[];
    title: ILanguages;
    dossierReference: null | unknown;
    copyDeadline: null | unknown;
}

interface IAdress {
    street: string;
    houseNumber: string;
    swissZipCode: string;
    town: string;
}

interface ICompany {
    name: string;
    uid: string;
    uidOrganisationId: string;
    uidOrganisationIdCategorie: string;
    code13: string;
    seat: string;
    legalForm: string;
    noAddress: boolean;
    address: IAdress;
}

interface IRevision {
    optingOut: boolean;
}

interface ICommonsActual {
    company: ICompany;
    purpose: string;
    revision: IRevision;
}

interface ILastFosc {
    lastFoscDate: string;
    lastFoscNumber: number;
    lastFoscSequence: string;
}

interface IPatterns {
    title: ILanguages;
    uid: unknown;
    municipalities: unknown;
}

interface IRoot {
    patterns: IPatterns;
}

interface ITransaction {
    update: {
        changements: {
            others: boolean;
            nameChanged: boolean;
            uidChanged: boolean;
            legalStatusChanged: boolean;
            seatChanged: boolean;
            addressChanged: boolean;
            purposeChanged: boolean;
            capitalChanged: {
                nominal: boolean;
                paid: boolean;
                other: boolean;
            };
            statusChanged: {
                bankruptcy: {
                    dissolution: boolean;
                    dismissal: boolean;
                    revocation: boolean;
                    cancellation: boolean;
                    summary: boolean;
                };
                liquidation: {
                    dissolution: {
                        nonExceptional: boolean;
                        or731b: boolean;
                        hregv153b: boolean;
                    };
                    revocation: boolean;
                };
                suspension: boolean;
                reentry: boolean;
                reapplication: boolean;
            };
        };
    };
}

interface ICommonsNew {
    company: ICompany;
    purpose: string;
    revision: unknown;
}

interface IPubContent {
    testImport: boolean;
    commonsActual: ICommonsActual;
    lastFosc: ILastFosc;
    publicationText: string;
    root: IRoot;
    journalNumber: string;
    journalDate: string;
    senderOffice: unknown;
    transaction: ITransaction | unknown;
    commonsNew: ICommonsNew | unknown;
}

interface IContent {
    meta: IMeta;
    links: unknown[];
    attachments: unknown[];
    content: IPubContent;
    commented: boolean;
}

interface IPageRequest {
    sortOrders: unknown[];
    page: number;
    size: number;
}

export interface IPublications {
    content: IContent[];
    total: number;
    pageRequest: IPageRequest;
}
