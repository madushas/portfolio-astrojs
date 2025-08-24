import { defineConfig } from 'sanity';
import { schema } from './sanity/schema';

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  title: 'Portfolio Studio',
  schema,
});
