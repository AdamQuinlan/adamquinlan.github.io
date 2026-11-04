// All of the site's words live in this one file.
// Text inside [[double brackets]] is a placeholder: it shows on the site
// with a dashed highlight until it is replaced with real details.

export const site = {
  name: 'Adam Quinlan',
  role: 'Business analyst',
  location: 'Sydney, Australia',
  headline:
    'I learn how a team works, find what slows it down, and quickly build the automations and AI tools that make it faster.',
  intro:
    "I'm finishing a Bachelor of Commerce in international business at Macquarie University and interning at Lazard Asset Management in Sydney, where I work across business analysis, data analysis and business systems. I helped finish and now build the Excel master files (around 200 of them) that cut monthly client reporting from two weeks to six days, and built an AI checking app, now in production, that cut checks from about an hour to about five minutes.",
  email: 'adamquinlana@gmail.com',
  github: 'https://github.com/AdamQuinlan',
  linkedin: 'https://www.linkedin.com/in/adam-quinlan-89a5012b7/',
  resumePdf: '', // e.g. /resume.pdf once the file is added to the public folder
  openTo: 'Graduate business analyst and data analyst roles',
};

export const skills = {
  'Data and automation': ['Excel automation', 'Excel formulas and VBA macros', 'Dynamic named ranges', 'Built-in data checks', 'Report automation'],
  'Currently learning': ['SQL', 'Python'],
  'AI': ['Claude Code', 'Multi-agent workflows', 'Prompt design', 'AI app design'],
  'Platforms': ['Azure', 'Microsoft Office', 'Coder'],
  'Business': ['Business analysis', 'Accounting and finance', 'Marketing', 'Economics', 'People and team management', 'Cross-cultural communication'],
};

export const experience = [
  {
    title: 'Intern: business analysis, data and business systems',
    org: 'Lazard Asset Management',
    period: 'March 2026 – January 2027',
    points: [
      'A mix of business analyst, data analyst and business systems work, with some hands-on automation and app building: talking to teams about what they need, running reports and handling ad hoc requests.',
      'Joined just as the team began moving monthly client reporting from manual to automated, and helped finish the system of around 200 Excel master files. Compiling the full line of reports fell from about two weeks to about six days, run by one person instead of two.',
      'Since about September 2026 I have built the automation: when a new report is needed, it comes to me to create its master file end to end. The monthly run is handled by a colleague.',
      'Built checks into each master file’s transformation, such as flagging unassigned securities and confirming weights total 100%.',
      'Worked with the product and sales teams to understand their manual checking, then built an AI checking app with Claude Code, in Python, that went from prototype into production. Checking time fell from about an hour to about five minutes.',
      'Helped wireframe ideas that the rest of my team then built. For example, a tool to replace most of our Salesforce work, leaving Salesforce as a contact list while the app creates campaigns and handles the rest. I worked through it with the sales team and wireframed it.',
    ],
  },
];

export const education = [
  {
    title: 'Bachelor of Commerce, International Business',
    org: 'Macquarie University',
    period: 'Graduating November 2026',
    points: [
      'Major in international business: culture, and how organisations operate across markets.',
      'A foundation-level understanding of accounting, finance, marketing and economics.',
      'People and team management, and extensive team-based project work.',
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  role: string;
  team: string;
  stack: string[];
  when: string;
  metrics: { value: string; label: string }[];
  flow: (string | { step: string; sub: string[] })[];
  problem: string;
  approach: string[];
  outcome: string;
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: 'client-report-automation',
    title: 'Monthly client report automation',
    summary: 'Around 200 Excel master files that turn raw data into client reports, from factsheets to decks, cutting monthly reporting from two weeks to six days.',
    tags: ['Excel', 'Macros', 'Automation', 'Team project'],
    role: 'Helped finish the move to automation, then took over building new master files from about September 2026.',
    team: 'My team at Lazard Asset Management',
    stack: ['Microsoft Excel', 'Formulas', 'VBA macros', 'Dynamic named ranges'],
    when: 'March 2026 onwards',
    metrics: [
      { value: '2 wks → 6 days', label: 'to compile the full line of monthly client reports' },
      { value: '2 → 1', label: 'people needed to run it' },
      { value: '~200', label: 'master files in the system' },
    ],
    flow: ['Source data files', 'Raw data sheet (click Update)', 'Transformation sheet, with checks', 'Dynamic named range', 'Output reports', 'Saved as drafts', 'Product or sales team finalises'],
    problem:
      'Every month, the full line of client reports had to be compiled by hand: factsheets, presentation decks, holdings documents, performance and attribution reports. It took about two weeks of full-time work and needed two people. Because every report was put together a little differently each time, errors were common, and reports were often sent back to our team to be produced again.',
    approach: [
      'When I joined in March 2026, the move from manual to automated reporting had just started. I helped finish it over the following months, and by about September I was building the automation myself.',
      'Each report has a master file with a Raw data sheet: clicking Update pulls in all of the source data.',
      'A Transformation sheet of formulas and VBA macros calculates everything the report needs.',
      'Checks are built into the transformation, such as flagging any unassigned securities and confirming weights total 100%.',
      'A dynamic named range feeds the results into the Output sheet. When data is added or removed, the output still captures all of it, so nothing is missed.',
      'The outputs are saved as draft documents and handed to the product or sales team to finalise, now using the AI checking app.',
      'I handed the monthly run to a colleague. When a new report is needed, it comes to me and I build its master file end to end.',
    ],
    outcome:
      'Our team built around 200 master files. Compiling the full line of reports now takes about six days (four full days and two part days waiting on data) instead of two weeks, it is run by one person instead of two, and far fewer reports come back with errors.',
  },
  {
    slug: 'ai-report-checker',
    title: 'AI factsheet checker',
    summary: 'Three AI agents check each factsheet, reconcile their findings, and return one clear outcome.',
    tags: ['Claude Code', 'AI agents', 'Python', 'VS Code'],
    role: 'Worked out what the teams needed, built the app with the product team’s input, and took it into production.',
    team: 'Built with and for the product and sales teams at Lazard Asset Management',
    stack: ['Claude Code', 'Python', 'VS Code', 'Multi-agent workflow', 'Prompt design'],
    when: '2026, during my internship',
    metrics: [
      { value: '60 → 5 min', label: 'to check a factsheet' },
      { value: '3', label: 'specialist AI agents that cross-check each other' },
      { value: 'Live', label: 'in production for product and sales' },
    ],
    flow: ['Draft factsheet', { step: 'Agents run', sub: ['Visual agent', 'Period agent', 'Raw data agent'] }, 'Agents reconcile', 'Fine / look at / fix'],
    problem:
      'Before a report reached a client, the product and sales teams checked it by hand, and each check took about an hour. To compare the output against the raw data, they had to pull up five or six sources saved in different folders, specific to each task and spread across systems such as Argos and FactSet. The raw data also changed as last month’s month-end was finalised, so the same source could show different numbers depending on the day. People sometimes compared against the wrong version, which caused errors and confusion.',
    approach: [
      'Spent time with the product and sales teams to understand how they checked documents and where the time went.',
      'Visual agent: checks spelling, formatting and layout, such as whether tables and charts are the right size.',
      'Period agent: compares this period’s output with the previous period’s and judges whether each change is expected.',
      'Raw data agent: checks the output against the raw data, so the transformation is correct and nothing is misstated.',
      'The agents then question each other before reporting, which filters out false alarms. The app returns one list: fine, look at, fix.',
      'The app does the comparison for the team, so nobody has to dig through five or six raw data sources by hand.',
      'Built in Python in VS Code with Claude Code, and I used Claude to sharpen each agent’s prompts.',
      'Built in collaboration with the product team: I took each version to them, gathered their input, and implemented it.',
      'Prototyped quickly, refined it with the teams, and took it through development into production.',
    ],
    outcome:
      'Checking time dropped from about an hour to about five minutes per report, and people no longer need to track down which version of the raw data is current.',
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
    proof: 'A three-agent checker built with Claude Code, now in production, cut checks from an hour to five minutes.',
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

// ---------- Overview hub and richer page content ----------

export const facts = [
  { label: 'Based in', value: 'Sydney, Australia' },
  { label: 'Now', value: 'Intern at Lazard Asset Management, March 2026 – January 2027' },
  { label: 'Studying', value: 'Bachelor of Commerce (International Business), Macquarie University' },
  { label: 'Graduating', value: 'November 2026' },
  { label: 'Learning', value: 'SQL and Python' },
  { label: 'Looking for', value: 'Graduate business analyst and data analyst roles' },
];

export const strengths = [
  { title: 'Automating reporting', body: 'Excel automation, VBA macros and built-in data checks that turn days of manual work into a click.' },
  { title: 'Practical AI tools', body: 'Multi-agent workflows built with Claude Code, designed around how a team actually works.' },
  { title: 'Understanding the business', body: 'A commerce degree and day-to-day work with sales and product teams.' },
  { title: 'Learning fast', body: 'Took an AI app into production during my internship. Building my SQL and Python now.' },
];

export const hubLinks = [
  { href: '/about', title: 'About', body: 'My background, how I work, and my toolkit.', icon: 'person' },
  { href: '/projects', title: 'Projects', body: 'Client report automation and the AI factsheet checker, in detail.', icon: 'grid' },
  { href: '/resume', title: 'Experience', body: 'My internship at Lazard and my degree at Macquarie.', icon: 'path' },
  { href: '/what-i-bring', title: 'What I bring', body: 'What I can do for your team, with proof.', icon: 'spark' },
  { href: '/contact', title: 'Contact', body: 'Email, LinkedIn, and where I’m based.', icon: 'mail' },
];

export const principles = [
  { title: 'Understand before I build', body: 'I sit with the people doing the work first. The checker started with watching how product and sales checked documents.' },
  { title: 'Get something real in front of people', body: 'A working prototype beats a slide. With Claude Code I can show a team a first version quickly and shape it with them.' },
  { title: 'Build the checks in', body: 'Speed only helps if the output is right. My master files check themselves, and the AI agents cross-check each other.' },
  { title: 'Leave it runnable', body: 'A process should keep working when I’m not in the room. Our reporting now runs with one person and two clicks.' },
];

export const toolkit = [
  { tool: 'Microsoft Excel and VBA', use: 'Master files with formulas, macros, dynamic named ranges and built-in checks.' },
  { tool: 'Claude Code', use: 'Built the AI factsheet checker, in Python and VS Code, from prototype to production.' },
  { tool: 'Prompt design', use: 'Wrote and refined each agent’s instructions, using Claude to sharpen them.' },
  { tool: 'Microsoft Office', use: 'Excel master files that produce Office outputs, Outlook and day-to-day reporting.' },
  { tool: 'Coder', use: 'Used to host our team’s websites.' },
  { tool: 'SQL and Python', use: 'I have used both to build things, including the checker in Python, but I don’t have an in-depth understanding of either yet. That is what I am working on now.' },
];

export const hats = [
  { title: 'Business analyst', body: 'Talking to teams about what they need, wireframing ideas, and turning them into something buildable.' },
  { title: 'Data analyst', body: 'Running the monthly client reports and handling ad hoc requests.' },
  { title: 'Business systems', body: 'Building and looking after the master file system and the tools teams rely on, including the AI checker.' },
];

export const studied = {
  major: ['International business', 'Culture', 'People and team management'],
  foundations: ['Accounting', 'Finance', 'Marketing', 'Economics'],
};
