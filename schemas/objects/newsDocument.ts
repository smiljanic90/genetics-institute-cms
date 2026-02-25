export const newsDocument = {
  name: 'newsDocument',
  title: 'PDF dokument',
  type: 'object',
  fields: [
    {
      name: 'titleLabel',
      title: 'Naziv dokumenta',
      description: 'Naziv koji se prikazuje kao link za preuzimanje',
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
      return { title: title || 'PDF dokument' };
    },
  },
};
