export const galleryAlbum = {
  name: 'galleryAlbum',
  title: 'Galerija slika',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Naslov',
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
    { name: 'description', title: 'Opis', type: 'localeText' },
    {
      name: 'category',
      title: 'Kategorija',
      type: 'string',
      options: {
        list: [
          { title: 'Centri', value: 'centri' },
          { title: 'Projekti', value: 'projekti' },
          { title: 'Događaji', value: 'dogadjaji' },
          { title: 'Priroda', value: 'priroda' },
          { title: 'Istraživanja', value: 'istrazivanja' },
        ],
      },
    },
    {
      name: 'images',
      title: 'Slike',
      type: 'array',
      of: [{ type: 'galleryImage' }],
      validation: (Rule: any) => Rule.min(1),
    },
    { name: 'date', title: 'Datum', type: 'datetime' },
    {
      name: 'tags',
      title: 'Tagovi',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      titleEn: 'title.en',
      titleSr: 'title.sr',
      titleSrCyr: 'title.srCyr',
      category: 'category',
      media: 'coverImage',
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
