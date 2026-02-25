import { news } from './documents/news';
import { center } from './documents/center';
import { project } from './documents/project';
import { galleryAlbum } from './documents/galleryAlbum';
import { label } from './documents/label';
import { category } from './documents/category';
import { button } from './documents/button';
import { siteSettings } from './singletons/siteSettings';
import { homePage } from './singletons/homePage';
import { newsListPage } from './singletons/newsListPage';
import { centersListPage } from './singletons/centersListPage';
import { projectsListPage } from './singletons/projectsListPage';
import { galleryListPage } from './singletons/galleryListPage';
import { aboutPage } from './singletons/aboutPage';
import { contactPage } from './singletons/contactPage';
import { blockContent } from './objects/blockContent';
import { figure } from './objects/figure';
import { seo } from './objects/seo';
import { galleryImage } from './objects/galleryImage';
import { localeString } from './objects/localeString';
import { localeText } from './objects/localeText';
import { localeBlockContent } from './objects/localeBlockContent';
import { partner } from './objects/partner';
import { homeSection } from './objects/homeSection';
import { navItem } from './objects/navItem';
import { footerLink } from './objects/footerLink';
import { footerSection } from './objects/footerSection';
import { aboutSection } from './objects/aboutSection';
import { aboutOverviewCard } from './objects/aboutOverviewCard';
import { aboutNavItem } from './objects/aboutNavItem';
import { regulationsSection } from './objects/regulationsSection';
import { regulationsDocument } from './objects/regulationsDocument';
import { teamSection } from './objects/teamSection';
import { teamMember } from './objects/teamMember';

export const schemaTypes = [
  // Documents
  news,
  center,
  project,
  galleryAlbum,
  label,
  category,
  button,

  // Singletons
  siteSettings,
  homePage,
  newsListPage,
  centersListPage,
  projectsListPage,
  galleryListPage,
  aboutPage,
  contactPage,

  // Objects
  blockContent,
  figure,
  seo,
  galleryImage,
  localeString,
  localeText,
  localeBlockContent,
  partner,
  homeSection,
  navItem,
  footerLink,
  footerSection,
  aboutSection,
  aboutOverviewCard,
  aboutNavItem,
  regulationsSection,
  regulationsDocument,
  teamSection,
  teamMember,
];
