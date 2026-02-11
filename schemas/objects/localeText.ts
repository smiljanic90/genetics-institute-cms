export const localeText = {
  name: 'localeText',
  title: 'Dugi tekst (jezik)',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    { name: 'en', title: 'English', type: 'text', rows: 3 },
    { name: 'sr', title: 'Srpski (latinica)', type: 'text', rows: 3 },
    { name: 'srCyr', title: 'Српски (ћирилица)', type: 'text', rows: 3 },
  ],
};
