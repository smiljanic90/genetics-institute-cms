import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import {
  structureTool,
  type DefaultDocumentNodeContext,
  type StructureBuilder,
} from 'sanity/structure';
import { languageFilter } from '@sanity/language-filter';
import { schemaTypes } from './schemas';
import { structure } from './structure';

const SINGLETON_IDS = [
  'homePage',
  'siteSettings',
  'newsListPage',
  'centersListPage',
  'projectsListPage',
  'galleryListPage',
  'aboutPage',
  'contactPage',
] as const;

// If your homePage document was created with a UUID, add it here so the studio can resolve the type.
const LEGACY_HOMEPAGE_IDS = ['c79a967a-bf97-4f77-a40d-c8cd447862b7'];

export default defineConfig({
  name: 'default',
  title: 'Genetics Institute CMS',

  projectId: 'zqdw4srh',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
      defaultDocumentNode: (
        S: StructureBuilder,
        { documentId }: DefaultDocumentNodeContext,
      ) => {
        // Fix "Failed to resolve document, and no type provided" for singletons:
        // when opening by id only, provide the schema type so the pane can resolve.
        if (!documentId) return undefined;
        if (
          SINGLETON_IDS.includes(documentId as (typeof SINGLETON_IDS)[number])
        ) {
          return S.document()
            .schemaType(documentId as (typeof SINGLETON_IDS)[number])
            .documentId(documentId);
        }
        if (LEGACY_HOMEPAGE_IDS.includes(documentId)) {
          return S.document().schemaType('homePage').documentId(documentId);
        }
        return undefined;
      },
    }),
    visionTool(),
    languageFilter({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'sr', title: 'Srpski (latinica)' },
        { id: 'srCyr', title: 'Српски (ћирилица)' },
      ],
      defaultLanguages: ['sr'],
      documentTypes: [
        'news',
        'center',
        'project',
        'galleryAlbum',
        'label',
        'category',
        'button',
        'siteSettings',
        'homePage',
        'newsListPage',
        'centersListPage',
        'projectsListPage',
        'galleryListPage',
        'aboutPage',
        'contactPage',
      ],
      filterField: (enclosingType, member, selectedLanguageIds) =>
        !enclosingType.name.startsWith('locale') ||
        selectedLanguageIds.includes(member.name),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
