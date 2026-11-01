// All of the site's words live in this one file.
// Text inside [[double brackets]] is a placeholder: it shows on the site
// with a dashed highlight until it is replaced with real details.

export const site = {
  name: 'Adam Quinlan',
  role: 'Data engineer',
  location: '[[City, Country]]',
  headline:
    'I build the pipelines, automations and AI-powered apps that turn raw business data into finished, checked output.',
  intro:
    "I'm a data engineer with a Bachelor of Commerce in international business. In my internship I automated monthly client reporting end to end and built an AI app, now in production, that cut report checking from about an hour to about five minutes.",
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
    org: '[[Company name]]',
    period: '[[Start month Year]] – Present',
    points: [
      'Automated monthly client reporting end to end: raw data is ingested, transformed and turned into a finished report on a monthly schedule.',
      'Ran the monthly client reports for the business and maintained the automation behind them.',
      'Built an AI report-checking app, taken from development into production, where three AI agents check each report independently and then compare notes to produce one outcome.',
      'Cut the product and sales teams’ checking time from about an hour to about five minutes per report.',
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
    title: 'Monthly client report automation',
    summary: 'Raw data in, finished client report out, every month without anyone assembling it by hand.',
    tags: ['Automation', 'Data pipelines', 'Reporting'],
    problem:
      'Client reports had to be produced every month from raw data. Doing it manually meant repetitive work and room for error. [[Add how long it used to take.]]',
    approach: [
      'Ingest the raw data from its sources. [[Name the sources.]]',
      'Transform it: clean, standardise and validate the data so it is report-ready.',
      'Generate the final client report automatically in its finished format.',
      'Run the whole pipeline on a monthly schedule. [[Name the tools used.]]',
    ],
    outcome:
      'Client reports are now generated automatically each month from raw data to final output. [[Add time saved or number of reports.]]',
  },
  {
    slug: 'ai-report-checker',
    title: 'AI report-checking app',
    summary: 'Three AI agents check each client report, compare notes, and return one clear verdict.',
    tags: ['AI agents', 'App', 'Production'],
    problem:
      'Before a client report went out, the product and sales teams checked it by hand. Each check took about an hour.',
    approach: [
      'Three separate AI agents each run their own individual checks on the report.',
      'The agents then discuss with each other and compare notes before reaching a conclusion.',
      'The app returns one finalised outcome: what is fine, what needs a look, and what needs fixing.',
      'Took the app from development into production for the product and sales teams. [[Name the stack used.]]',
    ],
    outcome:
      'Checking time dropped from about an hour to about five minutes per report, so the teams finish their checks far faster.',
  },
];

// Turns [[placeholder]] text into a highlighted span.
export function fill(text: string): string {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped.replace(/\[\[(.+?)\]\]/g, '<span class="todo">$1</span>');
}
