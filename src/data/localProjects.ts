import type { ProjectType } from './projects';

export const localProjects: ProjectType[] = [
  {
    title: 'Wirity Labs Core (SaaS)',
    description:
      'Architected the core infrastructure for a scalable SaaS product. Implemented a vertical slice architecture with .NET 9, utilizing Kafka for event-driven communication and AWS for cloud-native deployment.',
    year: '2025',
    technologies: ['C#', '.NET 9', 'AWS', 'Kafka', 'PostgreSQL', 'Docker'],
    tags: ['System Architecture', 'SaaS', 'Cloud-Native'],
    image: {
      src: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Wirity+Labs',
      width: 600,
      height: 400,
    } as any,
    demoLink: 'https://wirity.com',
  },
  {
    title: 'Distributed Transaction Engine',
    description:
      'Designed a high-concurrency double-entry ledger system capable of 10k TPS. Implemented the Saga pattern with MassTransit to ensure eventual consistency across microservices without distributed locking.',
    year: '2024',
    technologies: ['C#', '.NET 8', 'Redis', 'PostgreSQL', 'MassTransit', 'OpenTelemetry'],
    tags: ['FinTech', 'Distributed Systems', 'Backend'],
    image: {
      src: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Transaction+Engine',
      width: 600,
      height: 400,
    } as any,
    githubRepo: 'https://github.com/madusha/distributed-ledger',
  },
  {
    title: 'Serverless Video Pipeline',
    description:
      'Built an event-driven video processing pipeline using AWS Lambda and S3. Features automated transcoding to HLS/DASH formats with a scale-to-zero architecture that reduced infrastructure costs by 60%.',
    year: '2024',
    technologies: ['AWS Lambda', 'S3', 'DynamoDB', 'FFmpeg', 'Terraform', 'TypeScript'],
    tags: ['Cloud Engineering', 'Serverless', 'DevOps'],
    image: {
      src: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Video+Pipeline',
      width: 600,
      height: 400,
    } as any,
  },
  {
    title: 'Enterprise RAG Knowledge Base',
    description:
      'Developed a secure internal search engine allowing employees to query proprietary documents. Integrated Azure OpenAI with pgvector for semantic search, enforcing strict role-based access control (RBAC).',
    year: '2025',
    technologies: ['Python', 'FastAPI', 'Azure OpenAI', 'pgvector', 'Docker', 'LangChain'],
    tags: ['AI Systems', 'Security', 'RAG'],
    image: {
      src: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Enterprise+RAG',
      width: 600,
      height: 400,
    } as any,
  },
];
