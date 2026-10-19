// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blog: create.doc("blog", {"pourquoi-cobol-et-java.mdx": () => import("../content/blog/pourquoi-cobol-et-java.mdx?collection=blog"), }),
  docs: create.doc("docs", {"bottle/1-conception/architetcure.mdx": () => import("../content/docs/bottle/1-conception/architetcure.mdx?collection=docs"), "bottle/1-conception/besoin.mdx": () => import("../content/docs/bottle/1-conception/besoin.mdx?collection=docs"), "bottle/2-developement/auth.mdx": () => import("../content/docs/bottle/2-developement/auth.mdx?collection=docs"), "bottle/2-developement/base-de-donnees.mdx": () => import("../content/docs/bottle/2-developement/base-de-donnees.mdx?collection=docs"), "bottle/3-mise-en-production/hebergement.mdx": () => import("../content/docs/bottle/3-mise-en-production/hebergement.mdx?collection=docs"), "bottle/changelog.mdx": () => import("../content/docs/bottle/changelog.mdx?collection=docs"), "bottle/index.mdx": () => import("../content/docs/bottle/index.mdx?collection=docs"), }),
};
export default browserCollections;