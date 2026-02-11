export const seo = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta naslov',
      type: 'string',
      validation: (Rule: any) => Rule.max(60),
    },
    {
      name: 'metaDescription',
      title: 'Meta opis',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.max(160),
    },
    {
      name: 'ogImage',
      title: 'Open Graph slika',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
