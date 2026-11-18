import { loadResume } from '../lib/resume-data';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
	const resume = await loadResume();
	return { resume };
};
