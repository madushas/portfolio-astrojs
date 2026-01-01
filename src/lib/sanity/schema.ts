// Types adapted to avoid 'sanity' package dependency in frontend
// import { Image, type SchemaTypeDefinition } from "sanity";

export type SanityPost = {
	author: { name: string };
	slug: { current: string; _type: string };
	categories: { title: string }[];
	mainImage: { _type: string; asset: { _ref: string; _type: string } };
	_id: string;
	title: string;
	description: string;
	publishedAt: string;
};

export type Post = {
	title: string;
	description: string;
	publishedAt: string;
	imageURL: string;
	author: string;
	slug: { current: string; _type: string };
	categories: { title: string }[];
	_id: string;
	mainImage: any; // Was Image from sanity
	body?: any;
};
