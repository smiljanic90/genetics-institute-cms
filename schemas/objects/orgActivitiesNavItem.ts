export const orgActivitiesNavItem = {
  name: 'orgActivitiesNavItem',
  title: 'Navigacijska stavka',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'sectionSlug',
      title: 'Sekcija',
      description: 'Koja sekcija se učitava kada se klikne na ovu stavku',
      type: 'string',
      options: {
        list: [
          { title: 'Pregled', value: 'overview' },
          { title: 'Banka gena', value: 'banka-gena' },
          { title: 'Botanička bašta', value: 'botanicka-basta' },
          { title: 'Poljske kolekcije', value: 'poljske-kolekcije' },
          { title: 'Laboratorije', value: 'laboratorije' },
          {
            title: 'Zaštićeno područje Spomenik parkovske arhitekture „Univerzitetski grad"',
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
      titleSr: 'label->text.sr',
      titleEn: 'label->text.en',
      titleCyr: 'label->text.srCyr',
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
        overview: 'Pregled',
        'banka-gena': 'Banka gena',
        'botanicka-basta': 'Botanička bašta',
        'poljske-kolekcije': 'Poljske kolekcije',
        laboratorije: 'Laboratorije',
        'zasticeno-podrucje': 'Zaštićeno područje',
        publikacije: 'Publikacije',
      };
      const fallback = sectionSlug ? sectionLabels[sectionSlug] : 'Stavka';
      return {
        title: titleSr || titleCyr || titleEn || fallback,
      };
    },
  },
};
