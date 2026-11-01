// All of the site's words live in this one file.
// Text inside [[double brackets]] is a placeholder: it shows on the site
// with a dashed highlight until it is replaced with real details.

export const site = {
  name: 'Adam Quinlan',
  role: 'Data engineer',
  location: 'Sydney, Australia',
  headline:
    'I learn how a team works, find what slows it down, and quickly build the automations and AI tools that make it faster.',
  intro:
    "I'm finishing a Bachelor of Commerce in international business at Macquarie University and interning at Lazard Asset Management in Sydney, where I work across business analysis, data and business systems. I helped build around 200 Excel master files that cut monthly client reporting from two weeks to six days, and built an AI checking app, now in production, that cut factsheet checks from about an hour to about five minutes.",
  email: '', // add a public contact email to show it on the Contact page
  github: 'https://github.com/AdamQuinlan',
  linkedin: 'https://www.linkedin.com/in/adam-quinlan-89a5012b7/',
  resumePdf: '', // e.g. /resume.pdf once the file is added to the public folder
  openTo: 'Graduate data engineering and data analyst roles',
};

export const skills = {
  'Data and automation': ['Excel master files', 'Formulas and macros', 'Dynamic named ranges', 'Built-in data checks', 'Report automation'],
  'Currently learning': ['SQL', 'Python'],
  'AI': ['Claude Code', 'Claude API (Sonnet)', 'Multi-agent workflows', 'Prompt design'],
  'Platforms': ['Azure', 'Microsoft Excel', 'Microsoft Word', 'Coda'],
  'Business': ['Business analysis', 'Stakeholder interviews', 'Accounting and finance', 'Marketing', 'Economics', 'People and team management', 'Cross-cultural communication'],
};

export const experience = [
  {
    title: 'Intern: business analysis, data and business systems',
    org: 'Lazard Asset Management',
    period: 'March 2026 – January 2027',
    points: [
      'A combined business analyst, data analyst, business systems and data engineering role: talking to teams about what they need, building automation, running reports and handling ad hoc work.',
      'Helped build a system of around 200 Excel master files that cut compiling the full line of monthly client reports from about two weeks to about six days, run by one person instead of two.',
      'Built checks into each master file’s transformation, such as flagging unassigned securities and confirming weights total 100%.',
      'Worked with the product and sales teams to understand their manual checking, then designed and built an AI checking app with Claude Code that went from prototype into production.',
      'The app runs three Claude Sonnet agents (visual, period-on-period and raw data) that check independently, then reconcile before giving one outcome. Checking time fell from about an hour to about five minutes per factsheet.',
    ],
  },
];

export const education = [
  {
    title: 'Bachelor of Commerce, International Business',
    org: 'Macquarie University',
    period: 'Graduating November 2026',
    points: [
      'Foundations across accounting, finance, marketing and economics.',
      'Culture and international business: how organisations operate across markets.',
      'People and team management, and extensive team-based project work.',
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  problem: string;
  approach: string[];
  outcome: string;
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: 'client-report-automation',
    title: 'Monthly factsheet automation',
    summary: 'Around 200 Excel master files that turn raw data into finished client factsheets, cutting monthly reporting from two weeks to six days.',
    tags: ['Excel', 'Macros', 'Automation', 'Team project'],
    problem:
      'Every month, the full line of client reports had to be compiled from data spread across Excel and Word files. It took about two weeks of full-time work and needed two people.',
    approach: [
      'A master file with a Raw data sheet: clicking Update pulls in all of the source data from the Excel and Word files.',
      'A Transformation sheet of formulas and macros calculates everything the factsheet needs.',
      'Checks are built into the transformation, such as flagging any unassigned securities and confirming weights total 100%.',
      'A dynamic named range feeds the results into the Output sheet, which builds the charts, tables, key figures and commentary.',
      'The output is saved as the final factsheet, then passed on for checking.',
    ],
    outcome:
      'Our team built around 200 master files. Compiling the full line of reports now takes about six days (four full days and two part days waiting on data) instead of two weeks, it is run by one person instead of two, and it is far more reliable.',
  },
  {
    slug: 'ai-report-checker',
    title: 'AI factsheet checker',
    summary: 'Three AI agents check each factsheet, reconcile their findings, and return one clear outcome.',
    tags: ['Claude Code', 'Claude API', 'AI agents', 'Production'],
    problem:
      'Before a factsheet reached a client, the product and sales teams checked it by hand. Each check took about an hour.',
    approach: [
      'Spent time with the product and sales teams to understand how they checked documents and where the time went.',
      'Visual agent: checks spelling, formatting and layout, such as whether tables and charts are the right size.',
      'Period agent: compares this period’s output with the previous period’s and judges whether each change is expected.',
      'Raw data agent: checks the output against the raw data, so the transformation is correct and nothing is misstated.',
      'The agents then question each other before reporting, which filters out false alarms. The app returns one list: fine, look at, fix.',
      'Built with Claude Code. The agents run on Claude Sonnet through the Claude API, connected via Azure, and I used Claude to sharpen each agent’s prompts.',
      'Prototyped quickly, refined it with the teams, and took it through development into production.',
    ],
    outcome:
      'Checking time dropped from about an hour to about five minutes per factsheet.',
  },
];

// Turns [[placeholder]] text into a highlighted span.
export function fill(text: string): string {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped.replace(/\[\[(.+?)\]\]/g, '<span class="todo">$1</span>');
}

// ---------- "What I bring" (the pitch to an employer) ----------

export const proof = [
  { value: '2 wks → 6 days', label: 'monthly client reporting, after automating it' },
  { value: '60 → 5 min', label: 'to check a factsheet, using AI agents I built' },
  { value: '2 → 1', label: 'people needed to run the reporting process' },
  { value: '200', label: 'master files in the system our team built' },
];

export const offers = [
  {
    title: 'Find where your team loses time',
    body: 'I learn how your people actually work, then pinpoint the manual, repetitive steps that slow them down and what they cost.',
    proof: 'Mapped how product and sales checked factsheets before building anything.',
  },
  {
    title: 'Automate the repetitive work',
    body: 'Reporting, data preparation and recurring processes, rebuilt so they run reliably with a click instead of days of effort.',
    proof: 'Monthly client reporting went from two weeks to six days, run by one person instead of two.',
  },
  {
    title: 'Put AI to practical use',
    body: 'Not AI for its own sake. I find the tasks where it genuinely saves time and build tools people trust and use every day.',
    proof: 'A three-agent Claude checker, now in production, cut checks from an hour to five minutes.',
  },
  {
    title: 'Build reliability in',
    body: 'Faster is only useful if it’s right. I build checks into processes so errors are caught before anyone else sees them.',
    proof: 'Master files check that nothing is unassigned and weights total 100%. The AI agents cross-check each other.',
  },
  {
    title: 'Bridge business and tech',
    body: 'With a commerce background, I can talk to sales, product and finance in their language and turn what they need into something buildable.',
    proof: 'Worked directly with product and sales teams to design the checker around their workflow.',
  },
  {
    title: 'Learn fast and deliver',
    body: 'I pick up new tools quickly and get working versions in front of people early, so the team sees value early.',
    proof: 'As an intern, took an AI app from idea to production. Now building my SQL and Python skills.',
  },
];

export const startPlan = [
  { when: 'First', title: 'Listen and map', body: 'Sit with your team, learn the processes, and find where time and accuracy are being lost.' },
  { when: 'Next', title: 'Deliver a quick win', body: 'Pick one high-value bottleneck and ship a working fix, so the team sees results early.' },
  { when: 'Then', title: 'Scale what works', body: 'Extend it to similar processes, document it, and make sure the team can run it without me.' },
];
