export const footerLink = {
  name: 'footerLink',
  title: 'Link u futeru',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Naziv',
      type: 'localeString',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'path',
      title: 'Putanja',
      description: 'Unutrašnja putanja bez jezika (npr. /o-institutu, /centri).',
      type: 'string',
      hidden: ({ parent }: { parent?: { linkType?: string } }) =>
        parent?.linkType === 'external',
    },
    {
      name: 'linkType',
      title: 'Tip linka',
      type: 'string',
      options: {
        list: [
          { title: 'Unutrašnji (putanja)', value: 'internal' },
          { title: 'Eksterni (URL)', value: 'external' },
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    },
    {
      name: 'externalUrl',
      title: 'Eksterni URL',
      type: 'url',
      hidden: ({ parent }: { parent?: { linkType?: string } }) =>
        parent?.linkType !== 'external',
    },
  ],
  preview: {
    select: {
      labelSr: 'label.sr',
      labelSrCyr: 'label.srCyr',
      labelEn: 'label.en',
    },
    prepare({
      labelSr,
      labelSrCyr,
      labelEn,
    }: {
      labelSr?: string;
      labelSrCyr?: string;
      labelEn?: string;
    }) {
      return { title: labelSr || labelSrCyr || labelEn || 'Link' };
    },
  },
};
