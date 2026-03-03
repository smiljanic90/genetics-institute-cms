export const regulationsExternalLink = {
  name: 'regulationsExternalLink',
  title: 'Eksterni link',
  type: 'object',
  fields: [
    {
      name: 'titleLabel',
      title: 'Naziv linka',
      description: 'Tekst koji se prikazuje kao link (otvara se u novom tabu)',
      type: 'localeString',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL adresa',
      type: 'url',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Datum',
      description: 'Za hronološko sortiranje (najnoviji na vrhu). Ako prazno, koristi se redoslijed u listi.',
      type: 'datetime',
    },
  ],
  preview: {
    select: { title: 'titleLabel.sr' },
    prepare({ title }: { title?: string }) {
      return { title: title || 'Eksterni link' };
    },
  },
};
