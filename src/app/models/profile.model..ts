export interface Profile {
  metadata: Metadata;
  personal: Personal;
  educationResearch: EducationResearch[];
  otherWorkExperience: OtherWorkExperience[],
  teaching: Teaching[],
  exhibition: Exhibition[];
  publication: Publication[];
  creativeWork: creativeWork[];
}

export interface Metadata {
  personal: string;
  education: string;
}

/***********************************************************/
/* PERSONAL */
export interface Personal {
  givenName: string;
  familyName: string;
  gender: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  address: string;
  email: string[];
  phone: string;
  affiliation: string[];
  bio: Biography;
}

export interface Biography {
  en: string;
  it: string;
}
/***********************************************************/
/* EDUCATION */
export interface EducationResearch {
  qualification: string;
  institution: string;
  department: string;
  fielOfStudy: string[];
  startDate: string;
  endDate: string;
  location: string;
  suprvisor: string[];
  description?: {
    primary?: string[];
    secondary?: string[];
  };
  url?: string[];
  documentation?: string[];
}
/* WORK EXPERIENCE */
export interface OtherWorkExperience {
  role: string,
  organization: string,
  startDate: string,
  endDate: string,
  ongoing: boolean,
  description: string[],
  location: string,
  url: string
}

export interface Teaching {
  course: string,
  institution: string,
  department: string,
  location: string,
  startDate: string,
  endDate: string,
  aA: string[],
  language: string,
  contract: string,
  documentation: string[],
  ore: number
  // url: string[]
}

export interface Exhibition {
  title: string,
  authors: string[],
  pieces: {title: string, year: number, instrument: string, authors: string[] }[]
  collaborators: string[],
  type: string,
  replicas: {event: string, venue: string, location: string, date: string, organizedBy: string}[]
  role: string[],
  startDate: string,
  endDate: string,
  ongoing: boolean,
  description: {primary: string, secondary: string, credits: string,},
  promotedBy: string,
  images: {name: string, path:string}[],
  documentation: string[],
  url: {name: string, url:string}[],
  style: number
}

export interface Publication {
  type: "Journal article"|"Conference paper"|"Book chapter"|"Book"|"Report"|"Other";
  // Authors and contributors
  author: string[];
  editor?: string[];
  // Main metadata
  title: string;
  abstract?: string;
  // Publication venue
  journal?: string;
  booktitle?: string;
  conference?: string;
  // Publication details
  publisher?: string;
  address?: string;
  volume?: string;
  number?: string;
  // Date
  year: number;
  month?: number;
  // Identifiers
  doi?: string;
  isbn?: string;
  issn?: string;
  // URLs
  url?: string;
  relatedMedia?: string[];
  // Additional metadata
  keywords?: string[];
}

export interface creativeWork {
  title: string;
  type: string;
  descritpion: string;
  year: number;
  url: {name: string; url: string}[]
  image: string;
}