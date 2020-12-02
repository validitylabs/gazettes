/* eslint-disable @typescript-eslint/no-unused-vars */
import {Gazettes} from './index';
import {CantonsType, PublicationStateType, TenantCodeType, RubricsType, SubRubricsType, SortOrderType} from './types';

const explode = (value: string) => {
    const arr = value.split(',');

    if (arr.length === 1 && arr[0] === '') {
        return [];
    }

    return arr;
};

const toBoolean = (value: unknown) => {
    if (value === 'true') {
        return true;
    }
    return false;
};

const gazettes = new Gazettes({
    // tenant: process.env.TENANT as TenantCodeType,
    // publicationStates: explode(process.env.PUBLICATION_STATES as string) as PublicationStateType[],
    keyword: process.env.KEYWORD as string,
    title: process.env.TITLE as string,
    // publicationNumbers: explode(process.env.PUBLICATION_NUMBERS as string),
    // publicationDateStart: process.env.PUBLICATION_DATE_START as string,
    // publicationDateEnd: process.env.PUBLICATION_DATE_END as string,
    // rubrics: explode(process.env.RUBRICS as string) as RubricsType[],
    // subRubrics: explode(process.env.SUB_RUBRICS as string) as SubRubricsType[],
    // cantons: explode(process.env.CANTONS as string) as CantonsType[],
    // tenantOrCantons: toBoolean((process.env.TENANT_OR_CANTONS as unknown) as boolean),
    // registrationOfficeIds: explode(process.env.REGISTRATION_OFFICE_IDS as string),
    // registrationOfficeZipCodes: explode(process.env.REGISTRATION_OFFICE_ZIP_CODES as string),
    // originatorNames: explode(process.env.ORIGINATOR_NAMES as string),
    // uids: explode(process.env.UIDS as string),
    pageRequestPage: Number(process.env.PAGE_REQUEST_PAGE as unknown),
    pageRequestSize: Number(process.env.PAGE_REQUEST_SIZE as unknown),
    pageRequestSortOrders: {
        column: process.env.PAGE_REQUEST_SORT_ORDER_COL,
        direction: process.env.PAGE_REQUEST_SORT_ORDER_DIR
    } as SortOrderType
});

try {
    // Dump Gazette instance
    console.log('===========================');
    console.log('Gazette instance:');
    console.log('===========================');
    console.log(gazettes);

    // Search publications
    gazettes
        .searchPublications()
        .then((publications) => {
            console.log('===========================');
            console.log('Search publications:');
            console.log('===========================');
            console.log(JSON.stringify(publications, null, 4));

            // Get single publication
            gazettes
                .getPublication(process.env.PUB_ID as string)
                .then((pub) => {
                    console.log('===========================');
                    console.log('Get single publication:');
                    console.log('===========================');
                    console.log(pub);

                    // Get rubric mapping
                    console.log('===========================');
                    console.log('Get rubric mapping:');
                    console.log('===========================');
                    console.log(gazettes.getRubricMapping());

                    // Get sub rubric mapping by rubric id
                    console.log('===========================');
                    console.log('Get sub rubric mapping by rubric id:');
                    console.log('===========================');
                    console.log(gazettes.getSubRubricMapping('AB'));
                })
                .catch((err) => {
                    console.error(err);
                });
        })
        .catch((err) => {
            console.error(err);
        });
} catch (error) {
    console.error(error);
}
