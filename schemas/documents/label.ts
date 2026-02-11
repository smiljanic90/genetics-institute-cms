export const label = {
  name: 'label',
  title: 'Oznaka (Label)',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    {
      name: 'name',
      title: 'Interni naziv',
      description: 'Koristi se za identifikaciju u CMS-u (npr. "novosti-badge", "prazno-naslov")',
      type: 'string',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Tekst (podržava više jezika)',
      type: 'localeString',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
  ],
  preview: {
    select: { name: 'name', textSr: 'text.sr', textEn: 'text.en' },
    prepare({
      name,
      textSr,
      textEn,
    }: {
      name?: string;
      textSr?: string;
      textEn?: string;
    }) {
      return { title: textSr || textEn || name || 'Oznaka', subtitle: name };
    },
  },
};
