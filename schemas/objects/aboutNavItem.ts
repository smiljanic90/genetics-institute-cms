export const aboutNavItem = {
  name: 'aboutNavItem',
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
          { title: 'Pregled (stranica O Institutu)', value: 'overview' },
          { title: 'Misija i Vizija', value: 'mission' },
          { title: 'Istorijat', value: 'history' },
          { title: 'Tim', value: 'team' },
          { title: 'Partneri', value: 'partners' },
          { title: 'Propisi i Akti', value: 'regulations' },
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
        mission: 'Misija i Vizija',
        history: 'Istorijat',
        team: 'Tim',
        partners: 'Partneri',
        regulations: 'Propisi i Akti',
      };
      const fallback = sectionSlug ? sectionLabels[sectionSlug] : 'Stavka';
      return {
        title: titleSr || titleCyr || titleEn || fallback,
      };
    },
  },
};
