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

<<<<<<< HEAD
```json
=======
>>>>>>> origin
[
    {
        "id": "",
        "slug": "",

        "name": "",
        "country": "",
        "year_established": null,

        "status": "Active",
        "operator": "",

        "location": {
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
        "research_focus": [],

        "external_references": [
            {
                "type": "official",
                "site_name": "",
                "label": "",
                "url": ""
            }
        ],

        "metadata": {
            "data_last_updated": "",
            "data_author_name": "",
            "review_status": "Unreviewed"
        }
    }
]
```

Notes: 
- .status: "Active" | "Seasonal" | "Decommissioned" | "Under Construction" | "Abandoned"
<<<<<<< HEAD
- .external_references[0].type: (type, authority, example)
    - "official" | primary | National Antarctic Program
    - "research_program" | primary scientific | Ice Core Initiative
    - "archival" | historical record | National Archives
    - "journalistic" | media | News feature, Scientific articles
    - "educational_institutional" | institutional educational | NatGeo Education
    - "independent" | personal, uninstitutional content | Blog, Youtube video not from established institution
    - "data_source" | scientific dataset | Climate database

=======
- .external_references[0].type: "official" (operator) | "research_program" (specific scientific project) | "archival" (historical or documented records) | "article" | "blog" | "documentary" | "video" |"other" (ex. museum exhibit pages, maps, magazines)
>>>>>>> origin

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
