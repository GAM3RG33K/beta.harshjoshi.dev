export interface Tech {
	name: string;
	level?: string;
}

export interface WorkItem {
	slug: string;
	name: string;
	tagline?: string;
	status?: string;
	description?: string;
	image?: string;
	technologies: Tech[];
	platforms?: { name: string; type: string; url: string }[];
	downloads?: string;
	link?: string;
	journey?: string[];
	highlights?: string[];
}

export interface ExperienceEntry {
	company: string;
	position: string;
	location: string;
	date: string;
	summary: string;
	url?: string;
}

export interface Resume {
	basics: {
		name: string;
		label: string;
		headline: string;
		email: string;
		phone: string;
		location: string;
		career_start_year: number;
		summary: string;
		profiles?: { network: string; url: string }[];
		customFields?: { name: string; link: string }[];
	};
	skills: { name: string; type: string; level?: number; start_year?: number }[];
	apps: WorkItem[];
	projects: WorkItem[];
	experience: ExperienceEntry[];
	education: { institution: string; studyType: string; area: string; date: string }[];
	certifications: { name: string; issuer: string; date: string }[];
}
