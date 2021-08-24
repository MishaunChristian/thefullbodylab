export const homePage = {
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Eyebrow',
      name: 'eyebrow',
      type: 'string'
    },
    {
      title: 'Header',
      name: 'header',
      type: 'string'
    },
    {
      title: 'Intro Header',
      name: 'introHeader',
      type: 'string'
    },
    {
      title: 'Intro Copy',
      name: 'introCopy',
      type: 'markdown'
    },
    {
      title: 'Teaser Section',
      description: 'Three-column section overviewing the other pages',
      name: 'teaser',
      type: 'array',
      of: [{ type: 'teaser' }]
    },
    {
      title: 'Testimonial Quotation',
      name: 'testimonialQuotation',
      type: 'string'
    },
    {
      title: 'Testimonial Name',
      name: 'testimonialName',
      type: 'string'
    }
  ]
};
