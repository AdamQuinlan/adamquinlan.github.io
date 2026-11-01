// All of the site's words live in this one file.
// Text inside [[double brackets]] is a placeholder: it shows on the site
// with a dashed highlight until it is replaced with real details.

export const site = {
  name: 'Adam Quinlan',
  role: 'Data engineer',
  location: '[[City, Country]]',
  headline:
    'I get to know a team, find what slows it down, and build the apps, automations and AI tools that make its work faster.',
  intro:
    "I'm a data engineer with a Bachelor of Commerce in international business. At Lazard Asset Management I automated monthly client factsheets and built an AI checking app, now in production, that cut checking time from about an hour to about five minutes.",
  email: '', // add a public contact email to show it on the Contact page
  github: 'https://github.com/adamquinlana',
  linkedin: '', // e.g. https://www.linkedin.com/in/your-profile
  resumePdf: '', // e.g. /resume.pdf once the file is added to the public folder
  openTo: 'Graduate and junior data engineering roles',
};

export const skills = {
  'Languages': ['Python', 'SQL', '[[add others]]'],
  'Data and AI': ['Data pipelines', 'Report automation', 'Multi-agent AI workflows', '[[add tools, e.g. Airflow, dbt]]'],
  'Platforms': ['[[e.g. Azure, AWS, Snowflake]]'],
  'Business': ['Accounting and finance', 'Marketing', 'Economics', 'People and team management', 'Cross-cultural communication'],
};

export const experience = [
  {
    title: 'Data Engineering Intern',
    org: 'Lazard Asset Management',
    period: '[[Start month Year]] – Present',
    points: [
      'Ran the monthly client reporting process and automated it with an Excel master file: one click pulls in the raw data, formulas and macros transform it, and the finished factsheet is generated for saving as final.',
      'Worked with the product and sales teams to understand their manual checking process, then designed and built an AI checking app that went from prototype through development into production.',
      'The app uses three AI agents (visual, period-on-period and raw data) that check independently, then reconcile with each other before giving one outcome.',
      'Cut the teams’ checking time from about an hour to about five minutes per factsheet.',
    ],
  },
];

export const education = [
  {
    title: 'Bachelor of Commerce, International Business',
    org: '[[University name]]',
    period: '[[Year – Year]]',
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
    summary: 'An Excel master file that turns raw data into a finished client factsheet with one click.',
    tags: ['Excel', 'Macros', 'Automation', 'Reporting'],
    problem:
      'Client factsheets had to be produced every month from data spread across Excel and Word files. Building them by hand was repetitive and easy to get wrong. [[Add how long it used to take.]]',
    approach: [
      'A master file with a Raw data sheet: clicking Update pulls in all of the source data from the Excel and Word files.',
      'A Transformation sheet of formulas and macros calculates everything the factsheet needs.',
      'A dynamic named range feeds the results into the Output sheet, which builds the charts, tables, key figures and commentary.',
      'The output is saved as the final factsheet, then passed on for checking.',
    ],
    outcome:
      'The monthly process became two steps for a person: click Update, then save as final. Everything in between is automatic. [[Add time saved or number of factsheets.]]',
  },
  {
    slug: 'ai-report-checker',
    title: 'AI factsheet checker',
    summary: 'Three AI agents check each factsheet, reconcile their findings, and return one clear outcome.',
    tags: ['AI agents', 'Product', 'Production'],
    problem:
      'Before a factsheet reached a client, the product and sales teams checked it by hand. Each check took about an hour.',
    approach: [
      'Spent time with the product and sales teams to understand how they checked documents and where the time went.',
      'Visual agent: checks spelling, formatting and layout, such as whether tables and charts are the right size.',
      'Period agent: compares this period’s output with the previous period’s and judges whether each change is expected.',
      'Raw data agent: checks the output against the raw data, so the transformation is correct and nothing is misstated.',
      'The agents then question each other before reporting, which filters out false alarms. The app returns one list: fine, look at, fix.',
      'Prototyped quickly with AI coding tools, refined it with the teams, and took it through development into production. [[Name the stack used.]]',
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
