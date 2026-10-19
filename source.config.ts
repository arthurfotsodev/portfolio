import { defineDocs, defineCollections, defineConfig } from "fumadocs-mdx/config";
import { pageSchema, metaSchema } from "fumadocs-core/source/schema";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema.extend({
      status: z.enum(["live", "wip", "archived"]).optional(),
      version: z.string().optional(),
      started: z.coerce.date().optional(),
      stack: z.array(z.string()).optional(),
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(99),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: pageSchema.extend({
    date: z.coerce.date(),
    category: z.enum(["backend", "devops", "carrière"]),
    tags: z.array(z.string()).default([]),
  }),
});

export default defineConfig();