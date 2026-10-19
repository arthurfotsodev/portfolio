// @ts-nocheck
import * as __fd_glob_12 from "../content/docs/bottle/index.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/bottle/changelog.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/bottle/3-mise-en-production/hebergement.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/bottle/2-developement/base-de-donnees.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/bottle/2-developement/auth.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/bottle/1-conception/besoin.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/bottle/1-conception/architetcure.mdx?collection=docs"
import { default as __fd_glob_5 } from "../content/docs/meta.json?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/bottle/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/bottle/3-mise-en-production/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/bottle/2-developement/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/bottle/1-conception/meta.json?collection=docs"
import * as __fd_glob_0 from "../content/blog/pourquoi-cobol-et-java.mdx?collection=blog"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();

export const blog = await create.doc("blog", "content/blog", {"pourquoi-cobol-et-java.mdx": __fd_glob_0, });

export const docs = await create.docs("docs", "content/docs", {"bottle/1-conception/meta.json": __fd_glob_1, "bottle/2-developement/meta.json": __fd_glob_2, "bottle/3-mise-en-production/meta.json": __fd_glob_3, "bottle/meta.json": __fd_glob_4, "meta.json": __fd_glob_5, }, {"bottle/1-conception/architetcure.mdx": __fd_glob_6, "bottle/1-conception/besoin.mdx": __fd_glob_7, "bottle/2-developement/auth.mdx": __fd_glob_8, "bottle/2-developement/base-de-donnees.mdx": __fd_glob_9, "bottle/3-mise-en-production/hebergement.mdx": __fd_glob_10, "bottle/changelog.mdx": __fd_glob_11, "bottle/index.mdx": __fd_glob_12, });