/**
 * Augment Sanity document schema options to allow @sanity/language-filter's
 * options.languageFilter (used at runtime; not in Sanity core types).
 */
declare module '@sanity/types' {
  interface DocumentOptions {
    languageFilter?: boolean;
  }
}
