import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Little Code Journey",
  DESCRIPTION: "Blog to documented my little code journey.",
  EMAIL: "habibmustofa.dev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Little Code Journey.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://x.com/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/yamustofa",
  },
  {
    NAME: "Website",
    HREF: "https://astro-micro-umber.vercel.app/",
  },
];
