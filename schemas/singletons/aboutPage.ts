export const aboutPage = {
  name: 'aboutPage',
  title: 'Stranica: O Institutu',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    {
      name: 'titleLabel',
      title: 'Naslov stranice',
      description: 'Naslov stranice O Institutu (npr. "O Institutu")',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'description',
      title: 'Opis stranice',
      description: 'Opis koji se prikazuje ispod naslova na glavnoj stranici O Institutu',
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
      of: [{ type: 'aboutNavItem' }],
    },
    {
      name: 'overviewCards',
      title: 'Kartice pregleda',
      description:
        'Kartice koje se prikazuju na glavnoj stranici O Institutu. Redosled određuje prikaz.',
      type: 'array',
      of: [{ type: 'aboutOverviewCard' }],
    },
    {
      name: 'missionSection',
      title: 'Sekcija: Misija i Vizija',
      type: 'aboutSection',
    },
    {
      name: 'historySection',
      title: 'Sekcija: Istorijat',
      type: 'aboutSection',
    },
    {
      name: 'teamSection',
      title: 'Sekcija: Tim',
      description: 'Lista članova tima s kategorijama i filterima',
      type: 'teamSection',
    },
    {
      name: 'partnersSection',
      title: 'Sekcija: Partneri',
      type: 'aboutSection',
    },
    {
      name: 'regulationsSection',
      title: 'Sekcija: Propisi i Akti',
      description: 'Lista PDF dokumenata (propisi, akti)',
      type: 'regulationsSection',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Stranica: O Institutu' };
    },
  },
};
