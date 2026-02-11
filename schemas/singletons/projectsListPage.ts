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
      name: 'searchPlaceholderLabel',
      title: 'Placeholder za pretragu',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'categoryFilterLabel',
      title: 'Oznaka za filter kategorija',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'statusFilterLabel',
      title: 'Oznaka za filter statusa',
      type: 'reference',
      to: [{ type: 'label' }],
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
      name: 'detailCategoryLabel',
      title: 'Oznaka "Kategorija" (detalj)',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'detailStatusLabel',
      title: 'Oznaka "Status" (detalj)',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'detailYearLabel',
      title: 'Oznaka "Godina" (detalj)',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'detailTagsLabel',
      title: 'Oznaka "Tagovi" (detalj)',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'detailRelatedLabel',
      title: 'Oznaka "Povezani projekti" (detalj)',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'learnMoreButton',
      title: 'Dugme "Saznaj više" (detalj)',
      type: 'reference',
      to: [{ type: 'button' }],
    },
    {
      name: 'allFilterLabel',
      title: 'Oznaka za "Sve" u filterima',
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
