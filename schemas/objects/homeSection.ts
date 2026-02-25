const SECTION_TYPES = [
  { title: 'Hero (naslovnica)', value: 'hero' },
  { title: 'O nama', value: 'about' },
  { title: 'Naši partneri', value: 'partners' },
  { title: 'Organizacija i aktivnosti', value: 'orgActivities' },
  { title: 'Projekti i usluge', value: 'projects' },
  { title: 'Novosti', value: 'news' },
  { title: 'Galerija', value: 'gallery' },
  { title: 'Kontakt', value: 'contact' },
] as const;

export const homeSection = {
  name: 'homeSection',
  title: 'Sekcija početne strane',
  type: 'object',
  groups: [
    { name: 'content', title: 'Sadržaj', default: true },
    { name: 'projects', title: 'Projekti i usluge' },
    { name: 'news', title: 'Novosti (samo za sekciju Novosti)' },
    { name: 'orgActivities', title: 'Organizacija i aktivnosti' },
    { name: 'gallery', title: 'Galerija (samo za sekciju Galerija)' },
    { name: 'partners', title: 'Partneri (samo za sekciju Partneri)' },
  ],
  fields: [
    {
      name: 'sectionType',
      title: 'Tip sekcije',
      type: 'string',
      options: { list: SECTION_TYPES },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
      group: 'content',
    },
    {
      name: 'enabled',
      title: 'Prikaži sekciju',
      type: 'boolean',
      initialValue: true,
      group: 'content',
    },
    {
      name: 'badgeLabel',
      title: 'Oznaka sekcije (badge)',
      description:
        'Mala oznaka iznad naslova (npr. "Novosti", "Centri"). Odaberi iz liste oznaka.',
      type: 'reference',
      to: [{ type: 'label' }],
      group: 'content',
    },
    {
      name: 'title',
      title: 'Naslov sekcije (opciono)',
      description: 'Ako ostavite prazno, koristi se podrazumijevani naslov.',
      type: 'localeString',
      group: 'content',
    },
    {
      name: 'description',
      title: 'Opis sekcije (opciono)',
      type: 'localeText',
      group: 'content',
    },
    {
      name: 'buttonLabel',
      title: 'Dugme "Pogledaj sve"',
      description: 'Dugme za link na listu (npr. "Pogledaj sve").',
      type: 'reference',
      to: [{ type: 'button' }],
      group: 'content',
    },
    {
      name: 'readMoreButton',
      title: 'Dugme "Pročitaj više" / "Saznaj više"',
      description:
        'Dugme na karticama (opciono). Ako prazno, koristi "Pogledaj sve" dugme.',
      type: 'reference',
      to: [{ type: 'button' }],
      group: 'content',
    },
    {
      name: 'heroBackgroundImage',
      title: 'Slika pozadine (samo za Hero sekciju)',
      description: 'Slika koja se prikazuje u pozadini hero sekcije na početnoj stranici',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'content',
      hidden: ({ parent }: { parent?: { sectionType?: string } }) =>
        parent?.sectionType !== 'hero',
    },
    {
      name: 'heroStats',
      title: 'Statistike (samo za Hero sekciju)',
      description:
        'Brojevi i opisi ispod hero sadržaja (npr. 30+ Godina tradicije)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Broj', type: 'string' },
            {
              name: 'label',
              title: 'Oznaka',
              type: 'reference',
              to: [{ type: 'label' }],
            },
          ],
          preview: {
            select: { number: 'number' },
            prepare: ({ number }: { number?: string }) => ({
              title: number || 'Stat',
            }),
          },
        },
      ],
      group: 'content',
      hidden: ({ parent }: { parent?: { sectionType?: string } }) =>
        parent?.sectionType !== 'hero',
    },
    {
      name: 'selectedOverviewCardSlugs',
      title: 'Odabrane kartice (samo za sekciju O nama)',
      description:
        'Odaberi koje kartice sa Stranice O Institutu prikazati i u kojem redoslijedu. Sadržaj (naslov, opis) dolazi iz tih kartica.',
      type: 'array',
      of: [
        {
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
        },
      ],
      group: 'content',
      hidden: ({ parent }: { parent?: { sectionType?: string } }) =>
        parent?.sectionType !== 'about',
    },
    // Projekti: izbor projekata ili zadnjih N
    {
      name: 'featuredProjects',
      title: 'Odabrani projekti',
      description:
        'Ako odaberete projekte, prikazuju se samo oni. Ako ne odaberete nijedan, prikazuju se zadnja 4 projekta.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      group: 'projects',
      hidden: ({ parent }: { parent?: { sectionType?: string } }) =>
        parent?.sectionType !== 'projects',
    },
    {
      name: 'projectsLimit',
      title: 'Broj projekata (kad nisu odabrani)',
      type: 'number',
      initialValue: 4,
      validation: (Rule: {
        min: (n: number) => { max: (m: number) => unknown };
      }) => Rule.min(1).max(12),
      group: 'projects',
      hidden: ({ parent }: { parent?: { sectionType?: string } }) =>
        parent?.sectionType !== 'projects',
    },
    // Novosti
    {
      name: 'featuredNews',
      title: 'Odabrane novosti',
      description:
        'Ako odaberete novosti, prikazuju se one. Ako ne odaberete nijednu, prikazuju se zadnje novosti.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'news' }] }],
      group: 'news',
      hidden: ({ parent }: { parent?: { sectionType?: string } }) =>
        parent?.sectionType !== 'news',
    },
    {
      name: 'newsLimit',
      title: 'Broj novosti (kad nisu odabrane)',
      type: 'number',
      initialValue: 3,
      validation: (Rule: {
        min: (n: number) => { max: (m: number) => unknown };
      }) => Rule.min(1).max(10),
      group: 'news',
      hidden: ({ parent }: { parent?: { sectionType?: string } }) =>
        parent?.sectionType !== 'news',
    },
    // Organizacija i aktivnosti
    {
      name: 'selectedOrgActivitiesCardSlugs',
      title: 'Odabrane kartice',
      description:
        'Odaberi koje kartice sa Stranice Organizacija i aktivnosti prikazati i u kojem redoslijedu.',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Banka gena', value: 'banka-gena' },
              { title: 'Botanička bašta', value: 'botanicka-basta' },
              { title: 'Poljske kolekcije', value: 'poljske-kolekcije' },
              { title: 'Laboratorije', value: 'laboratorije' },
              {
                title: 'Zaštićeno područje',
                value: 'zasticeno-podrucje',
              },
            ],
            layout: 'dropdown',
          },
        },
      ],
      group: 'orgActivities',
      hidden: ({ parent }: { parent?: { sectionType?: string } }) =>
        parent?.sectionType !== 'orgActivities',
    },
    // Galerija
    {
      name: 'featuredAlbums',
      title: 'Odabrani albumi',
      description:
        'Ako odaberete albume, prikazuju se oni. Ako ne odaberete nijedan, prikazuju se zadnji albumi.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'galleryAlbum' }] }],
      group: 'gallery',
      hidden: ({ parent }: { parent?: { sectionType?: string } }) =>
        parent?.sectionType !== 'gallery',
    },
    {
      name: 'galleryLimit',
      title: 'Broj albuma (kad nisu odabrani)',
      type: 'number',
      initialValue: 4,
      validation: (Rule: {
        min: (n: number) => { max: (m: number) => unknown };
      }) => Rule.min(1).max(12),
      group: 'gallery',
      hidden: ({ parent }: { parent?: { sectionType?: string } }) =>
        parent?.sectionType !== 'gallery',
    },
    // Partneri
    {
      name: 'partners',
      title: 'Lista partnera',
      type: 'array',
      of: [{ type: 'partner' }],
      group: 'partners',
      hidden: ({ parent }: { parent?: { sectionType?: string } }) =>
        parent?.sectionType !== 'partners',
    },
  ],
  preview: {
    select: {
      type: 'sectionType',
      titleSr: 'title.sr',
      titleSrCyr: 'title.srCyr',
      titleEn: 'title.en',
      enabled: 'enabled',
    },
    prepare({
      type,
      titleSr,
      titleSrCyr,
      titleEn,
      enabled,
    }: {
      type?: string;
      titleSr?: string;
      titleSrCyr?: string;
      titleEn?: string;
      enabled?: boolean;
    }) {
      const labels: Record<string, string> = {
        hero: 'Hero',
        about: 'O nama',
        partners: 'Naši partneri',
        orgActivities: 'Organizacija i aktivnosti',
        projects: 'Projekti i usluge',
        news: 'Novosti',
        gallery: 'Galerija',
        contact: 'Kontakt',
      };
      const title =
        titleSr ||
        titleSrCyr ||
        titleEn ||
        labels[type || ''] ||
        type ||
        'Sekcija';
      return {
        title,
        subtitle: enabled === false ? '(skriveno)' : labels[type || ''],
      };
    },
  },
};
