import {default as axios} from 'axios';
import {IProperties} from './properties.interface';
import {IPublication} from './publication.interface';
import {IPublications} from './publications.interface';
import {AB, AW, AZ, BB, BH, EK, ES, FM, HR, KK, LS, NA, SB, SR, UP, UV, rubrics} from './rubrics';
import {ISubRubricAB} from './rubrics/AB';
import {ISubRubricAW} from './rubrics/AW';
import {ISubRubricAZ} from './rubrics/AZ';
import {ISubRubricBB} from './rubrics/BB';
import {ISubRubricBH} from './rubrics/BH';
import {ISubRubricEK} from './rubrics/EK';
import {ISubRubricES} from './rubrics/ES';
import {ISubRubricFM} from './rubrics/FM';
import {ISubRubricHR} from './rubrics/HR';
import {ISubRubricKK} from './rubrics/KK';
import {ISubRubricLS} from './rubrics/LS';
import {ISubRubricNA} from './rubrics/NA';
import {IRubrics} from './rubrics/rubrics.interface';
import {ISubRubricSB} from './rubrics/SB';
import {ISubRubricSR} from './rubrics/SR';
import {ISubRubricUP} from './rubrics/UP';
import {ISubRubricUV} from './rubrics/UV';

export class Gazettes {
    endpoint;
    keyword;
    title;
    publicationNumbers;
    publicationStates;
    publicationDateStart;
    publicationDateEnd;
    rubrics;
    subRubrics;
    cantons;
    tenant;
    tenantOrCantons;
    registrationOfficeIds;
    registrationOfficeZipCodes;
    originatorNames;
    uids;
    pageRequestPage;
    pageRequestSize;
    pageRequestSortOrders;

    constructor(props: IProperties) {
        this.endpoint = 'https://amtsblattportal.ch/api/v1';
        this.keyword = props.keyword ? encodeURI(props.keyword) : '';
        this.title = props.title ? encodeURI(props.title) : '';
        this.publicationNumbers = props.publicationNumbers;
        this.publicationStates = props.publicationStates;
        this.publicationDateStart = props.publicationDateStart;
        this.publicationDateEnd = props.publicationDateEnd;
        this.rubrics = props.rubrics;
        this.subRubrics = props.subRubrics;
        this.cantons = props.cantons;
        this.tenant = props.tenant;
        this.tenantOrCantons = props.tenantOrCantons;
        this.registrationOfficeIds = props.registrationOfficeIds;
        this.registrationOfficeZipCodes = props.registrationOfficeZipCodes;
        this.originatorNames = props.originatorNames;
        this.uids = props.uids;
        this.pageRequestPage = props.pageRequestPage;
        this.pageRequestSize = props.pageRequestSize;
        this.pageRequestSortOrders = props.pageRequestSortOrders;

        if (
            (this.publicationDateStart && !this.publicationDateEnd) ||
            (!this.publicationDateStart && this.publicationDateEnd)
        ) {
            throw new Error('publicationDateStart && publicationDateEnd only works in combination');
        }
    }

    /**
     * Search publications by given properties
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public searchPublications = async (): Promise<IPublications | null> => {
        const response = await axios.get(`${this.endpoint}/publications?${this.buildQuery()}`, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        if (response.status !== 200) {
            return null;
        }

        return response.data;
    };

    /**
     * Get single publication
     */
    public getPublication = async (id: string): Promise<IPublication | null> => {
        const response = await axios.get(`${this.endpoint}/publications/${id}`, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        if (response.status !== 200) {
            return null;
        }

        return response.data;
    };

    /**
     * Get mapping for all top level rubrics
     */
    public getRubricMapping = (): IRubrics => {
        return rubrics;
    };

    /**
     * Get mapping of given sub rubric
     */
    public getSubRubricMapping = (
        rubricId: string
    ):
        | ISubRubricAW
        | ISubRubricAB
        | ISubRubricAZ
        | ISubRubricBB
        | ISubRubricBH
        | ISubRubricEK
        | ISubRubricES
        | ISubRubricFM
        | ISubRubricHR
        | ISubRubricKK
        | ISubRubricLS
        | ISubRubricNA
        | ISubRubricSB
        | ISubRubricSR
        | ISubRubricUP
        | ISubRubricUV => {
        switch (rubricId) {
            case 'AB':
                return AB;
            case 'AW':
                return AW;
            case 'AZ':
                return AZ;
            case 'BB':
                return BB;
            case 'BH':
                return BH;
            case 'EK':
                return EK;
            case 'ES':
                return ES;
            case 'FM':
                return FM;
            case 'HR':
                return HR;
            case 'KK':
                return KK;
            case 'LS':
                return LS;
            case 'NA':
                return NA;
            case 'SB':
                return SB;
            case 'SR':
                return SR;
            case 'UP':
                return UP;
            case 'UV':
                return UV;
            default:
                throw new Error('Unknown rubric sub ID');
        }
    };

    /**
     * Stringifies an array for usage in GET query
     */
    stringifyProp = (key: string, value: string[]): string => {
        let queryString = '';

        value.forEach((prop) => {
            queryString += `${key}=${prop}&`;
        });

        return queryString.substr(0, queryString.length - 1);
    };

    /**
     * Checks if an array is not empty
     */
    protected notEmptyArr = (arr: string[] | undefined): boolean => {
        if (!arr || arr === undefined || arr.length === 0) {
            return false;
        }
        return true;
    };

    /**
     * Build GET query params for publication search
     */
    protected buildQuery = (): string => {
        const tenant = this.tenant ? `tenant=${this.tenant}&` : 'tenant=shab&';

        const publicationStates = this.notEmptyArr(this.publicationStates)
            ? `${this.stringifyProp('publicationStates', this.publicationStates as string[])}&`
            : 'publicationStates=PUBLISHED&';

        const keyword = this.keyword ? `keyword=${this.keyword}&` : '';
        const title = this.title ? `title=${this.title}&` : '';

        const publicationNumbers = this.notEmptyArr(this.publicationNumbers)
            ? `${this.stringifyProp('publicationNumbers', this.publicationNumbers as string[])}&`
            : '';

        const publicationDateStart = this.publicationDateStart
            ? `publicationDate.start=${this.publicationDateStart}&`
            : '';
        const publicationDateEnd = this.publicationDateEnd ? `publicationDate.end=${this.publicationDateEnd}&` : '';

        const rubrics = this.notEmptyArr(this.rubrics)
            ? `${this.stringifyProp('rubrics', this.rubrics as string[])}&`
            : '';
        const subRubrics = this.notEmptyArr(this.subRubrics)
            ? `${this.stringifyProp('subRubrics', this.subRubrics as string[])}&`
            : '';
        const cantons = this.notEmptyArr(this.cantons)
            ? `${this.stringifyProp('cantons', this.cantons as string[])}&`
            : '';

        let tenantOrCantons;
        if (this.tenantOrCantons) {
            tenantOrCantons = `tenantOrCantons=true&`;
        } else if (this.tenantOrCantons === false) {
            tenantOrCantons = `tenantOrCantons=false&`;
        } else {
            tenantOrCantons = '';
        }

        const registrationOfficeIds = this.notEmptyArr(this.registrationOfficeIds)
            ? `${this.stringifyProp('registrationOfficeIds', this.registrationOfficeIds as string[])}&`
            : '';

        const registrationOfficeZipCodes = this.notEmptyArr(this.registrationOfficeZipCodes)
            ? `${this.stringifyProp('registrationOfficeZipCodes', this.registrationOfficeZipCodes as string[])}&`
            : '';

        const originatorNames = this.notEmptyArr(this.originatorNames)
            ? `${this.stringifyProp('originatorNames', this.originatorNames as string[])}&`
            : '';

        const uids = this.notEmptyArr(this.uids) ? `${this.stringifyProp('uids', this.uids as string[])}&` : '';

        const pageRequestPage = this.pageRequestPage !== undefined ? `pageRequest.page=${this.pageRequestPage}&` : '';
        const pageRequestSize = this.pageRequestSize !== undefined ? `pageRequest.size=${this.pageRequestSize}&` : '';

        const pageRequestSortOrders = this.pageRequestSortOrders
            ? `pageRequest.sortOrders=column:${this.pageRequestSortOrders.column}|direction:${this.pageRequestSortOrders.direction}&`
            : '';

        const result = '?'
            .concat(tenant)
            .concat(publicationStates)
            .concat(keyword)
            .concat(title)
            .concat(publicationNumbers)
            .concat(publicationDateStart)
            .concat(publicationDateEnd)
            .concat(rubrics)
            .concat(subRubrics)
            .concat(cantons)
            .concat(tenantOrCantons)
            .concat(registrationOfficeIds)
            .concat(registrationOfficeZipCodes)
            .concat(originatorNames)
            .concat(uids)
            .concat(pageRequestPage)
            .concat(pageRequestSize)
            .concat(pageRequestSortOrders);

        if (result.substr(result.length - 1) === '&') {
            return result.substr(0, result.length - 1);
        }

        return result;
    };
}
