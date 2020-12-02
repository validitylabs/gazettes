# Gazettes
Thin wrapper around the open REST API provided by the official gazettes portal 

**Currently only the Tenant SHAB, and only english and german languages for the rubric mapping are supported at the moment**

## Important Notice
The API provided is designed for productive use. Nevertheless, the operator of the Official Gazettes Portal does not guarantee the completeness and accuracy of the data transfered via API. The legally binding nature of a publication is exclusively guaranteed by the content of the signed PDF-document. The operator cannot be held responsible for the content of a publication in any way

## Params

Some explanation on the set parameters:

- The parameter publicationStates is mandatory and has to be set to PUBLISHED
- The parameter rubrics=['KK'] determines the requested rubric "Bankruptcies". The spelling of rubrics in plural indicates that multiple rubrics can be requested by array.
- The parameters publicationDateStart and publicationDateEnd determine the period of publication of the requested publications

**Important Notice**
No user profile is required to obtain published data. In some cases, however, it is necessary to obtain publications that have not yet been published. To do so, you need to be tenant admin.

| Param | Description | Type | Notes |
| ----- | ----------- | ---- | ----- |
| keyword | Searches for one or multiple words in the publication content. | String | Only whole words are matched. However one can also use a wildcard sign "*" for enhanced search (i.e. "keyword=Bank*" parameter will also find publications containing the word "Bankruptcy").
| title | Search for one or multiple words within the title of the publications. | String | Same rules as for the "keyword" param apply.
| publicationNumbers | Searches for publications with the given numbers. | Array | - |
| publicationStates | Searches for publications with the given statuses. | Array | - |
| publicationDateStart + publicationDateEnd | Filters the search results by the publication dates. "start" is the starting point, "end" the endpoint. If only one value is given, the filter has no start or endpoint. | String | The parameter combination "publicationDateStart=2017-01-01&publicationDateEnd=2017-01-01" searches for publications with the exact date 1.1.2017.
| rubrics + subRubrics | Filters for rubric and sub-rubric codes. Found publications belong to at least one of those rubrics or sub-rubrics. | Array | Use available rubric (i.e. "AB") or subrubric (i.e. "AB01") codes here. => @see https://docs.google.com/spreadsheets/d/1TcDa514nA1wioAEf8DNOgCVNkDS2DznQFphs8tPx3N4/edit#gid=0
| cantons | Filters by cantons, whereas a canton is given by its short name. | Array | Use standard canton codes here, i.e. "BE" (Bern) , "ZH" (Zürich), etc.
| tenant | Publications are returned only, if they are published in the the given tenant. The value has to be the tenant’s unique code. | String | Possible values are: shab (=Schweizerisches Handelsamtsblatt), kabzh (=Kantonales Amtsblatt Zürich), kabbe (=KAB Bern), kablu (=KAB Luzern), kabge (=KAB Genf), …​
| tenantOrCantons | Flag which implies that tenant OR cantons will be combined in search result. | Boolean | Both criteria combined results in (tenant=zh OR cantons=zh OR cantons=be) AND (publicationState=published).
| registrationOfficeIds | Filtering for one or multiple registration offices, given by their IDs. | Array | Instructions on how to obtain a registration office ID can be find below (see the Submitting publications section).
| registrationOfficeZipCodes | Filtering publications by Zip Code of the publications registration office. | Array | Publications related to one or many zip codes can be received as an array.
| originatorNames | Searches for names of publication originators (name or surname). | Array | -
| uids | Searches for the UIDs of the publication. | Array | Use the following syntax: CHE-XXX.XXX.XXX
| pageRequestPage | The default search returns only the first 100 hits, which is the first "page". If this parameter is set to a value greater than 0, the according page is returned. | Number | The first page has the value "0". Value "1" returns results starting from 101 to 200, "2" hits 201-300, and so on.
| pageRequestSize | If more than 100 hits are required, the number of hits per page can be chosen with this parameter. | Number | More than 2000 hits are not allowed.
| pageRequestSortOrders | Allows sorting of results based on one of the following criteria: (publication date (default if nothing provided) / copy deadline / update date / publication number) | Object | Use the following syntax: "pageRequestSortOrders={column:'UPDATE_DATE', direction: 'DESC'}" with the following possible values:(for the "column" parameter: PUBLICATION_DATE / COPY_DEADLINE / UPDATE_DATE / PUBLICATION_NUMBER, for the "direction" parameter: DESC - for descending order / ASC - for ascending order)
