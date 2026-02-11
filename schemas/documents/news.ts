export const news = {
  name: 'news',
  title: 'Novosti',
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
    { name: 'body', title: 'Sadržaj', type: 'localeBlockContent' },
    {
      name: 'category',
      title: 'Kategorija',
      type: 'reference',
      to: [{ type: 'category' }],
      options: {
        filter: '"news" in categoryTypes',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Datum',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Naslovna slika',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'featured',
      title: 'Istaknuto',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'relatedNews',
      title: 'Povezane vijesti',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'news' }] }],
    },
  ],
  preview: {
    select: {
      titleSr: 'title.sr',
      titleSrCyr: 'title.srCyr',
      titleEn: 'title.en',
      slugCurrent: 'slug.current',
      media: 'image',
    },
    prepare({
      titleSr,
      titleSrCyr,
      titleEn,
      slugCurrent,
      media,
    }: {
      titleSr?: string;
      titleSrCyr?: string;
      titleEn?: string;
      slugCurrent?: string;
      media?: unknown;
    }) {
      // Prioritet: Srpski (latinica) -> Ćirilica -> English -> slug
      const title =
        titleSr || titleSrCyr || titleEn || slugCurrent || '(bez naslova)';
      return { title, media };
    },
  },
};
