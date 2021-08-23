export const servicePackage = {
  title: 'Package',
  name: 'servicePackage',
  type: 'object',
  fields: [
    {
      title: 'Package Name',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Package Length',
      name: 'subhead',
      type: 'string'
    },
    {
      title: 'Package Session',
      name: 'session',
      type: 'string'
    },
    {
      title: 'Package Description',
      name: 'copy',
      type: 'markdown'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    }
  ]
};
