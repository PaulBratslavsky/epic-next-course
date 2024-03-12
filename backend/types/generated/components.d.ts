import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    image: Attribute.Media;
    link: Attribute.Component<'components.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.link': ComponentsLink;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
