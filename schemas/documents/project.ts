export const project = {
  name: 'project',
  title: 'Projekti i usluge',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Naslov',
      type: 'localeString',
      validation: (Rule: any) =>
        Rule.custom(
          (v: { en?: string; sr?: string; srCyr?: string } | undefined) => {
            if (!v?.en && !v?.sr && !v?.srCyr)
              return 'At least one language required';
            return true;
          },
        ),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: {
          title?: { en?: string; sr?: string; srCyr?: string };
        }) => doc?.title?.sr || '',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Naslovna slika',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'excerpt',
      title: 'Kratak opis',
      type: 'localeText',
      validation: (Rule: any) =>
        Rule.custom(
          (v: { en?: string; sr?: string; srCyr?: string } | undefined) => {
            if (!v?.en && !v?.sr && !v?.srCyr)
              return 'At least one language required';
            return true;
          },
        ),
    },
    { name: 'body', title: 'Detaljan opis', type: 'localeBlockContent' },
    {
      name: 'externalLink',
      title: 'Eksterni link',
      description:
        'Opcioni link koji se prikazuje ispod sadržaja. Otvara se u novom tabu.',
      type: 'url',
    },
    {
      name: 'externalLinkLabel',
      title: 'Tekst linka (opciono)',
      description:
        'Ako prazno, koristi se default iz postavki stranice. Npr. "Saznaj više".',
      type: 'localeString',
    },
    {
      name: 'documents',
      title: 'PDF dokumenti',
      description:
        'Opcioni PDF dokumenti za preuzimanje. Za svaki možeš označiti "Dodaj na Publikacije".',
      type: 'array',
      of: [{ type: 'projectDocument' }],
    },
    {
      name: 'documentsLabel',
      title: 'Oznaka za PDF dokumente',
      description:
        'Naslov iznad liste PDF dokumenata. Obavezno kada dodaješ PDF dokumente.',
      type: 'localeString',
      hidden: ({ parent }: { parent?: { documents?: unknown[] } }) =>
        !parent?.documents?.length,
    },
    {
      name: 'category',
      title: 'Kategorija',
      type: 'string',
      options: {
        list: [
          { title: 'Istraživanje', value: 'istraživanje' },
          { title: 'Očuvanje', value: 'očuvanje' },
          { title: 'Edukacija', value: 'edukacija' },
          { title: 'Razvoj', value: 'razvoj' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Aktivno', value: 'aktivno' },
          { title: 'Završeno', value: 'završeno' },
          { title: 'Planirano', value: 'planirano' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'relatedProjects',
      title: 'Povezani projekti',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    },
  ],
  preview: {
    select: {
      titleEn: 'title.en',
      titleSr: 'title.sr',
      titleSrCyr: 'title.srCyr',
      status: 'status',
      media: 'image',
    },
    prepare({
      titleEn,
      titleSr,
      titleSrCyr,
      status,
      media,
    }: {
      titleEn?: string;
      titleSr?: string;
      titleSrCyr?: string;
      status?: string;
      media?: unknown;
    }) {
      const title = titleSr || titleSrCyr || titleEn || '(bez naslova)';
      return { title, subtitle: status, media };
    },
  },
};
