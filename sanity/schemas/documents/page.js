export const page = {
  title: 'Page',
  name: 'page',
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
      title: 'Content Blocks',
      name: 'contentBlocks',
      type: 'array',
      of: [{ type: 'block' }, { type: 'faqBlock' }],
    },
  ],
};
