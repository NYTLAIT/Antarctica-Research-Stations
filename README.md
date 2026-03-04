WORK IN PROGRESS, FILTER WORKS BUT EVERYTHING IS A MESS



# ABOUT PROJECT: Antarctica Research Stations
The goal of this project is to 

## DEV NOTE: 
Personal interests drove the project to be one of a long term goal of helping antarctic information be more accessible to the general public. As such, this project is a milestone and initiation of antarctic based work and exploration of cases of possible utilization and
implimentation code to further Antarctic Sciences.

# DATA SOURCES:
- 

# ABOUT STRUCTURE:
## STYLING NOTES:
- FONT SIZES_260228 12:10AM (Element: Font-size | Line-height | Weight | Notes)
    - h1: 2.6–3.6rem | 1.2 | 600 | Titles
    - h2: 1.8–2.8rem | 1.26 | 540 | Sections
    - p: 0.94–1.2rem | 1.4 | 400 | Body
        - p.lede: 1.1–1.4rem | 1.48 | 300 | Important paragraph / intro / highlights
        - p.muted: 0.86–1rem  | 1.4 | 400 | Subtle info / captions / footers

- TOGGLE 'DEFAULT(LIGHT) | DARK' COLOR THEMES (VARIABLE LAYOUT):

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

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
