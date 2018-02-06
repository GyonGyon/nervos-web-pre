import { IScreenBlock } from './components/ScreenBlock/type'

export const HomeSlide = {
  title: '',
  path: '/',
  key: 'homepage',
  module: 'Homepage',
  navable: true,
  exact: true,
}
export const TechSlide = {
  title: 'Technology',
  path: '/tech',
  key: 'technology',
  module: 'Technology',
  navable: true,
  exact: true,
}
export const ContactUsSlide = {
  title: 'Contact Us',
  path: '/contact-us',
  key: 'contactUs',
  module: 'ContactUs',
  navable: true,
  exact: true,
}

export const FeaturesSlide = {
  title: 'Features',
  path: '/features',
  key: 'features',
  module: 'Features',
  navable: true,
  exact: true,
}

export const TeamMembersSlide = {
  title: 'Team Members',
  path: '/team-members',
  key: 'teamMembers',
  module: 'TeamMembers',
  navable: true,
  exact: true,
}
export const AdvisorsSlide = {
  title: 'Advisors',
  path: '/advisors',
  key: 'advisors',
  module: 'Advisors',
  navable: true,
  exact: true,
}
export const SupportersSlide = {
  title: 'Supporters',
  path: '/supporters',
  key: 'supporters',
  module: 'Supporters',
  navable: true,
  exact: true,
}
export const screenBlocks: IScreenBlock[] = [
  HomeSlide,
  TechSlide,
  ContactUsSlide,
  FeaturesSlide,
  TeamMembersSlide,
  AdvisorsSlide,
  SupportersSlide,
]

export interface IPage extends IScreenBlock {}

export interface RouterProps {
  history: any
  match: any
  location: any
  routes: IPage[]
}

const routes: IPage[] = [
  { path: '/', key: 'Header', module: 'Header' },
  ...screenBlocks,
  { path: '/faq', key: 'FAQ', module: 'FAQ' },
]

export default routes
