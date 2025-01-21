export enum SelectedPage {
    Home = "home",
    Projects = "projects",
    About = "about",
    Experience = "experience",
    Contact = "contact"
}

export interface ProjectType {
    name: string;
    category: string;
    engine?: string;
    image: string;
    link?: string;
    withDetails?: boolean;
}

export interface ProjectDetailsType {
    name: string;
    category: string;
    position?: string;
    engine?: string;
    banner?: string;
    description: string;
    shippedLink?: string;
    gitLink?: string;
    features: Array<FeatureType>;
    skills: Array<SkillId>;
    youtubeBanner?: string;
    youtubeId?: string;
}

export interface FeatureType {
    title: string;
    image?: string;
    description?: string;
    link?: string;
    youtube?: string;
    youtubeId?: string;
}

export interface SkillType {
    id: string;
    name: string;
    image: string;
    year?: number;
    category?: string;
}

export interface SkillId {
    id: string;
}

export interface WorkExperienceType {
    title: string;
    company: string;
    duration: string;
    keyPoints: Array<string>;
    icon?: string;
    flag?: string;
    country: string;
    skills?: Array<SkillId>;
}

export interface EducationType {
    title: string;
    school: string;
    duration: string;
    major?: string;
    minor?: string;
    country: string;
    desc?: string;
    icon?: string;
    flag?: string;
}
