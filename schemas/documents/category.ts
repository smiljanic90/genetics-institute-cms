export const category = {
  name: 'category',
  title: 'Kategorija',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    {
      name: 'slug',
      title: 'Slug (identifikator)',
      description:
        'Mora odgovarati vrednosti u sadržaju. Npr. za novosti: vesti, dogadjaji, israzivanja. Za projekte status: aktivno, zavrseno, planirano.',
      type: 'string',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Naziv (prikazuje se korisniku)',
      type: 'localeString',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'categoryTypes',
      title: 'Tipovi kategorije',
      description:
        'Kategorija može pripadati više tipova. Npr. "Vesti" može biti i za novosti i za galeriju.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Novosti', value: 'news' },
          { title: 'Projekti - kategorija', value: 'project' },
          { title: 'Projekti - status', value: 'status' },
          { title: 'Galerija', value: 'gallery' },
        ],
        layout: 'grid',
      },
      validation: (Rule: { required: () => unknown }) =>
        Rule.required().min(1).error('Odaberi bar jedan tip kategorije'),
    },
  ],
  preview: {
    select: {
      slug: 'slug',
      nameSr: 'name.sr',
      nameEn: 'name.en',
      categoryTypes: 'categoryTypes',
    },
    prepare({
      slug,
      nameSr,
      nameEn,
      categoryTypes,
    }: {
      slug?: string;
      nameSr?: string;
      nameEn?: string;
      categoryTypes?: string[];
    }) {
      const typeLabels: Record<string, string> = {
        news: 'Novosti',
        project: 'Projekti',
        status: 'Status',
        gallery: 'Galerija',
      };
      const types =
        Array.isArray(categoryTypes) && categoryTypes.length > 0
          ? categoryTypes
              .map((t) => typeLabels[t] || t)
              .join(', ')
          : '—';
      return {
        title: nameSr || nameEn || slug || 'Kategorija',
        subtitle: `${types} • ${slug}`,
      };
    },
  },
};
