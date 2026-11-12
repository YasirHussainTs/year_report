# Data behind the website

Numbers on the site come from these files. Nothing here is deployed (only `public/` goes live).

| File | Source | As of |
|---|---|---|
| `roi-monthly-2026.csv` | Monthly Marketing Performance Report decks (Feb – Oct 2026). Sep and Oct revenue from the Accounts sales sheet (Firoze). April totals recalculated from the department figures, because the deck's ROI cells did not match. | 4 Nov 2026 |
| `lead-sources-2026.csv` | Zoho CRM, Leads, Lead Source, created 1 Jan – 4 Nov 2026 | 4 Nov 2026 |
| `chai-with-migration-2026.csv` | Zoho CRM, Leads where Campaign Name contains "Chai" | 4 Nov 2026 |
| `zoho-campaigns-2026.csv` | Zoho Campaigns report export, 1 Jan – 4 Nov 2026 | 4 Nov 2026 |
| `meta-ads-march-2026.csv` | Meta Ads campaign export, March 2026 (spend AED 16,711.53, 4,560 leads) | March 2026 |
| `crm-usage-2026.csv` | Zoho CRM: Notes (created by) and Leads (last modified by), Jan - Oct 2026, counted per month | 12 Nov 2026 |
| `leads-to-clients-monthly-2026.csv` | Zoho CRM Leads created each month (open and converted) and clients; marketing spend from the monthly ROI decks | 12 Nov 2026 |
| `leads-to-clients-by-department-apr-oct-2026.csv` | Same, by department (Service field). Department spend from the consolidated-summary slide of each ROI deck | 12 Nov 2026 |
| `ai-calling-tidyhire-2026.csv` | Zoho CRM Leads with a Tidyhire call (Tidyhire fields, Call Status, Converted) | 12 Nov 2026 |

Definitions
- Revenue per AED spent = revenue / marketing spend. It is not profit.
- January 2026 is not included (no file).
- Study Abroad AED 26,000 "expected next intake" (Feb, Mar) is not counted as revenue.
- CRM usage % = active people / people with a CRM login that month.
- Active = created at least one note, or is the last person to change a lead, in that month. Viewing only is not counted. A lead shows only its latest change, so older months can read a little low.
- People with a login = logins that existed for the whole month, plus anyone who joined or left that month and still logged work. The shared IT Department login is not counted. Deleted logins are counted only in months when they logged work.
- One Accounts login shows no activity in any month. Without it, usage for May - Oct would be 85% - 100% instead of 79% - 92%.
- Leads = leads created in the CRM in that month, open and converted (converted leads are not in a normal COQL count, so they were added back). Cost per lead = marketing spend / leads.
- Client = a lead converted to a contact in the CRM, or with Call Status = Converted. Counted by the month the lead was created, so recent months are still filling up. Cost per client = marketing spend / clients.
- Department table covers Apr - Oct, because department spend is only in the monthly ROI decks. GCC Licensing is counted under Licensing. Leads with no department, Business Development, or a course name in the department field are shown as one 'no department' line.
- March: Meta counted 4,560 leads (AED 3.66 each). The CRM received 3,103 (AED 5.39 each). The CRM count is used for every month.
- AI calling: leads with a Tidyhire call id. Each lead is counted once, in the month of its latest call. Tidyhire cost is not in Zoho CRM or Zoho Books, so it is not shown. When the invoice is known, set `cost` in `AI` in `data.js`.
- The site shows these numbers from `public/assets/js/data.js`. If you change a number here, change it there too.
