export const orgActivitiesOverviewCard = {
  name: 'orgActivitiesOverviewCard',
  title: 'Kartica pregleda',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'titleLabel',
      title: 'Naslov kartice',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'shortDescription',
      title: 'Kratak opis',
      type: 'localeText',
    },
    {
      name: 'image',
      title: 'Slika kartice',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'sectionSlug',
      title: 'Sekcija na koju vodi',
      type: 'string',
      options: {
        list: [
          { title: 'Banka gena', value: 'banka-gena' },
          { title: 'Botanička bašta', value: 'botanicka-basta' },
          { title: 'Poljske kolekcije', value: 'poljske-kolekcije' },
          { title: 'Laboratorije', value: 'laboratorije' },
          {
            title: 'Zaštićeno područje',
            value: 'zasticeno-podrucje',
          },
          { title: 'Publikacije', value: 'publikacije' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      titleSr: 'titleLabel->text.sr',
      titleEn: 'titleLabel->text.en',
      titleCyr: 'titleLabel->text.srCyr',
      sectionSlug: 'sectionSlug',
    },
    prepare({
      titleSr,
      titleEn,
      titleCyr,
      sectionSlug,
    }: {
      titleSr?: string;
      titleEn?: string;
      titleCyr?: string;
      sectionSlug?: string;
    }) {
      const sectionLabels: Record<string, string> = {
        'banka-gena': 'Banka gena',
        'botanicka-basta': 'Botanička bašta',
        'poljske-kolekcije': 'Poljske kolekcije',
        laboratorije: 'Laboratorije',
        'zasticeno-podrucje': 'Zaštićeno područje',
        publikacije: 'Publikacije',
      };
      const fallback = sectionSlug ? sectionLabels[sectionSlug] : 'Kartica';
      return {
        title: titleSr || titleCyr || titleEn || fallback,
      };
    },
  },
};
