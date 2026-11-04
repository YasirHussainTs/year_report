// Content and numbers for the page. Edit here, then redeploy.

const M=[
 {m:'Feb',sp:15811.42,rv:110102.09,mig:78767.05,rec:31335.04,sa:0,lic:0,ac:0,ms:9228.05},
 {m:'Mar',sp:16711.53,rv:98337.01,mig:70674.16,rec:27662.85,sa:0,lic:0,ac:0,ms:8594.28},
 {m:'Apr',sp:14649.17,rv:125829.65,mig:86233.99,rec:7619.05,sa:7139,lic:15885.78,ac:8951.83,ms:5350.37},
 {m:'May',sp:13799.26,rv:94176.37,mig:50221.22,rec:5911.95,sa:9916,lic:24967.03,ac:3160.17,ms:5415.59},
 {m:'Jun',sp:15364.40,rv:224465.40,mig:176024.63,rec:5500,sa:2871,lic:38494.77,ac:1575,ms:8228.90},
 {m:'Jul',sp:17135.39,rv:154018.03,mig:108961.89,rec:13774.77,sa:0,lic:28001.90,ac:3279.47,ms:7588.76},
 {m:'Aug',sp:23139.80,rv:216310.73,mig:201768.30,rec:4467.77,sa:0,lic:7174.66,ac:2900,ms:10753.06},
 {m:'Sep',sp:24982.50,rv:243845.41,mig:177928.33,rec:37760,sa:0,lic:19483.12,ac:8673.96,ms:13432.69},
 {m:'Oct',sp:32442.22,rv:197692.62,mig:155038.52,rec:10073.15,sa:0,lic:23055.95,ac:9525,ms:18300.22}
];

const FULL=['February','March','April','May','June','July','August','September','October'];

const SRC=[['Meta Ads',24274],['WhatsApp',978],['LinkedIn',295],['Sourcing',249],['Webinar',123],['Email',51],['Chatbots',4]];

const PROB=[
 ['CRM ran out of fields','The Leads module had no single-line fields left with 6 departments.','Made the questions and fields the same across departments. This also helps Meta Ads tracking.'],
 ['Same person, many services','A doctor can ask for Licensing and Study Abroad at the same time.','Rule: block only if person, department and service all match. Meta import skips the same person from the same campaign.'],
 ['Junk leads named "Name"','Blank leads came into the CRM from the AI calling n8n flows.','Stopped the source and removed the leads.'],
 ['Wrong owners and blank departments','Contacts, deals and invoices of other departments sat under Migration owners.','Moved them to the owner of the matching department and filled blank departments by owner.'],
 ['Calls missed with no alert','No alert reached the manager when an AI-qualified lead was not called.','CRM Clean Agenda: manager email for missed, cancelled or moved HOT calls.'],
 ['Vercel build errors on the app','Missing output folder, type errors and font download failed at build.','Fixed all three. The static version is live for review.']
];

const REP=[
 ['Daily Lead Status Tracker','Excel, user-wise and department-wise, in one fixed template. Sheets for Daily, Weekly and Monthly. Built from Zoho CRM every working day.','Managers see leads received, connected, not answering, not eligible and conversion % every day.'],
 ['Weekly CRM report for Muneer','Every Saturday, Monday to Saturday. Excel saved on SharePoint, plus one short email. "Actioned" counts every record a user touched that day, not only new leads.','Highlights: leads received and actioned, converted (% and by department), calls made, duplicate enquiries, tasks assigned by 360M and how many are done.'],
 ['Saturday CRM usage report','Active users, usage % and total lead updates, compared with the other days. Some Saturdays are work from home. Whole 2026 as the baseline.','Shows if Saturday work happens in the CRM. Internal use only, no names.'],
 ['Monthly performance email to each manager','Achievements and issues for each department head, in a respectful but alert tone. Study Abroad on leads only. Recruitment, Licensing and Academy in one.','Each manager gets what went well and what needs fixing. The most common issue: CRM fields not updated.'],
 ['Manager report folders (in build)','Three folders inside Zoho CRM: Migration, Study Abroad, and Recruitment + Academy + GCC Licensing. Sub-folders from 01 Daily Operations to 05 Payments &amp; Collections. Payments from the Contact fields.','Goal: a non-technical manager understands it in under 5 minutes. Pilot on Migration first, private until approved.'],
 ['Monthly ROI report','Department-wise spend, revenue, ROI and pipeline. Revenue only from the Accounts sales sheet. From September it also lives in the 360M App.','Nine monthly reports from Feb to Oct 2026. See the next section.']
];

const SYS=[
 ['crm_leads','Zoho CRM','Set up CRM for 6 departments: own fields, pipelines, deals and training. Own views for each department.','Migration list alone has 11,555 leads. Every team works in its own view.'],
 ['leadchain','Zoho LeadChain','Connected Meta lead forms to CRM. Mapped every field. Checked failed and duplicate leads.','368 chains. 4,233 leads synced this month. Leads reach the owner with no time lag.'],
 ['books','Zoho Books integration','Connected CRM with Books: customers, vendors and products.','Sync is active both ways and updates every 2 hours.'],
 ['flow','Zoho Flow','Built flows for 360FA, Automation, Zoho Forms and Zoho Recruit.','7 flows in 4 folders. Student access follows lead conversion.'],
 ['campaigns','Zoho Campaigns','Monthly email plan, list selection, scheduling and checking results.','50 campaigns, 190,765 emails in 2026. 53 sent so far, 10 scheduled.'],
 ['forms','Zoho Forms','Made registration and lead forms for events, jobs and the Academy.','70 forms. Includes Chai with Migration Talks and the GERICON conference form.'],
 ['dailyreport','Daily CRM report','Lead Status Tracker, user-wise and department-wise, with Daily, Weekly and Monthly sheets.','Managers see leads received, connected, not answering and conversion every day.'],
 ['analytics','Zoho Analytics','Made the "360M Overview" dashboards: Revenue, Conversion Rate, Lead Source, Revenue by Department, Target vs Achieved, Top Staff, Unfollowed Leads.','8 dashboards for management.'],
 ['learn','Zoho Learn','Created the 360Future Academy UAE hub and courses. German A1 and A2.','German A2 has 50 lessons. 30 students handled since the May 2026 batch.'],
 ['learn_wa','Academy daily work','Get the tutor\'s daily PDF and tests, upload, publish, tell the students.','Students get lessons in one place, not in many chats.'],
 ['chatbot','Website chatbot (SalesIQ)','Set up "Sarah AI" bot. It asks the service and the phone number.','107 closed chats. Enquiries go to the CRM.'],
 ['powerautomate','Microsoft 365 Power Automate','Set up Power Automate for Microsoft 365 flows.','Workspace is ready for Microsoft 365 automation.'],
 ['wordpress','WordPress','Urgent edits, text and page updates on 360medicare.ae.','No waiting for outside help for small changes.'],
 ['godaddy','GoDaddy domains','Manage DNS for the company domains (.com, .org, .co.uk). Website, email and tool setups.','Third-party tools and email work without delay.'],
 ['admin','Zoho One users','Add users, access and apps for staff. Support on login problems.','Everyone has the right access only.'],
 ['databricks','Databricks','Free Databricks workspace for data work and trying ideas.','A place to test data ideas.']
];

const SOP=[
 ['01','CRM Setup for Every Department','Migration, Licensing, Study Abroad, Recruitment, Business Development, 360Future Academy. Own fields, pipeline, documents, Zoho Books link and staff training. I tried Zoho Recruit, saw the team did not use it, cancelled it and ran recruitment in CRM.'],
 ['02','CRM Automation and Lead Integration','Meta Ads → LeadChain / Make.com → Zoho CRM → owner. Also WhatsApp, Instagram, website chatbot, SMS. Watch failed leads, duplicates and delays.'],
 ['03','Zoho Campaigns and Email','Pick product, pick audience, schedule, send, check opens and clicks, send interested people back to CRM.'],
 ['04','Zoho People (HR)','Set up employee records, attendance, leave and HR processes. Train and support HR.'],
 ['05','IT Infrastructure, Network and CCTV','Wi-Fi, network rack, ISP coordination (du / e&), CCTV checks.'],
 ['06','Employee IT Support','Laptops, OS, RAM, phones and software. If it can\'t be fixed here, I coordinate with the agent and follow up until the employee is back to work.'],
 ['07','Webinar and Staff Support','Webinar link, CRM and marketing support, staff briefing and live technical help on the day.'],
 ['08','Branding and Digital Content','Photos and videos for company events and 360Vibes Instagram.'],
 ['09','WordPress and Domain','Urgent website edits, GoDaddy DNS, and Kochi office coordination when permission is needed.'],
 ['10','360M App and CRM Automation','Lead Intake, Task Desk, ROI dashboard, CRM reports and AI calling. Local Node.js app on Vercel in development. Pilot and management approval before any move from Zoho.'],
 ['11','Zoho Learn and 360Future Academy','Learning hub, course structure, student invites, tutor material, publishing. 30 students since May 2026.'],
 ['12','Data Management and CRM Reporting','Get the data from CRM and old Excel, check duplicates, mark what is verified, send clean lists and reports. Claude MCP connection used to save time, results always checked.'],
 ['13','Data Analytics and Dashboards','Zoho CRM and 360M dashboards. Same KPI meaning everywhere. Check totals before sharing. Revenue only from Accounts sales sheet.']
];

const PLAN={
 p1:[['Retire Zoho CRM','Finish the 360M App. One login, one source of truth.'],['Auto lead capture','Meta Ads, website and WhatsApp. Every lead tagged by source and department.'],['Auto assign and reminders','No lead sits untouched.'],['Auto reports','Daily and monthly. Lead Status Tracker, ROI, weekly report for Muneer.'],['Email and WhatsApp sequences','New lead, event invite, no-response nudge.'],['Role-based access','Simple, for each department and manager.']],
 p2:[['Live cost dashboard','Cost per lead, cost per conversion and ROI by campaign, channel and department.'],['Lead scoring','Rank leads by how likely they are to convert.'],['Invoicing and payments','Zoho Books style invoicing inside the app, with payment reminders.'],['Study Abroad pipeline','Lead → Student profile → Application. Auto status updates to students.'],['Event automation','Chai with Migration, GERICON: invite, RSVP, reminder, follow-up, attendance, conversion.'],['Document portal','Clients upload their own documents. Automatic checklists.'],['Recruitment ATS','CV reader and auto-matching of candidates to jobs.']],
 p3:[['More AI calling (Tidyhire)','Qualify leads, book consultations, call back no-shows.'],['AI WhatsApp assistant','Answers FAQs 24/7 in English, Arabic and Malayalam.'],['Call summary and follow-up','AI writes the summary and drafts the message for the consultant.'],['Predictive dashboard','Forecast next month\'s leads, conversions and revenue.'],['Meta Ads auto-optimise','Pause weak ads, scale winners, alert on cost spikes.'],['AI content engine','Ad copy, event emails and social posts, like alkalma Instagram.'],['Client portal and mobile app','Application status, payments and chat.'],['Anomaly alerts','If leads drop, a consultant is idle or a campaign overspends, the right manager is told.']]
};
