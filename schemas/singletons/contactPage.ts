export const contactPage = {
  name: 'contactPage',
  title: 'Stranica: Kontakt',
  type: 'document',
  options: {
    languageFilter: true,
  },
  fields: [
    {
      name: 'titleLabel',
      title: 'Naslov stranice',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'description',
      title: 'Opis stranice',
      type: 'localeText',
    },
    {
      name: 'addressLabel',
      title: 'Oznaka "Adresa"',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'phoneLabel',
      title: 'Oznaka "Telefon"',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'emailLabel',
      title: 'Oznaka "E-mail"',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'workingHoursLabel',
      title: 'Oznaka "Radno vrijeme"',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'workingHours',
      title: 'Radno vrijeme (redovi)',
      description: 'npr. "Pon - Pet: 08:00 - 16:00" ili više redova',
      type: 'localeText',
    },
    {
      name: 'formTitleLabel',
      title: 'Naslov forme (npr. "Pošaljite poruku")',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'nameLabel',
      title: 'Oznaka polja "Ime i prezime"',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'namePlaceholder',
      title: 'Placeholder za ime',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'emailFieldLabel',
      title: 'Oznaka polja "E-mail"',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'emailPlaceholder',
      title: 'Placeholder za e-mail',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'subjectLabel',
      title: 'Oznaka polja "Predmet"',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'subjectPlaceholder',
      title: 'Placeholder za predmet',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'messageLabel',
      title: 'Oznaka polja "Poruka"',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'messagePlaceholder',
      title: 'Placeholder za poruku',
      type: 'reference',
      to: [{ type: 'label' }],
    },
    {
      name: 'submitButton',
      title: 'Dugme "Pošalji poruku"',
      type: 'reference',
      to: [{ type: 'button' }],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Stranica: Kontakt' };
    },
  },
};
