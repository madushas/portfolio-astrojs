import type { SanityImageSource } from "@sanity/image-url";

export type ProjectType = {
	title: string;
	description: string;
	license?: string; // Optional; display N/A if missing
	image: { asset: SanityImageSource };
	year: string;
	technologies: string[];
	tags: string[];
	githubRepo?: string;
	demoLink?: string;
};
