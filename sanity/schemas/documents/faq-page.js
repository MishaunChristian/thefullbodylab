export const faqPage = {
  title: 'FAQ Page',
  name: 'faqPage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Eyebrow',
      name: 'eyebrow',
      type: 'string',
    },
    {
      title: 'Header',
      name: 'header',
      type: 'string',
    },
    {
      title: 'FAQ',
      name: 'faqBlocks',
      type: 'array',
      of: [{ type: 'faqBlock' }],
    },
  ],
};
