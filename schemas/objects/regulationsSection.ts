export const regulationsSection = {
  name: 'regulationsSection',
  title: 'Sekcija: Propisi i Akti',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'titleLabel',
      title: 'Naslov sekcije',
      description: 'Npr. "Propisi i Akti"',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'shortDescription',
      title: 'Kratak opis',
      description: 'Prikazuje se ispod naslova na stranici Propisi i Akti',
      type: 'localeText',
    },
    {
      name: 'documents',
      title: 'Dokumenti (PDF)',
      description: 'Lista PDF dokumenata koje korisnici mogu preuzeti',
      type: 'array',
      of: [{ type: 'regulationsDocument' }],
    },
  ],
};
