export const aboutSection = {
  name: 'aboutSection',
  title: 'Sekcija O Institutu',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'titleLabel',
      title: 'Naslov sekcije',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'shortDescription',
      title: 'Kratak opis',
      description: 'Prikazuje se na karticama pregleda i ispod naslova na stranici sekcije',
      type: 'localeText',
    },
    {
      name: 'content',
      title: 'Sadržaj',
      description: 'Glavni tekst sekcije (Portable Text editor)',
      type: 'localeBlockContent',
    },
  ],
};
