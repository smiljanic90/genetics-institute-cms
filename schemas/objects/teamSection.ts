export const teamSection = {
  name: 'teamSection',
  title: 'Sekcija: Tim',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: 'titleLabel',
      title: 'Naslov sekcije',
      description: 'Npr. "Tim"',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'shortDescription',
      title: 'Kratak opis',
      description: 'Prikazuje se ispod naslova na stranici Tim',
      type: 'localeText',
    },
    {
      name: 'members',
      title: 'Članovi tima',
      description: 'Lista članova tima. Redosled određuje prikaz.',
      type: 'array',
      of: [{ type: 'teamMember' }],
    },
  ],
};
