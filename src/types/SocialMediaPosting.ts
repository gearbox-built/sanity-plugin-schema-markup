import { Logo, Image, PotentialAction } from './Common';

export type SocialMediaPosting = {
  type: string;
  id?: string;
  potentialAction?: PotentialAction;
  url?: string;
  publisher?: {
    name?: string;
    logo?: Logo;
    type?: string;
    id?: string;
  };
  headline?: string;
  datePublished?: string;
  image?: Image;
  author?: {
    name?: string;
    url?: string;
    type?: string;
    id?: string;
  };
  description?: string;
  dateModified?: string;
  sharedContent?: Array<{
    type?: string;
    headline?: string;
    url?: string;
    author?: {
      type?: string;
      name?: string;
    };
  }>;
};
