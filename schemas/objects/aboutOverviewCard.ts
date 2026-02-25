export const aboutOverviewCard = {
  name: 'aboutOverviewCard',
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
      name: 'icon',
      title: 'Ikona',
      description: 'Ikona za karticu',
      type: 'string',
      options: {
        list: [
          { title: 'Target (cilj)', value: 'target' },
          { title: 'Eye (oko)', value: 'eye' },
          { title: 'History (istorija)', value: 'history' },
          { title: 'Users (korisnici)', value: 'users' },
          { title: 'Handshake (rukovanje)', value: 'handshake' },
          { title: 'FileText (dokument)', value: 'file-text' },
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'sectionSlug',
      title: 'Sekcija na koju vodi',
      type: 'string',
      options: {
        list: [
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
        mission: 'Misija i Vizija',
        history: 'Istorijat',
        team: 'Tim',
        partners: 'Partneri',
        regulations: 'Propisi i Akti',
      };
      const fallback = sectionSlug ? sectionLabels[sectionSlug] : 'Kartica';
      return {
        title: titleSr || titleCyr || titleEn || fallback,
      };
    },
  },
};
