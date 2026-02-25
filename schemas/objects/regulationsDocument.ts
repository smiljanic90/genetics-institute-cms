export const regulationsDocument = {
  name: 'regulationsDocument',
  title: 'Dokument (PDF)',
  type: 'object',
  fields: [
    {
      name: 'titleLabel',
      title: 'Naziv dokumenta',
      type: 'localeString',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'file',
      title: 'PDF fajl',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
  ],
  preview: {
    select: { title: 'titleLabel.sr' },
    prepare({ title }: { title?: string }) {
      return { title: title || 'Dokument' };
    },
  },
};
