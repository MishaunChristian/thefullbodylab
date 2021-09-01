export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: Rule =>
        Rule.warning('SEO best practices recommends between 40-60 chars').min(40).max(60)
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'Provides search engines and social media a brief description of your site.',
      validation: Rule => Rule.warning().min(50).max(160)
    }
  ]
};
