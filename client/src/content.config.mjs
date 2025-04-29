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
            "shared.rich-text": true,
            "shared.media": {
              populate: {
                file: {
                  fields: ["url", "alternativeText"],
                }
              }
            },
            "shared.slider": {
              populate: {
                files: {
                  fields: ["url", "alternativeText"],
                }
              }
            }
          },
        },
      },
    },
  }),
});

export const collections = {
  strapiPostsLoader,
};
