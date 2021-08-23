export const servicesPage = {
  title: 'Services Page',
  name: 'servicesPage',
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
      title: 'Goals Header',
      name: 'goalsHeader',
      type: 'string'
    },
    {
      title: 'Goals List',
      name: 'goalsList',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      title: 'Packages',
      name: 'packages',
      type: 'array',
      of: [{ type: 'servicePackage' }]
    }
  ]
};
