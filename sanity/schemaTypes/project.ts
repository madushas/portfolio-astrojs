import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'license', title: 'License', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'technologies', title: 'Technologies', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'githubRepo', title: 'GitHub Repo', type: 'url' }),
    defineField({ name: 'demoLink', title: 'Demo Link', type: 'url' }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      year: 'year',
    },
  },
});
