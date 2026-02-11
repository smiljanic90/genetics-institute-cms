export const galleryListPage = {
  name: 'galleryListPage',
  title: 'Stranica: Galerija',
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
      name: 'emptyTitleLabel',
      title: 'Naslov kada nema rezultata',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'emptyDescriptionLabel',
      title: 'Opis kada nema rezultata',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'viewAlbumButton',
      title: 'Dugme "Pogledaj album"',
      type: 'reference',
      to: [{ type: 'button' }],
    },
    {
      name: 'backButton',
      title: 'Dugme "Nazad"',
      type: 'reference',
      to: [{ type: 'button' }],
    },
    {
      name: 'categories',
      title: 'Kategorije za filter',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      filter: '"gallery" in categoryTypes',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Stranica: Galerija' };
    },
  },
};
