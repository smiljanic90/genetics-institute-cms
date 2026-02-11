export const button = {
  name: 'button',
  title: 'Dugme',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    {
      name: 'name',
      title: 'Interni naziv',
      description: 'Koristi se za identifikaciju (npr. "pogledaj-sve", "saznaj-vise")',
      type: 'string',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Tekst dugmeta (podržava više jezika)',
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
      return { title: textSr || textEn || name || 'Dugme', subtitle: name };
    },
  },
};
