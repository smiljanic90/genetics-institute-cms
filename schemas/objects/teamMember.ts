export const TEAM_CATEGORIES = [
  { title: 'Direktor', value: 'direktor' },
  { title: 'Naučno vijeće instituta', value: 'naucno_vijece_instituta' },
  { title: 'Administrativno osoblje', value: 'administrativno_osoblje' },
  { title: 'Stalni saradnici', value: 'stalni_saradnici' },
  {
    title: 'Osoblje u naučnom i istraživačkom zvanju',
    value: 'osoblje_u_naucnom_i_istrazivackom_zvanju',
  },
] as const;

export const teamMember = {
  name: 'teamMember',
  title: 'Član tima',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Fotografija',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Ime',
      type: 'localeString',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'surname',
      title: 'Prezime',
      type: 'localeString',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Zvanje',
      description: 'Npr. "Dr sci.", "Dipl. ing.", "Asistent"',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'localeText',
    },
    {
      name: 'category',
      title: 'Kategorija / Oznaka',
      type: 'string',
      options: {
        list: TEAM_CATEGORIES,
        layout: 'dropdown',
      },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      nameSr: 'name.sr',
      surnameSr: 'surname.sr',
      nameEn: 'name.en',
      surnameEn: 'surname.en',
    },
    prepare({
      nameSr,
      surnameSr,
      nameEn,
      surnameEn,
    }: {
      nameSr?: string;
      surnameSr?: string;
      nameEn?: string;
      surnameEn?: string;
    }) {
      const name = nameSr || nameEn || '';
      const surname = surnameSr || surnameEn || '';
      return { title: [name, surname].filter(Boolean).join(' ') || 'Član tima' };
    },
  },
};
