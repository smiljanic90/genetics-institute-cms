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
};
