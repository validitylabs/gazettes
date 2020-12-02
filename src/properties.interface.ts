/**
 * @see https://amtsblattportal.ch/docs/api/#_core_concepts
 */

import {CantonsType, PublicationStateType, TenantCodeType, RubricsType, SubRubricsType, SortOrderType} from './types';

export interface IProperties {
    /**
     * keyword
     * Searches for one or multiple words in the publication content.
     * Only whole words are matched. However one can also use a wildcard sign "*" for enhanced search (i.e. "keyword=Bank*" parameter will also find publications containing the word "Bankruptcy").
     */
    keyword?: string | null;
    /**
     * title
     * Search for one or multiple words within the tiple of the publications.
     * Same rules as for the "keyword" param apply.
     */
    title?: string;
    /**
     * publicationNumbers
     * Searches for publications with the given numbers.
     */
    publicationNumbers?: string[];
    /**
     * publicationStates
     * Searches for publications with the given statuses.
     */
    publicationStates?: PublicationStateType[];
    /**
     * publicationDate.start + publicationDate.end
     * Filters the search results by the publication dates. "start" is the starting point, "end" the endpoint. If only one value is given, the filter has no start or endpoint.
     * The parameter combination "publicationDate.start=2017-01-01&publicationDate.end=2017-01-01" searches for publications with the exact date 1.1.2017.
     */
    publicationDateStart?: string;
    publicationDateEnd?: string;
    /**
     * rubrics + subRubrics
     * Filters for rubric and sub-rubric codes. Found publications belong to at least one of those rubrics or sub-rubrics.
     * Use available rubric (i.e. "AB") or subrubric (i.e. "AB01") codes here.
     */
    rubrics?: RubricsType[];
    subRubrics?: SubRubricsType[];
    /**
     * cantons
     * Filters by cantons, whereas a canton is given by its short name.
     * Use standard canton codes here, i.e. "BE" (Bern) , "ZH" (Zürich), etc.
     */
    cantons?: CantonsType[];
    /**
     * tenant
     * Publications are returned only, if they are published in the the given tenant. The value has to be the tenant’s unique code.
     * Possible values are: shab (=Schweizerisches Handelsamtsblatt), kabzh (=Kantonales Amtsblatt Zürich), kabbe (=KAB Bern), kablu (=KAB Luzern), kabge (=KAB Genf), ...
     */
    tenant?: TenantCodeType;
    /**
     * tenantOrCantons
     * Flag which implies that tenant OR cantons will be combined in search result.
     * Both criteria combined results in (tenant=zh OR cantons=zh OR cantons=be) AND (publicationState=published).
     */
    tenantOrCantons?: boolean;
    /**
     * registrationOfficeIds
     * Filtering for one or multiple registration offices, given by their IDs.
     * Instructions on how to obtain a registration office ID can be find below (see the Submitting publications section).
     */
    registrationOfficeIds?: string[];
    /**
     * registrationOfficeZipCodes
     * Filtering publications by Zip Code of the publications registration office.
     * Publications related to one or many zip codes can be received (comma separated, e.g: "/api/v1/publications/xml?publicationStates=PUBLISHED&publicationDate.end=2019-05-01&publicationDate.start=2019-01-03&registrationOfficeZipCodes=3006,8048")
     */
    registrationOfficeZipCodes?: string[];
    /**
     * originatorNames
     * Searches for names of publication originators (name or surname).
     *
     */
    originatorNames?: string[];
    /**
     * uuids
     * Searches for the UIDs of the publication.
     * Use the following syntax: CHE-XXX.XXX.XXX
     */
    uids?: string[];
    /**
     * pageRequest.page
     * The default search returns only the first 100 hits, which is the first "page". If this parameter is set to a value greater than 0, the according page is returned.
     * The first page has the value "0". Value "1" returns results starting from 101 to 200, "2" hits 201-300, and so on.
     */
    pageRequestPage?: number;
    /**
     * pageRequest.size
     * If more than 100 hits are required, the number of hits per page can be chosen with this parameter.
     * More than 2000 hits are not allowed.
     */
    pageRequestSize?: number;
    /**
     * pageRequest.sortOrders
     * Allows sorting of results based on one of the following criteria:
     * - publication date (default if nothing provided)
     * - copy deadline
     * - update date
     * - publication number
     *
     * Use the following syntax: "pageRequest.sortOrders=column:UPDATE_DATE|direction:DESC" with the following possible values:
     * for the "column" parameter:
     * - PUBLICATION_DATE
     * - COPY_DEADLINE
     * - UPDATE_DATE
     * - PUBLICATION_NUMBER
     * for the "direction" parameter:
     * - DESC - for descending order
     * - ASC - for ascending order
     */
    pageRequestSortOrders?: SortOrderType;
}
