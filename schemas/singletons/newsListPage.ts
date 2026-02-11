export const newsListPage = {
  name: 'newsListPage',
  title: 'Stranica: Novosti',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    {
      name: 'titleLabel',
      title: 'Naslov stranice',
      description: 'Oznaka za naslov (npr. "Novosti")',
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
      name: 'readMoreButton',
      title: 'Dugme "Pročitaj više" (istaknuta vijest)',
      type: 'reference',
      to: [{ type: 'button' }],
    },
    {
      name: 'learnMoreButton',
      title: 'Dugme "Saznaj više" (kartice u listi)',
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
      description:
        'Odaberi koje kategorije prikazati u filteru. Slug mora odgovarati kategorijama u novostima.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      filter: '"news" in categoryTypes',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Stranica: Novosti' };
    },
  },
};
