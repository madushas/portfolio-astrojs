import type { ProjectType } from "./projects";

export const localProjects: ProjectType[] = [
	{
		title: "The BigdroidOS Scam Investigation",
		description:
			'An in-depth technical analysis of counterfeit Android TV boxes sold in Sri Lanka. Discovered "BigdroidOS" firmware utilizing deceptive OTA "Liar Patches" and an MQTT-based fleet management C2 infrastructure.',
		year: "2023",
		technologies: [
			"AIDA64",
			"Network Analysis",
			"Android OS Data Gathering",
			"Reverse Engineering Concepts",
		],
		tags: ["Security Research", "IoT", "Malware Analysis"],
		image: {
			src: "https://placehold.co/600x400/1a1a1a/ffffff?text=BigdroidOS+Analysis",
			width: 600,
			height: 400,
		} as any,
	},
	{
		title: "Enterprise RAG Knowledge Base",
		description:
			"Developed a secure internal search engine allowing employees to query proprietary documents. Integrated Azure OpenAI with pgvector for semantic search, enforcing strict role-based access control (RBAC).",
		year: "2025",
		technologies: ["Python", "FastAPI", "Azure OpenAI", "pgvector", "Docker", "LangChain"],
		tags: ["AI Systems", "Security", "RAG"],
		image: {
			src: "https://placehold.co/600x400/1a1a1a/ffffff?text=Enterprise+RAG",
			width: 600,
			height: 400,
		} as any,
	},
	{
		title: "Wirity Labs Core (SaaS)",
		description:
			"Architected the core infrastructure for a scalable SaaS product. Implemented a vertical slice architecture with .NET 9, utilizing Kafka for event-driven communication and AWS for cloud-native deployment.",
		year: "2025",
		technologies: ["C#", ".NET 9", "AWS", "Kafka", "PostgreSQL", "Docker"],
		tags: ["System Architecture", "SaaS", "Cloud-Native"],
		image: {
			src: "https://placehold.co/600x400/1a1a1a/ffffff?text=Wirity+Labs",
			width: 600,
			height: 400,
		} as any,
		demoLink: "https://wirity.com",
	},
];
