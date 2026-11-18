import { loadResume } from '../../../lib/resume-data';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = async () => {
	const resume = await loadResume();
	return resume.projects.filter((p: { slug?: string }) => p.slug).map((p: { slug: string }) => ({ slug: p.slug }));
};

export const load: PageServerLoad = async ({ params }) => {
	const resume = await loadResume();
	const project = resume.projects.find((p: { slug: string }) => p.slug === params.slug);
	if (!project) error(404, 'Unknown project');
	return { project };
};
