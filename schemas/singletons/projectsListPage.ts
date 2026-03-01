export const projectsListPage = {
  name: 'projectsListPage',
  title: 'Stranica: Projekti i usluge',
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
      name: 'allFilterLabel',
      title: 'Oznaka "Sve" u filterima',
      description: 'Label za opciju "Sve" u filterima kategorija i statusa',
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
    // Tabovi: Projekti / Usluge
    {
      name: 'projectsTabLabel',
      title: 'Tab "Projekti"',
      description: 'Label za tab Projekti',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'projectsTabTitleLabel',
      title: 'Naslov (tab Projekti)',
      description: 'Naslov koji se prikazuje iznad sadržaja kada je tab Projekti aktivan',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'projectsTabShortDescription',
      title: 'Kratki opis (tab Projekti)',
      description: 'Kratki opis ispod naslova na tabu Projekti',
      type: 'localeText',
    },
    {
      name: 'servicesTabLabel',
      title: 'Tab "Usluge"',
      description: 'Label za tab Usluge',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'servicesTabTitleLabel',
      title: 'Naslov (tab Usluge)',
      description: 'Naslov koji se prikazuje iznad sadržaja kada je tab Usluge aktivan',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'servicesTabShortDescription',
      title: 'Kratki opis (tab Usluge)',
      description: 'Kratki opis ispod naslova na tabu Usluge',
      type: 'localeText',
    },
    // Usluge – bočna navigacija i sekcije
    {
      name: 'servicesNavigationHeadingLabel',
      title: 'Naslov navigacije (Usluge)',
      description: 'Naslov za bočnu navigaciju na tabu Usluge (npr. "Navigacija")',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'servicesNavigationItems',
      title: 'Navigacija (Usluge)',
      description:
        'Stavke bočne navigacije na tabu Usluge. Redosled određuje prikaz.',
      type: 'array',
      of: [{ type: 'servicesNavItem' }],
    },
    {
      name: 'laboratorijskeUslugeSection',
      title: 'Sekcija: Laboratorijske usluge',
      description: 'Tekst i fotografije',
      type: 'aboutSection',
    },
    {
      name: 'savjetodavneUslugeSection',
      title: 'Sekcija: Savjetodavne usluge iz oblasti hortikulturnog uređenja i voćarstva',
      description: 'Tekst i fotografije',
      type: 'aboutSection',
    },
    {
      name: 'rasadnikSection',
      title: 'Sekcija: Rasadnik voćaka i ukrasnog sadnog materijala',
      description: 'Tekst i fotografije',
      type: 'aboutSection',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Stranica: Projekti i usluge' };
    },
  },
};
