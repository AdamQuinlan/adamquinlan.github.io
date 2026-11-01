// All of the site's words live in this one file.
// Text inside [[double brackets]] is a placeholder: it shows on the site
// with a dashed highlight until it is replaced with real details.

export const site = {
  name: 'Adam Quinlan',
  role: 'Data engineer',
  location: '[[City, Country]]',
  headline:
    'I build the pipelines, automations and internal apps that turn scattered business data into something people can act on.',
  intro:
    "I'm a data engineer with a Bachelor of Commerce in international business. I work across both sides of the table: building the systems that move and clean data, and understanding the business questions that data is meant to answer.",
  email: '', // add a public contact email to show it on the Contact page
  github: 'https://github.com/adamquinlana',
  linkedin: '', // e.g. https://www.linkedin.com/in/your-profile
  resumePdf: '', // e.g. /resume.pdf once the file is added to the public folder
  openTo: 'Graduate and junior data engineering roles',
};

export const strengths = [
  {
    title: 'Data pipelines',
    body: 'Extracting data from source systems, cleaning and transforming it, and loading it somewhere reliable for reporting.',
  },
  {
    title: 'Automation',
    body: 'Replacing manual, repetitive processes with scheduled jobs and scripts so teams spend time on decisions, not copy-paste.',
  },
  {
    title: 'Internal apps',
    body: 'Small, focused tools that put the right data in front of the people who need it.',
  },
  {
    title: 'Business context',
    body: 'A commerce degree in international business means I start from how the organisation actually runs, not just the schema.',
  },
];

export const skills = {
  'Languages': ['Python', 'SQL', '[[add others]]'],
  'Data tools': ['[[e.g. Airflow, dbt, Power BI]]'],
  'Platforms': ['[[e.g. Azure, AWS, Snowflake]]'],
  'Business': ['Process analysis', 'Stakeholder communication', 'Team collaboration', 'International business'],
};

export const experience = [
  {
    title: 'Data Engineering Intern',
    org: '[[Company name]]',
    period: '[[Start month Year]] – Present',
    points: [
      'Build data applications and automation processes for internal teams.',
      'Work across data engineering and analysis: sourcing, transforming and reporting on business data.',
      '[[Add a result with a number, e.g. "Cut a weekly reporting task from 4 hours to 10 minutes."]]',
    ],
  },
];

export const education = [
  {
    title: 'Bachelor of Commerce, International Business',
    org: '[[University name]]',
    period: '[[Year – Year]]',
    points: [
      'Studied how businesses operate across markets: strategy, operations, management and finance.',
      'Extensive team-based project work and people management coursework.',
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
    slug: 'reporting-automation',
    title: 'Automated reporting pipeline',
    summary: 'Replaced a manual reporting process with a scheduled pipeline that pulls, cleans and publishes the data on its own.',
    tags: ['Automation', 'Python', 'SQL'],
    problem:
      '[[Describe the manual process: who did it, how often, and why it was slow or error-prone.]]',
    approach: [
      '[[Where the data came from (systems, files, APIs).]]',
      '[[How it was cleaned and transformed.]]',
      '[[Where it lands and how it is scheduled.]]',
    ],
    outcome: '[[What changed: hours saved, errors removed, who now uses it.]]',
  },
  {
    slug: 'internal-data-app',
    title: 'Internal data app',
    summary: 'An internal tool that gives a team self-serve access to the data they used to request by email.',
    tags: ['App', 'Data modelling'],
    problem: '[[What the team was struggling with before the app existed.]]',
    approach: [
      '[[The stack you used to build it.]]',
      '[[The key screens or features.]]',
      '[[How you worked with the users to shape it.]]',
    ],
    outcome: '[[Adoption, time saved, or decisions it enabled.]]',
  },
  {
    slug: 'business-analysis',
    title: 'From business question to data model',
    summary: 'A university or work project where business understanding shaped the data design.',
    tags: ['Analysis', 'Business systems'],
    problem: '[[The business question or case you were working on.]]',
    approach: [
      '[[How you broke the problem down.]]',
      '[[The data or model you built to answer it.]]',
    ],
    outcome: '[[What you recommended and what happened next.]]',
  },
];

// Turns [[placeholder]] text into a highlighted span.
export function fill(text: string): string {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped.replace(/\[\[(.+?)\]\]/g, '<span class="todo">$1</span>');
}
