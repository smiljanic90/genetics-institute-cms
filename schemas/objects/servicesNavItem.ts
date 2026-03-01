export const servicesNavItem = {
  name: 'servicesNavItem',
  title: 'Navigacijska stavka (Usluge)',
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
          { title: 'Laboratorijske usluge', value: 'laboratorijske-usluge' },
          {
            title: 'Savjetodavne usluge iz oblasti hortikulturnog uređenja i voćarstva',
            value: 'savjetodavne-usluge',
          },
          {
            title: 'Rasadnik voćaka i ukrasnog sadnog materijala',
            value: 'rasadnik',
          },
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
        'laboratorijske-usluge': 'Laboratorijske usluge',
        'savjetodavne-usluge': 'Savjetodavne usluge',
        rasadnik: 'Rasadnik',
      };
      const fallback = sectionSlug ? sectionLabels[sectionSlug] : 'Stavka';
      return {
        title: titleSr || titleCyr || titleEn || fallback,
      };
    },
  },
};
