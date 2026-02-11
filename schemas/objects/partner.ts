export const partner = {
  name: 'partner',
  title: 'Partner',
  type: 'object',
  fields: [
    { name: 'name', title: 'Naziv', type: 'localeString' },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'url', title: 'Link (opciono)', type: 'url' },
  ],
  preview: {
    select: {
      nameSr: 'name.sr',
      nameSrCyr: 'name.srCyr',
      nameEn: 'name.en',
      media: 'logo',
    },
    prepare({
      nameSr,
      nameSrCyr,
      nameEn,
      media,
    }: {
      nameSr?: string;
      nameSrCyr?: string;
      nameEn?: string;
      media?: unknown;
    }) {
      const title = nameSr || nameSrCyr || nameEn || 'Partner';
      return { title, media };
    },
  },
};
