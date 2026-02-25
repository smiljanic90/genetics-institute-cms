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
        }) => doc?.title?.sr || '',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Naslovna slika',
      type: 'image',
      options: { hotspot: true },
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
      name: 'externalLink',
      title: 'Link (Pogledajte više na)',
      description:
        'Opcioni link koji se prikazuje ispod sadržaja. Otvara se u novom tabu (npr. link na članak, izvor).',
      type: 'url',
    },
    {
      name: 'externalLinkLabel',
      title: 'Tekst linka (opciono)',
      description:
        'Ako prazno, prikazuje se URL. Možete unijeti kratak tekst npr. "Otvori članak".',
      type: 'localeString',
    },
    {
      name: 'documents',
      title: 'PDF dokumenti',
      description: 'Opcioni PDF dokumenti za preuzimanje (npr. prilozi, publikacije)',
      type: 'array',
      of: [{ type: 'newsDocument' }],
    },
    {
      name: 'documentsLabel',
      title: 'Oznaka za PDF dokumente',
      description:
        'Naslov iznad liste PDF dokumenata. Obavezno kada dodajete PDF dokumente. Unesite prijevode za sve jezike.',
      type: 'localeString',
      hidden: ({ parent }: { parent?: { documents?: unknown[] } }) =>
        !parent?.documents?.length,
    },
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
