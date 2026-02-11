export const localeBlockContent = {
  name: 'localeBlockContent',
  title: 'Blok sadržaj (jezik)',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    { name: 'en', title: 'English', type: 'blockContent' },
    { name: 'sr', title: 'Srpski (latinica)', type: 'blockContent' },
    { name: 'srCyr', title: 'Српски (ћирилица)', type: 'blockContent' },
  ],
};
