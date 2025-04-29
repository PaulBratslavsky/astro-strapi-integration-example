# astro-strapi-loader-integration-example

This is an example of how to integrate Strapi with Astro using the community loader found [here](https://github.com/PaulBratslavsky/strapi-community-astro-loader).

## Setup

1. Clone the repository

```bash
git clone https://github.com/PaulBratslavsky/strapi-community-astro-loader.git my-astro-strapi-project
```

2. Change into the project directory

```bash
cd my-astro-strapi-project
```

3. Install the dependencies

```bash
yarn setup
```

4. Seed the database

```bash
yarn seed
```

5. Run the development server

```bash
yarn dev
```

6. Open the browser and navigate to `http://localhost:1337` and create your first Strapi Admin User.

7. Open the browser and navigate to `http://localhost:4321`


## Loader Setup 

`client/src/content.config.mjs`

``` ts
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

```