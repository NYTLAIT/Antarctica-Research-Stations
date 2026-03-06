# Antarctica Research Stations
The goal of this project is to create a site showcasing Antarctica Research Stations in an intuitive and searacble manner. 

## About: 
Personal interests drove the creation of this project project to be one about helping antarctic information be more accessible to the general public. As such, this project is a milestone and initiation of antarctic based work and exploration of cases of possible utilization and
implimentation code to further Antarctic Sciences.

This project has also served as a techinal practice, utilization, and learning project: where I delve deeper to understand the syntax and work flow of react, especially the built in useState; work and rework data structures to be as good as possible; practice concepts such as encapsulation, dry, and being modal.

# DATA SOURCES:
Perplexity AI for the initial population of data in the json structure instructed to search from official antarctic focused institutions or adjunc institutions.
Claude was then used to rework the data several times when I changed the json structure. 

# FEATURE
Data driven inputs for selction (e.g. checkbox options populated by what is in the data)

# Tech Stack
- React (Vite) 
- CSS

# Dev Notes
This project is not for production but rather my exploration in my interests and academics.
Teachnical areas that have been explored include:
- UI layout systems
- filtering architecture with vite
- long-term data schema design

Future techinal goals:
- Using vite in full stack web (flask and sql)
- react-render-dom routing
- more dynamic ui

# ABOUT SOME STRUCTURE:
## LOGIC:
The explorer page is built around three components:
- The explorer component handles the state which is passed on to the search filter
- The search filter creates inputs based on the son file and handles changes of the state
- The stations grid renders the filtered stations after the explorer component uses state to match what the user has inputed in the search filter.

## STYLING NOTES - Experimenting with CSS defaults and var:

- FONT SIZES_260228 12:10AM (Element: Font-size | Line-height | Weight | Notes)
    - h1: 2.6–3.6rem | 1.2 | 600 | Titles
    - h2: 1.8–2.8rem | 1.26 | 540 | Sections
    - p: 0.94–1.2rem | 1.4 | 400 | Body
        - p.lede: 1.1–1.4rem | 1.48 | 300 | Important paragraph / intro / highlights
        - p.muted: 0.86–1rem  | 1.4 | 400 | Subtle info / captions / footers

- TOGGLE 'DEFAULT(LIGHT) | DARK' COLOR THEMES (VARIABLE LAYOUT):
    --bg-primary: #e8f0f6;
    /* controls | smaller */
    --bg-secondary: #fcfeff;
    /* headings | strong */
    --text-main: #1e3a8a;
    /* main body | medium */
    --text-primary: #2b3f5c;
    /* muted text | subtle */
    --text-secondary: #bbb4c2;
    /* buttons and strong links | strong */
    --accent-main: #4b789b;
    --accent-main-rgb: 75, 120, 155;
    /* hover states | medium */
    --accent-primary: #3a7dce;
    --accent-primary-rgb: 58, 125, 206;
    /* subtle borders and tags | subtle */
    --accent-secondary: #b9cbda;
    --accent-secondary-rgb: 185, 203, 218;

## JSON FILE TEMPLATE:
```json
[
    {
        "id": "",
        "slug": "",

        "name": "",
        "country": [],
        "images": [
            {
                "image": "",
                "source": "",
                "license": "",
                "caption": ""
            }
        ],
        "year_established": null,

        "status": {
            "is_active": null,
            "operational_status": "",
            "operational_type": ""
        },
        "operators": [
            {
                "full": "",
                "abbr": ""
            },
        ],

        "location": {
            "zone": "",
            "region": "",
            "location_name": "",
            "coordinates": {
                "latitude": null,
                "longitude": null
            }
        },
        "population": {
            "summer": null,
            "winter": null
        },

        "summary": "",
        "description": "",
        "historical_note": "",
        "research_focuses": [
            {
                "desc": "",
                "tag": ""
            }
        ],

        "external_references": [
            {
                "type": "",
                "site_name": "",
                "label": "",
                "url": ""
            }
        ],

        "metadata": {
            "data_last_updated": "YYYY-MM-DD",
            "data_author_name": "",
            "notes": "",
            "review_status": [
                        {
                            "reviewer_type": "",
                            "reviewer": "",
                            "date_reviewed": "YYYY-MM-DD",
                            "notes": ""
                        }
                    ]
        }
    }
]
```

stations.json file SCHEMA REFERENCE:
- .id: unique station identifier (kebab-case string) | used for key
- .slug: URL-safe identifier (kebab-case string) | used for details url
- .name: station name
- .country: country in charge of station
- .images[]:
    - .image: relative asset path
    - .source: original source URL
    - .license: license identifier (e.g. CC BY-SA 3.0, PD, PD-US-NSF)
    - .caption: alt attribute description and display caption
.year_established: int (YYYY)
- .status:
    - .status.is_active:
        - true
        - false
    - .status.operational_status:
        - "planned" | Station approved/proposed
        - "under construction" | Actively being built; not operational
        - "operational" | Built and actively functioning
        - "decommissioned" | Formally closed by governing authority; operations permanently ceased
        - "abandoned" | Informally or historically deserted
    - .status.operational_type: only apply when "operational", else null | aligned with the Council of Managers of National Antarctic Programs' (COMNAP) official definition
        - "year-round"
        - "seasonal"
        - null
- .operators[]:
    - .full: full organization name
    - .abbr: abbreviation
- .location
    - .location_name — human-readable display string
    - .zone: broadest geographic grouping 
        - "antarctic-peninsula"
        - "east-antarctica"
        - "west-antarctica"
    - .region: specific sub-area within zone
        - (antarctic-peninsula):
            - "trinity-peninsula"
            - "anvers-island" (Palmer)
            - "adelaide-island" (Rothera)
            - "argentine-islands" (Vernadsky)
            - "alexander-island"
            - "graham-land"
            - "palmer-land"
            - "joinville-island"
            - "james-ross-island"
            - "south-shetland-islands"
            - "south-orkney-islands"
        - (east-antarctica):
            - "weddell-sea"
            - "queen-maud-land"
            - "enderby-land"
            - "mac-robertson-land"
            - "princess-elizabeth-land"
            - "wilhelm-ii-land"
            - "queen-mary-land"
            - "wilkes-land"
            - "adelie-land"
            - "george-v-land"
            - "oates-land"
            - "east-antarctic-plateau"
            - "south-pole"
            - "prydz-bay"
            - "ingrid-christensen-coast"
            - "shackleton-ice-shelf"
        - (west-antarctica):
            - "ross-sea"
            - "ross-island"
            - "ross-ice-shelf"
            - "marie-byrd-land"
            - "ellsworth-land"
            - "ellsworth-mountains"
            - "amundsen-sea"
            - "pine-island-bay"
            - "thurston-island"
    - .coordinates.latitude: decimal degrees (float)
    - .coordinates.longitude: decimal degrees (float)
- .population:
    - .summer: integer (peak austral summer headcount)
    - .winter: integer (0 if seasonal/no winter crew)
- .summary: one-sentence display description (string)
- .description: full paragraph description (string)
- .historical_note: historical context paragraph (string)
- .research_focuses[]
    - .desc: human-readable description
    - .tag: (current all | last update: 2026-03-01)
        - "astronomy"
        - "atmospheric-science"
        - "biology"
        - "climate"
        - "engineering"
        - "geology"
        - "geophysics"
        - "glaciology"
        - "human-physiology"
        - "logistics"
        - "marine-science"
        - "oceanography"
        - "paleoclimate"
        - "physics"
        - "space-weather"
- .external_references[]:
    - .type: (type, authority, example)
        - "official" | primary | National Antarctic Program
        - "research_program" | primary scientific | Ice Core Initiative
        - "archival" | historical record | National Archives
        - "journalistic" | media | News feature, Scientific articles
        - "educational_institutional" | institutional educational | NatGeo Education
        - "independent" | personal, uninstitutional content | Blog, Youtube video not from established institution
        - "data_source" | scientific dataset | Climate database
    - .site_name: display name of the source
    - .label: descriptive link label
    - .url: full URL
- .metadata:
    - data_last_updated: (str (YYYY-MM-DD) | Most recent update date)
    - update_log[]:
        - .update_author: (Name of person or system updating record)
        - .update_date: (str (YYYY-MM-DD) | Date update was performed)
        - .notes: description of changes made
        - .is_reviewed[]: (null if unreviewed)
            - .reviewer_type: (Reviewer type (e.g. LLM/AI, community/unofficial, expert/official))
            - .reviewer: name/identifier of reviewer
            - .date_reviewed: str (YYYY-MM-DD) | Date the review was completed
            - .notes: verification notes and comments
