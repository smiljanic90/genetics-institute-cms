import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Sadržaj')
    .items([
      // Singletons at top
      S.listItem()
        .id('homePage')
        .schemaType('homePage')
        .title('Početna stranica')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .id('siteSettings')
        .schemaType('siteSettings')
        .title('Podešavanja sajta')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings'),
        ),
      S.divider(),
      // List pages
      S.listItem()
        .id('newsListPage')
        .schemaType('newsListPage')
        .title('Stranica: Novosti')
        .child(
          S.document()
            .schemaType('newsListPage')
            .documentId('newsListPage'),
        ),
      S.listItem()
        .id('centersListPage')
        .schemaType('centersListPage')
        .title('Stranica: Centri')
        .child(
          S.document()
            .schemaType('centersListPage')
            .documentId('centersListPage'),
        ),
      S.listItem()
        .id('projectsListPage')
        .schemaType('projectsListPage')
        .title('Stranica: Projekti')
        .child(
          S.document()
            .schemaType('projectsListPage')
            .documentId('projectsListPage'),
        ),
      S.listItem()
        .id('galleryListPage')
        .schemaType('galleryListPage')
        .title('Stranica: Galerija')
        .child(
          S.document()
            .schemaType('galleryListPage')
            .documentId('galleryListPage'),
        ),
      S.listItem()
        .id('aboutPage')
        .schemaType('aboutPage')
        .title('Stranica: O Institutu')
        .child(
          S.document().schemaType('aboutPage').documentId('aboutPage'),
        ),
      S.listItem()
        .id('contactPage')
        .schemaType('contactPage')
        .title('Stranica: Kontakt')
        .child(
          S.document().schemaType('contactPage').documentId('contactPage'),
        ),
      S.divider(),
      // Reusable labels, categories, buttons
      S.documentTypeListItem('label').title('Oznake (Labels)'),
      S.documentTypeListItem('category').title('Kategorije'),
      S.documentTypeListItem('button').title('Dugmad'),
      S.divider(),
      // Document types
      S.documentTypeListItem('news').title('Novosti'),
      S.documentTypeListItem('center').title('Centri'),
      S.documentTypeListItem('project').title('Projekti'),
      S.documentTypeListItem('galleryAlbum').title('Galerija – albumi'),
    ]);
