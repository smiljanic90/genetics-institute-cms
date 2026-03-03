export const projectDocument = {
  name: 'projectDocument',
  title: 'PDF dokument projekta',
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
    {
      name: 'showOnPublications',
      title: 'Dodaj na Publikacije',
      type: 'boolean',
      description:
        'Ako je označeno, ovaj PDF će se prikazati na stranici Publikacije (Organizacija i aktivnosti)',
      initialValue: false,
    },
  ],
  preview: {
    select: { title: 'titleLabel.sr' },
    prepare({ title }: { title?: string }) {
      return { title: title || 'PDF dokument' };
    },
  },
};
