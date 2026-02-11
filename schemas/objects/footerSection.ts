export const footerSection = {
  name: 'footerSection',
  title: 'Sekcija futera',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Naslov sekcije',
      type: 'localeString',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'links',
      title: 'Linkovi',
      type: 'array',
      of: [{ type: 'footerLink' }],
    },
  ],
  preview: {
    select: {
      titleSr: 'title.sr',
      titleSrCyr: 'title.srCyr',
      titleEn: 'title.en',
    },
    prepare({
      titleSr,
      titleSrCyr,
      titleEn,
    }: {
      titleSr?: string;
      titleSrCyr?: string;
      titleEn?: string;
    }) {
      return { title: titleSr || titleSrCyr || titleEn || 'Sekcija futera' };
    },
  },
};
