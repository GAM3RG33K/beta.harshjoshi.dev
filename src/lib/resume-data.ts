import { readFileSync } from 'node:fs';

export const loadResume = async () => {
	// Default: bundled static/resume.json (extended schema with slugs/journey — pushed by the owner to the remote soon).
	// Set RESUME_URL to the extended remote JSON to load live data at build time.
	const remote = process.env.RESUME_URL;

	if (remote) {
		const res = await fetch(remote);
		if (!res.ok) throw new Error(`remote resume fetch failed: ${res.status}`);
		const data = await res.json();
		return data;
	}

	const REMOTE_DEFAULT =
		'https://raw.githubusercontent.com/GAM3RG33K/resume-json/refs/heads/main/resume.json';
	const fallback = process.env.RESUME_URL || REMOTE_DEFAULT;

	try {
		const res = await fetch(fallback);
		if (!res.ok) throw new Error(`remote resume fetch failed: ${res.status}`);
		return await res.json();
	} catch {
		// Offline / bundled fallback: local dev only (CI has no static/resume.json — gitignored).
		const local = readFileSync('static/resume.json', 'utf-8');
		return JSON.parse(local);
	}
};
