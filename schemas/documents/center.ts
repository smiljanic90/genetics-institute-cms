export const center = {
  name: 'center',
  title: 'Centar',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Naziv centra',
      type: 'localeString',
      validation: (Rule: any) =>
        Rule.custom(
          (v: { en?: string; sr?: string; srCyr?: string } | undefined) => {
            if (!v?.en && !v?.sr && !v?.srCyr)
              return 'At least one language required';
            return true;
          },
        ),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: {
          title?: { en?: string; sr?: string; srCyr?: string };
        }) => doc?.title?.en || doc?.title?.sr || doc?.title?.srCyr || '',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Kratak opis',
      type: 'localeText',
      validation: (Rule: any) =>
        Rule.custom(
          (v: { en?: string; sr?: string; srCyr?: string } | undefined) => {
            if (!v?.en && !v?.sr && !v?.srCyr)
              return 'At least one language required';
            return true;
          },
        ),
    },
    { name: 'description', title: 'Detaljan opis', type: 'localeBlockContent' },
    {
      name: 'image',
      title: 'Naslovna slika',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'relatedCenters',
      title: 'Povezani centri',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'center' }] }],
    },
  ],
  preview: {
    select: {
      titleEn: 'title.en',
      titleSr: 'title.sr',
      titleSrCyr: 'title.srCyr',
      category: 'category',
      media: 'image',
    },
    prepare({
      titleEn,
      titleSr,
      titleSrCyr,
      category,
      media,
    }: {
      titleEn?: string;
      titleSr?: string;
      titleSrCyr?: string;
      category?: string;
      media?: unknown;
    }) {
      const title = titleSr || titleSrCyr || titleEn || '(bez naslova)';
      return { title, subtitle: category, media };
    },
  },
};
