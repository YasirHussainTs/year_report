# Data behind the website

Numbers on the site come from these files. Nothing here is deployed (only `public/` goes live).

| File | Source | As of |
|---|---|---|
| `roi-monthly-2026.csv` | Monthly Marketing Performance Report decks (Feb – Oct 2026). Sep and Oct revenue from the Accounts sales sheet (Firoze). April totals recalculated from the department figures, because the deck's ROI cells did not match. | 4 Nov 2026 |
| `lead-sources-2026.csv` | Zoho CRM, Leads, Lead Source, created 1 Jan – 4 Nov 2026 | 4 Nov 2026 |
| `chai-with-migration-2026.csv` | Zoho CRM, Leads where Campaign Name contains "Chai" | 4 Nov 2026 |
| `zoho-campaigns-2026.csv` | Zoho Campaigns report export, 1 Jan – 4 Nov 2026 | 4 Nov 2026 |
| `meta-ads-march-2026.csv` | Meta Ads campaign export, March 2026 (spend AED 16,711.53, 4,560 leads) | March 2026 |

Definitions
- Revenue per AED spent = revenue / marketing spend. It is not profit.
- January 2026 is not included (no file).
- Study Abroad AED 26,000 "expected next intake" (Feb, Mar) is not counted as revenue.
- The site shows these numbers from `public/assets/js/data.js`. If you change a number here, change it there too.
