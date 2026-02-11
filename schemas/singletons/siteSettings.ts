export const siteSettings = {
  name: 'siteSettings',
  title: 'Podešavanja sajta',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    { name: 'name', title: 'Puni naziv', type: 'localeString' },
    { name: 'shortName', title: 'Skraćeni naziv', type: 'localeString' },
    { name: 'description', title: 'Opis', type: 'localeText' },
    { name: 'url', title: 'URL sajta', type: 'url' },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    {
      name: 'navbar',
      title: 'Navigacija (navbar)',
      type: 'object',
      fields: [
        {
          name: 'items',
          title: 'Stavke navigacije',
          type: 'array',
          of: [{ type: 'navItem' }],
        },
      ],
    },
    {
      name: 'footer',
      title: 'Futer',
      type: 'object',
      fields: [
        {
          name: 'institut',
          title: 'Institut',
          type: 'footerSection',
          description: 'Linkovi u koloni Institut',
        },
        {
          name: 'centri',
          title: 'Centri',
          type: 'footerSection',
          description: 'Linkovi u koloni Centri',
        },
        {
          name: 'resursi',
          title: 'Resursi',
          type: 'footerSection',
          description: 'Linkovi u koloni Resursi',
        },
      ],
    },
    {
      name: 'social',
      title: 'Društvene mreže',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'twitter', title: 'Twitter', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
      ],
    },
    {
      name: 'contact',
      title: 'Kontakt',
      type: 'object',
      fields: [
        { name: 'email', title: 'E-mail', type: 'string' },
        { name: 'phone', title: 'Telefon', type: 'string' },
        { name: 'address', title: 'Adresa', type: 'string' },
      ],
    },
  ],
  preview: {
    select: { nameSr: 'name.sr', nameEn: 'name.en', nameSrCyr: 'name.srCyr' },
    prepare({
      nameSr,
      nameEn,
      nameSrCyr,
    }: {
      nameSr?: string;
      nameEn?: string;
      nameSrCyr?: string;
    }) {
      const title = nameSr || nameSrCyr || nameEn || 'Podešavanja sajta';
      return { title };
    },
  },
};
