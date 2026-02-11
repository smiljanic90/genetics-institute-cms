export const projectsListPage = {
  name: 'projectsListPage',
  title: 'Stranica: Projekti',
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
      name: 'detailsButton',
      title: 'Dugme "Detalji"',
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
      name: 'learnMoreButton',
      title: 'Dugme "Saznaj više" (detalj)',
      type: 'reference',
      to: [{ type: 'button' }],
    },
    {
      name: 'noImageLabel',
      title: 'Oznaka "Nema slike"',
      description: 'Tekst kada projekat nema sliku',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'categoryFilterLabel',
      title: 'Oznaka za Kategorije',
      description: 'Naslov iznad filtera kategorija (npr. "Kategorija" ili "Kategorije")',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'statusFilterLabel',
      title: 'Oznaka za Status',
      description: 'Naslov iznad filtera statusa (npr. "Status")',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'categoryCategories',
      title: 'Kategorije projekata (istraživanje, očuvanje, itd.)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      filter: '"project" in categoryTypes',
    },
    {
      name: 'statusCategories',
      title: 'Statusi (aktivno, završeno, planirano)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      filter: '"status" in categoryTypes',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Stranica: Projekti' };
    },
  },
};
