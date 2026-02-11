export const centersListPage = {
  name: 'centersListPage',
  title: 'Stranica: Centri',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    {
      name: 'titleLabel',
      title: 'Naslov stranice',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'description',
      title: 'Opis stranice',
      type: 'localeText',
    },
    {
      name: 'learnMoreButton',
      title: 'Dugme "Saznaj više"',
      type: 'reference',
      to: [{ type: 'button' }],
    },
    {
      name: 'backButton',
      title: 'Dugme "Nazad"',
      type: 'reference',
      to: [{ type: 'button' }],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Stranica: Centri' };
    },
  },
};
