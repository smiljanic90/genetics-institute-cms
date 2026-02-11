export const figure = {
  name: 'figure',
  title: 'Slika sa opisom',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Slika',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'alt', title: 'Alt tekst', type: 'string' },
    { name: 'caption', title: 'Opis', type: 'string' },
  ],
};
