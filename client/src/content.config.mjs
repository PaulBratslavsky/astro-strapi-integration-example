import { defineCollection } from "astro:content";
import { strapiLoader } from "strapi-community-astro-loader";

const strapiPostsLoader = defineCollection({
  loader: strapiLoader({
    contentType: "article",
    params: {
      populate: {
        cover: {
          fields: ["url", "alternativeText"],
        },
        blocks: {
          on: {
            "shared.quote": true,
          },
        },
      },
    },
  }),
});

export const collections = {
  strapiPostsLoader,
};
