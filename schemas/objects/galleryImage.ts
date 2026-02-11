export const galleryImage = {
  name: 'galleryImage',
  title: 'Galerijska slika',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Slika',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'alt', title: 'Alt tekst', type: 'localeString' },
    { name: 'caption', title: 'Opis', type: 'localeString' },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'alt.sr',
      subtitle: 'alt.en',
    },
    prepare({
      media,
      title,
      subtitle,
    }: {
      media?: unknown;
      title?: string;
      subtitle?: string;
    }) {
      return {
        title: title || subtitle || 'Slika',
        subtitle: subtitle && title !== subtitle ? subtitle : undefined,
        media,
      };
    },
  },
};
