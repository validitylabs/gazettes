export type SortOrdersDirectionType = 'ASC' | 'DESC';

export type SortOrderColumnType = 'PUBLICATION_DATE' | 'COPY_DEADLINE' | 'UPDATE_DATE' | 'PUBLICATION_NUMBER';

export type SortOrderType = {
    column: SortOrderColumnType;
    direction: SortOrdersDirectionType;
};

export type LanguageType = 'de' | 'en' | 'fr' | 'it';

export type CantonsType =
    | 'AG'
    | 'AI'
    | 'AR'
    | 'BE'
    | 'BL'
    | 'BS'
    | 'FR'
    | 'GE'
    | 'GL'
    | 'GR'
    | 'JU'
    | 'LU'
    | 'NE'
    | 'NW'
    | 'OW'
    | 'SG'
    | 'SH'
    | 'SO'
    | 'SZ'
    | 'TG'
    | 'TI'
    | 'UR'
    | 'VD'
    | 'VS'
    | 'ZG'
    | 'ZH';

export type PublicationStateType =
    | 'DRAFT'
    | 'SUBMITTED'
    | 'APPROVED'
    | 'PUBLISHED'
    | 'EXPIRED'
    | 'CANCELLED'
    | 'CANCELLED_EXPIRED';

export type TenantCodeType =
    | 'shab'
    | 'kablu'
    | 'kabnw'
    | 'kabju'
    | 'kabbl'
    | 'kabfr'
    | 'kabbs'
    | 'kabti'
    | 'kabne'
    | 'kabvs'
    | 'kabbe'
    | 'kabgl'
    | 'kabsz'
    | 'kabag'
    | 'kabai'
    | 'kabow'
    | 'kabgr'
    | 'kabzg'
    | 'kabvd'
    | 'kabar'
    | 'kabtg'
    | 'kabsh'
    | 'kabsg'
    | 'kabur'
    | 'kabso'
    | 'kabge'
    | 'kabzh';

export type RubricsType =
    | 'AB'
    | 'AW'
    | 'AZ'
    | 'BB'
    | 'BH'
    | 'EK'
    | 'ES'
    | 'FM'
    | 'HR'
    | 'KK'
    | 'LS'
    | 'NA'
    | 'SB'
    | 'SR'
    | 'UP'
    | 'UV';

export type SubRubricsType =
    | 'AB01'
    | 'AB02'
    | 'AB03'
    | 'AB04'
    | 'AB05'
    | 'AB06'
    | 'AW01'
    | 'AW02'
    | 'AW03'
    | 'AZ01'
    | 'AZ02'
    | 'BB01'
    | 'BB02'
    | 'BB03'
    | 'BB04'
    | 'BB05'
    | 'BB06'
    | 'BH01'
    | 'BH02'
    | 'BH03'
    | 'BH04'
    | 'BH05'
    | 'BH06'
    | 'BH07'
    | 'EK10'
    | 'EK20'
    | 'EK30'
    | 'ES01'
    | 'ES02'
    | 'ES03'
    | 'ES04'
    | 'ES05'
    | 'ES06'
    | 'FM01'
    | 'FM02'
    | 'FM03'
    | 'FM04'
    | 'FM05'
    | 'FM06'
    | 'FM07'
    | 'FM08'
    | 'FM09'
    | 'FM10'
    | 'FM11'
    | 'FM12'
    | 'HR01'
    | 'HR02'
    | 'HR03'
    | 'KK01'
    | 'KK02'
    | 'KK03'
    | 'KK04'
    | 'KK05'
    | 'KK06'
    | 'KK07'
    | 'KK08'
    | 'KK09'
    | 'KK10'
    | 'LS01'
    | 'LS02'
    | 'LS03'
    | 'LS04'
    | 'LS05'
    | 'LS06'
    | 'LS07'
    | 'LS08'
    | 'NA01'
    | 'NA02'
    | 'NA03'
    | 'NA04'
    | 'NA05'
    | 'NA06'
    | 'NA07'
    | 'NA08'
    | 'NA09'
    | 'NA10'
    | 'NA11'
    | 'SB01'
    | 'SB02'
    | 'SB03'
    | 'SB04'
    | 'SB05'
    | 'SB06'
    | 'SR01'
    | 'SR02'
    | 'SR03'
    | 'SR04'
    | 'SR06'
    | 'UP01'
    | 'UP02'
    | 'UP03'
    | 'UP04'
    | 'UP05'
    | 'UP06'
    | 'UV01'
    | 'UV02'
    | 'UV03'
    | 'UV04';
