import { loadResume } from '../../../lib/resume-data';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = async () => {
	const resume = await loadResume();
	return resume.apps.filter((a: { slug?: string }) => a.slug).map((a: { slug: string }) => ({ slug: a.slug }));
};

export const load: PageServerLoad = async ({ params }) => {
	const resume = await loadResume();
	const app = resume.apps.find((a: { slug: string }) => a.slug === params.slug);
	if (!app) error(404, 'Unknown app');
	return { app };
};
