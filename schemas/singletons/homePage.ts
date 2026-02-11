export const homePage = {
  name: 'homePage',
  title: 'Početna stranica',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    {
      name: 'sections',
      title: 'Sekcije',
      description:
        'Redoslijed sekcija na početnoj stranici. Možete dodati novu sekciju, ukloniti ili promijeniti redoslijed. Za svaku sekciju možete postaviti naslov, opis i (za Projekti/Novosti/Centri/Galerija/Partneri) šta tačno prikazati.',
      type: 'array',
      of: [{ type: 'homeSection' }],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Početna stranica' };
    },
  },
};
