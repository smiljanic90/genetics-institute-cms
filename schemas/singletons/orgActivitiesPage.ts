export const orgActivitiesPage = {
  name: 'orgActivitiesPage',
  title: 'Stranica: Organizacija i aktivnosti',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    {
      name: 'titleLabel',
      title: 'Naslov stranice',
      description: 'Naslov stranice (npr. "Organizacija i aktivnosti")',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'description',
      title: 'Opis stranice',
      description:
        'Opis koji se prikazuje ispod naslova na glavnoj stranici Organizacija i aktivnosti',
      type: 'localeText',
    },
    {
      name: 'learnMoreButton',
      title: 'Dugme "Saznaj više"',
      description: 'Prikazuje se na karticama pregleda',
      type: 'reference',
      to: [{ type: 'button' }],
    },
    {
      name: 'navigationHeadingLabel',
      title: 'Naslov navigacije',
      description: 'Naslov za bočnu navigaciju (npr. "Navigacija")',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'navigationItems',
      title: 'Navigacija',
      description:
        'Stavke bočne navigacije. Redosled određuje prikaz. Svaka stavka ima label i sekciju koju učitava.',
      type: 'array',
      of: [{ type: 'orgActivitiesNavItem' }],
    },
    {
      name: 'overviewCards',
      title: 'Kartice pregleda',
      description:
        'Kartice koje se prikazuju na glavnoj stranici. Redosled određuje prikaz.',
      type: 'array',
      of: [{ type: 'orgActivitiesOverviewCard' }],
    },
    {
      name: 'bankaGenSection',
      title: 'Sekcija: Banka gena',
      description: 'Tekst i fotografije',
      type: 'aboutSection',
    },
    {
      name: 'botanickaBastaSection',
      title: 'Sekcija: Botanička bašta',
      description: 'Tekst i fotografije',
      type: 'aboutSection',
    },
    {
      name: 'poljskeKolekcijeSection',
      title: 'Sekcija: Poljske kolekcije',
      description: 'Tekst i fotografije (3 lokacije)',
      type: 'aboutSection',
    },
    {
      name: 'laboratorijeSection',
      title: 'Sekcija: Laboratorije',
      description: 'Tekst i fotografije (5 laboratorija)',
      type: 'aboutSection',
    },
    {
      name: 'zasticenoPodrucjeSection',
      title: 'Sekcija: Zaštićeno područje Spomenik parkovske arhitekture „Univerzitetski grad"',
      description: 'Tekst i fotografije',
      type: 'aboutSection',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Stranica: Organizacija i aktivnosti' };
    },
  },
};
