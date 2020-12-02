/**
 * @see Specification: https://docs.google.com/spreadsheets/d/1TcDa514nA1wioAEf8DNOgCVNkDS2DznQFphs8tPx3N4/edit#gid=0
 */

import AB from './AB';
import AW from './AW';
import AZ from './AZ';
import BB from './BB';
import BH from './BH';
import EK from './EK';
import ES from './ES';
import FM from './FM';
import HR from './HR';
import KK from './KK';
import LS from './LS';
import NA from './NA';
import SB from './SB';
import SR from './SR';
import UP from './UP';
import UV from './UV';
import {IRubrics} from './rubrics.interface';

export {AB, AW, AZ, BB, BH, EK, ES, FM, HR, KK, LS, NA, SB, SR, UP, UV};

export const rubrics = {
    AB: {
        en: {
            title: 'Employment',
            description:
                'The State Secretariat for Economic Affairs (SECO) publishes applications for work-time permits, including successful and rejected applications, as well as general employment contracts under this SOGC category.'
        },
        de: {
            title: 'Arbeit',
            description:
                'Unter dieser Rubrik werden Gesuche und Arbeitszeitbewilligung sowie deren Erteilung oder Ablehnungen und allgemeine Arbeitsverträge durch das Staatssekretariat für Wirtschaft im SHAB publiziert.'
        }
    },
    AW: {
        en: {
            title: 'Lost securities and other titles',
            description:
                'In the event of lost securities or other titles, this information is disclosed by means of a publication in the SOGC and in certain cantonal Official Gazettes. From a legal standpoint, the information which is published in the SOGC always prevails. As a general rule, three calls are published. If the lost security is not presented within the stipulated timeframe, it is annulled. However, a request to revoke the annulment may be filed if the lost security is presented before the time limit expires.'
        },
        de: {
            title: 'Abhandengekommene Wertpapiere und andere Titel',
            description:
                'Ist ein Wertpapier oder ein anderer Titel verloren gegangen, wird dies mit einer Publikation im SHAB und teilweise in kantonalen Amtsblättern öffentlich bekannt gemacht. Rechtlich massgebend ist immer die SHAB-Publikation. In der Regel erfolgt ein Aufruf drei Mal. Kann der Titel innerhalb der Auskündigungsfrist, nicht vorgelegt werden, so wird dieser als kraftlos erklärt. Wird ein ausgerufener Titel vor dem Ablauf der Auskündigungsfrist vorgelegt, so kann das Gesuch um Kraftloserklärung widerrufen werden.'
        }
    },
    AZ: {
        en: {
            title: 'Notices',
            description: 'Companies now publish economic-related announcements under this new category in the SOGC.'
        },
        de: {
            title: 'Anzeigen',
            description: 'In dieser neuen Rubrik veröffentlichen Unternehmen wirtschaftsrelevante Mitteilungen im SHAB.'
        }
    },
    BB: {
        en: {
            title: 'Other public notices issued by the Confederation',
            description:
                'General public notices issued by the Federal Administration and similar bodies are now published in the SOGC under this new category.'
        },
        de: {
            title: 'Weitere Register und Bekanntmachungen Bund',
            description:
                'In dieser neuen Rubrik werden allgemeine Bekanntmachungen der Bundesverwaltung oder ähnlicher Stellen im SHAB publiziert.'
        }
    },
    BH: {
        en: {
            title: 'Public notices under the Commercial Register Ordinance',
            description:
                'Calls issued by companies which have ostensibly ceased to trade, as well as any subsequent calls to account and dissolution decisions are published in the SOGC and in certain cantonal Official Gazettes. From a legal standpoint, the information published in SOGC always prevails. "Commercial court rulings" are published under the "Court judgements, orders and summons" category.'
        },
        de: {
            title: 'Bekanntmachungen nach Handelsregisterverordnung',
            description:
                'Aufrufe von Gesellschaften, welche die Geschäftstätigkeit angeblich aufgegeben haben und allenfalls folgende Rechnungsrufe und Verfügungen zur Auflösung werden im SHAB und teilweise in kantonalen Amtsblättern publiziert. Rechtlich massgebend ist immer die SHAB-Publikation.'
        }
    },
    EK: {
        en: {
            title: 'Precious metal control',
            description:
                'All precious metal articles, multi-metal articles and plated articles traded in Switzerland must bear a responsibility mark which is registered with the Federal Customs Administration. Jewellers are holders of such marks. A publication appears in the SOGC if a new mark or an existing mark which hitherto had not been held by anyone is registered to a (new) holder, or in the event that holders change their name or address or are deleted from the register. However, the mark itself may not be deleted. A responsibility mark must be renewed every 20 years. All renewals are also published in the SOGC.'
        },
        de: {
            title: 'Edelmetallkontrolle (INAKTIV)',
            description:
                'Alle in der Schweiz in den Handel gesetzten Edelmetall-, Mehrmetall- und Plaquéwaren müssen mit einer bei der Eidgenössischen Zollverwaltung registrierten Verantwortlichkeitsmarke versehen sein. Schmuckhändler sind Inhaber solcher Marken. Im SHAB wird publiziert, wenn eine neue (oder bereits bestehende inhaberlose) Marke auf einen (neuen) Inhaber registriert wird, wenn Markeninhaber den Namen oder die Adresse ändert oder gelöscht wird. Eine Marke kann nicht gelöscht werden. Eine Verantwortlichkeitsmarke ist zwanzig Jahre gültig und muss danach erneuert werden. Diese Erneuerungen werden ebenfalls im SHAB publiziert.'
        }
    },
    ES: {
        en: {
            title: 'Estates',
            description:
                'Estate-related publications appear in the SOGC and in certain cantonal Official Gazettes. "The Reading of the will" is the official disclosure of the content of the will to the known heirs and, where applicable, executors. The purpose of this procedure is to ensure that the estate is administered in accordance with the wishes of the testator. If there are no known heirs to the estate or in the absence of information on the domicile of known heirs, a ""Call for heirs"" is opened, inviting these parties to assert their claims. Heirs may renounce their inheritance, which will invoke the creation of a public inventory. This document lists the assets and liabilities of the deceased\'s estate. All creditors and debtors of the deceased are invited, by means of a public call to account, to register any claims or declare any debts they may have in relation to the deceased. Creditors of the deceased and any legatees may demand an official liquidation of the estate.'
        },
        de: {
            title: 'Erbschaft',
            description:
                'Erbschaftspublikationen werden im SHAB und teilweise in kantonalen Amtsblättern veröffentlicht. Eine «Testamentseröffnung» ist die behördliche Bekanntgabe des Testamentsinhaltes an die bekannten Erben sowie allfällige Willensvollstrecker und bezweckt die Sicherstellung der Nachlassabwicklung nach dem Willen des Erblassers. Sind die Erben einer verstorbenen Person unbekannt oder unbekannten Aufenthalts, werden diese mit einem «Erbenaufruf» aufgefordert, ihre Ansprüche anzumelden. Ein Erbe kann die Erbschaft ausschlagen und dadurch ein öffentliches Inventar veranlassen. Diese besteht aus einem Verzeichnisse der Vermögenswerte und Schulden der Erbschaft. Alle Gläubiger und Schuldner des Erblassers werden durch den damit verbundenen Rechnungsruf aufgefordert, alle Forderungen und Schulden anzumelden. Gläubiger des Erblassers und Vermächtnisnehmer können eine amtliche Liquidation verlangen. Gibt es keine berechtigten Erben, ist das Gemeinwesen einziger gesetzlicher Erbe.'
        }
    },
    FM: {
        en: {
            title: 'Financial market',
            description:
                'This new SOGC category covers all financial- and insurance-related publications which previously appeared under the "Other legal publications" and "Balance sheets" categories.'
        },
        de: {
            title: 'Finanzmarkt',
            description:
                'Diese neue Rubrik wird im SHAB publiziert und beinhaltet finanz- und versicherungsthematische Meldungen aus den bisherigen Rubriken "andere gesetzliche Publikationen" und "Bilanzen".'
        }
    },
    HR: {
        en: {
            title: 'Commercial Register entries',
            description:
                'Commercial Register entries (new undertakings, changes and deletions) are published in the Swiss Official Gazette of Commerce (SOGC) and in certain cantonal Official Gazettes. From a legal standpoint, information published in the SOGC always prevails. Administered by the cantons, the Commercial Register is a database which provides publicly accessible and transparent information on the legal status and circumstances of registered undertakings. The Federal Commercial Registry Office (FCRO) is the supreme supervisory authority for the Commercial Register and oversees content published in the SOGC. It is also in charge of ZEFIX, the online and publicly accessible Central Business Names Index (www.zefix.ch).'
        },
        de: {
            title: 'Handelsregistereintragungen',
            description:
                'Handelsregistereintragungen (Neugründungen, Mutationen und Löschungen) werden im SHAB und teilweise in kantonalen Amtsblättern publiziert. Rechtlich massgebend ist immer die SHAB-Publikation. Das Handelsregister ist eine von den Kantonen verwaltete öffentliche Datenbank und macht die rechtlichen Verhältnisse von Gesellschaften öffentlich und damit auch transparent. Verantwortlich für die Oberaufsicht des Handelsregisters und die Publikation im SHAB ist das eidgenössische Handelsregisteramt, welches ein öffentlich einsehbares Zentralregister führt (www.zefix.ch).'
        }
    },
    KK: {
        en: {
            title: 'Bankruptcies',
            description:
                'Publications pertaining to bankruptcy proceedings appear under this category in the SOGC and in certain cantonal Official Gazettes. From a legal standpoint, the information which is published in the SOGC always prevails. A "Prior notification of the launch of bankruptcy proceedings" precedes the actual "Notification of bankruptcy proceedings". This procedure invites creditors to assert any claims they may have. The early conclusion of bankruptcy proceedings following a court order is published under the "Suspension of bankruptcy proceedings" category.  Once all claims have been registered within the permitted timeframe, an inventory is compiled of the debtor\'s assets and the creditors are ranked. A final counting is made based on the "Schedule of claims and inventory", and a distribution plan drawn up. The following are also published: "Closing of bankruptcy proceedings"; "Revocation of bankruptcy proceedings"; "Property auction initiated by the bankruptcy office"; and "Schedules of charges".'
        },
        de: {
            title: 'Konkurse',
            description:
                'Unter dieser Rubrik werden Publikationen des Konkursverfahrens im SHAB und in den kantonalen Amtsblättern veröffentlicht. Rechtlich massgebend ist immer die SHAB-Publikation. Eine "vorläufige Konkursanzeige" kündigt die eigentliche "Konkurspublikation" an. Über diese werden die Gläubiger aufgerufen, ihre Forderungen geltend zu machen. Eine vorzeitige Verfahrensbeendigung durch einen Gerichtsbeschluss wird mit der "Einstellung des Konkursverfahrens" publiziert. Sind nach Ablauf der Eingabefrist der Konkurseröffnung alle Forderungen geltend gemacht, wird ein Inventar über alle Vermögenswerte des Schuldners und eine Rangreihenfolge aller Gläubiger erstellt. Aufgrund des "Kollokationsplans und Inventars" wird eine Schlussrechnung und eine Liste für die Verteilung der Vermögenswerte verfasst. Weiter werden der "Schluss des Konkursverfahrens", der "Widerruf des Konkurses", "konkursamtliche Grundstücksteigerungen" und "Lastenverzeichnisse" veröffentlicht.'
        }
    },
    LS: {
        en: {
            title: 'Calls to creditors following liquidation',
            description:
                'To dissolve a company and permanently remove it from the Commercial Register, a call to creditors must first be published three times. Here, creditors are asked to register any outstanding claims they may have. For the call to creditors to be legally valid, the liquidation of the company must first be recorded in the Commercial Register. A request to permanently delete the company from the Commercial Register may only be submitted to the competent Commercial Registry Office one year after the call has been published for the third and final time.'
        },
        de: {
            title: 'Liquidationsschuldenrufe',
            description:
                'Um eine Gesellschaft aufzulösen und aus dem Handelsregister zu löschen, muss zuerst ein dreimaliger Schuldenruf publiziert werden. Dadurch werden die Gläubiger aufgefordert, ihre ausstehenden Forderungen anzumelden.Die Liquidation muss im Handelsregister eingetragen sein, damit der Schuldenruf rechtlich gültig ist. Ein Jahr nach der dritten Publikation kann die definitive Löschung beim zuständigen Handelsregisteramt beantragt werden.'
        }
    },
    NA: {
        en: {
            title: 'Composition proceedings',
            description:
                'Publications pertaining to composition proceedings are published in the SOGC and in certain cantonal Official Gazettes. From a legal standpoint, the information which is published in the SOGC always prevails. The debtor may request a ""Provisional composition moratorium"". The competent judge may grant the latter a ""Definitive composition moratorium"". Creditors are requested to register their claims via a ""Call to creditors"". Before the moratorium expires, the administrative receiver hands over to the judge all documents pertaining to the composition proceedings. Creditors may raise objections to the composition agreement at the ""Approval hearing"". Upon approval of the composition agreement, the process of realising the debtor\'s assets begins. However, if the agreement is rejected, creditors may demand the opening of bankruptcy proceedings. Creditors may also demand the revocation of a composition agreement. If the agreement does not fulfil the claims of a creditor, the latter can demand that the agreement is withdrawn. Publications pertaining to banks appear under the "Financial market" category.'
        },
        de: {
            title: 'Nachlassverfahren',
            description:
                'Publikationen zum Nachlassverfahren werden im SHAB und teilweise in kantonalen Amtsblättern veröffentlicht. Rechtlich massgebend ist das SHAB. Eine ""provisorische Nachlassstundung"" erfolgt auf Gesuch eines Schuldners. Der Nachlassrichter kann diesem die ""definitive Nachlassstundung"" gewähren. Gläubiger werden durch einen ""Schuldenruf"" aufgefordert, ihre Forderungen einzugeben. Vor Ablauf der Stundung unterbreitet der Sachwalter dem Nachlassrichter alle Aktenstücke. Gläubiger können Einwendungen gegen den Nachlassvertrag in die „Verhandlung“ einbringen. Wird der Nachlassvertrag gutgeheissen, beginnt die Verwertung der Aktiven des Schuldners – wird er abgelehnt, kann jeder Gläubiger die Konkurseröffnung verlangen. Gläubiger können den Widerruf eines Nachlassvertrags verlangen. Wird der Nachlassvertrag gegenüber einem Gläubiger nicht erfüllt, so kann er für seine Forderung die Aufhebung des Nachlassvertrages verlangen. Publikationen Banken betreffend sind unter "Finanzmarkt"'
        }
    },
    SB: {
        en: {
            title: 'Debt enforcement',
            description:
                'Debt enforcement publications appear in the SOGC and in certain cantonal Official Gazettes. Their purpose is to recover pecuniary claims. From a legal standpoint, the information which is published in the SOGC always prevails.'
        },
        de: {
            title: 'Schuldbetreibungen',
            description:
                'Schuldbetreibungspublikationen werden im SHAB und teilweise in kantonalen Amtsblättern publiziert und dienen der Eintreibung von Geldforderungen. Rechtlich massgebend ist immer die SHAB-Publikation.'
        }
    },
    SR: {
        en: {
            title: 'Other calls to creditors under company law',
            description:
                'Calls to creditors are published in the SOGC in order to provide creditors with the opportunity to register any claims they may have. The aim is to determine the debts owing to the given creditor. Other calls to creditors are published under the "Bankruptcies" and "Composition Proceedings" categories. Calls to creditors in the event of a planned reduction in share capital are published under "Notifications issued to company members" and in cases under civil law under the "Estates" category.'
        },
        de: {
            title: 'Weitere gesellschaftsrechtliche Schuldenrufe',
            description:
                'Schuldenrufe werden im SHAB publiziert, um Gläubigern die Möglichkeit zu geben, ihre Forderungen anzubringen. Mit der Publikation soll festgehalten werden, welche Schulden gegenüber einem Gläubiger vorhanden sind. Weitere Schuldenrufe werden in den Rubriken "Konkurse", "Nachlassverfahren", im Falle einer beabsichtigten Herabsetzung des Aktienkapitals unter "Mitteilung an Gesellschafter" und nach Zivilrecht unter "Erbschaft" publiziert.'
        }
    },
    UP: {
        en: {
            title: 'Notifications issued to company members',
            description:
                'Invitations to the General Meeting and other notifications issued to company members are now published under this new category in the SOGC. This information previously appeared under the "Company Notices" category.'
        },
        de: {
            title: 'Mitteilungen an Gesellschafter',
            description:
                'In dieser neuen Rubrik werden "Einladungen zur Generalversammlung" und weitere Mitteilungen an Gesellschafter im SHAB publiziert. Diese Meldungen wurden bisher in der Rubrik "Unternehmenspublikationen" veröffentlicht.'
        }
    },
    UV: {
        en: {
            title: 'Court rulings and summons in the SOGC',
            description:
                'This new category is published in the SOGC and in certain cantonal Official Gazettes. These notifications previously appeared under the "Other legal publications" category.'
        },
        de: {
            title: 'Gerichtliche Entscheide und Vorladungen im SHAB',
            description:
                'Diese neue Rubrik wird im SHAB und teilweise in kantonalen Amtsblättern publiziert. Diese Meldungen waren bisher in den Rubriken "andere gesetzliche Publikationen" zu finden.'
        }
    }
} as IRubrics;
