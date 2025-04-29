## Why Use Astro 5?

Astro.js is a powerful web framework that offers several compelling reasons to use it for your web development projects. Here are the key benefits and reasons to choose Astro:

- **Performance and Speed**
- **Flexibility and Developer Experience**
- **Content Focus**
- **SEO Benefits**
- **Server-Side Rendering and Static Site Generation**

By choosing Astro, you get a modern, performant, and flexible framework that prioritizes content delivery and user experience, making it an excellent choice for a wide range of web development projects.

## Why Use Strapi?

Strapi is the leading open-source headless CMS offering [features](https://strapi.io/features), like customizable APIs, role-based permissions, multilingual support, etc. It simplifies content management and integrates effortlessly with modern [frontend frameworks](https://strapi.io/blog/comprehensive-review-of-top-javascript-frontend-frameworks).

Explore the [Strapi documentation](https://docs.strapi.io/) for more details.

## Strapi 5 Highlights

The out-of-the-box Strapi features allow you to get up and running in no time:

1. **Single types**: Create one-off pages that have a unique content structure.
2. **Draft and Publish**: Reduce the risk of publishing errors and streamline collaboration.
3. **100% TypeScript Support**: Enjoy type safety & easy maintainability
4. **Customizable API**: With Strapi, you can just hop in your code editor and edit the code to fit your API to your needs.
5. **Integrations**: Strapi supports integrations with Cloudinary, SendGrid, Algolia, and others.
6. **Editor interface**: The editor allows you to pull in dynamic blocks of content.
7. **Authentication**: Secure and authorize access to your API with JWT or providers.
8. **RBAC**: Help maximize operational efficiency, reduce dev team support work, and safeguard against unauthorized access or configuration modifications.
9. **i18n**: Manage content in multiple languages. Easily query the different locales through the API.
10. **Plugins**: Customize and extend Strapi using plugins.

Learn more about [Strapi 5 feature](https://strapi.io/five).

<cta title="See Strapi in action with an interactive demo" text="Explore Strapi in an instant, hands-on demo set up just for you." buttontext="Access Live Demo!" buttonlink="https://strapi.io/demo"></cta>

## Setup Strapi 5 Headless CMS

We are going to start by setting up our [Strapi 5](https://strapi.io/five) project with the following command:

> 🖐️ Note: make sure that you have created a new directory for your project.

You can find the full documentation for Strapi 5 [here](https://docs.strapi.io/dev-docs/intro).

### Install Strapi

```bash
npx create-strapi-app@latest server
```

You will be asked to choose if you would like to use Strapi Cloud we will choose to skip for now.

```bash
 Strapi   v5.6.0 🚀 Let's create your new project


We can't find any auth credentials in your Strapi config.

Create a free account on Strapi Cloud and benefit from:

- ✦ Blazing-fast ✦ deployment for your projects
- ✦ Exclusive ✦ access to resources to make your project successful
- An ✦ Awesome ✦ community and full enjoyment of Strapi's ecosystem

Start your 14-day free trial now!


? Please log in or sign up.
  Login/Sign up
❯ Skip
```

After that, you will be asked how you would like to set up your project. We will choose the following options:

```bash
? Do you want to use the default database (sqlite) ? Yes
? Start with an example structure & data? Yes <-- make sure you say yes
? Start with Typescript? Yes
? Install dependencies with npm? Yes
? Initialize a git repository? Yes
```

Once everything is set up and all the dependencies are installed, you can start your Strapi server with the following command:

```bash
cd server
npm run develop
```

You will be greeted with the **Admin Create Account** screen.

![003-strapi-5.png](https://delicate-dawn-ac25646e6d.media.strapiapp.com/003_strapi_5_0ec1eaaa6a.png)

Go ahead and create your first Strapi user. All of this is local so you can use whatever you want.

Once you have created your user, you will be redirected to the **Strapi Dashboard** screen.

![004-strapi-5.png](https://delicate-dawn-ac25646e6d.media.strapiapp.com/004_strapi_5_87bc6d8f39.png)

### Publish Article Entries

Since we created our app with the example data, you should be able to navigate to your **Article** collection and see the data that was created for us.

![005-strapi-5.png](https://delicate-dawn-ac25646e6d.media.strapiapp.com/005_strapi_5_dc3a4a7540.png)

Now, let's make sure that all of the data is **published**. If not, you can select all items via the checkbox and then click the **Publish** button.

![Strapi Articles Published](https://delicate-dawn-ac25646e6d.media.strapiapp.com/006_strapi_5_9c6055ac59.png)

### Enable API Access

Once all your articles are published, we will expose our Strapi API for the **Articles Collection**. This can be done in **_Settings -> Users & Permissions plugin -> Roles -> Public -> Article_**.

You should have `find` and `findOne` selected. If not, go ahead and select them.

![007-strapi-5.png](https://delicate-dawn-ac25646e6d.media.strapiapp.com/007_strapi_5_edd775db5f.png)

### Test API

Now, if we make a `GET` request to `http://localhost:1337/api/articles`, we should see the following data for our articles.

![008-strapi-5.png](https://delicate-dawn-ac25646e6d.media.strapiapp.com/008_strapi_5_66883c2963.png)

> 🖐️ Note: The article covers (images) are not returned. This is because the REST API by default does not populate any relations, media fields, components, or dynamic zones.. Learn more about [REST API: Population & Field Selection](https://docs.strapi.io/dev-docs/api/rest/populate-select).

So, let's get the article covers by using the `populate=*` parameter: `http://localhost:1337/api/articles?populate=*`

![vuejs strapi integration - api request.png](https://delicate-dawn-ac25646e6d.media.strapiapp.com/vuejs_strapi_integration_api_request_c748d16c83.png)

Nice, now that we have our Strapi 5 server setup, we can start to setup our Astro 5 client.

## Getting Started with Astro 5.

I will walk you through the steps to setup a new Astro 5 project. But here is the link to the [Astro 5 Docs](https://docs.astro.build/en/getting-started) that I used for reference.

### Astro 5 Installation and Initial Setup

Let's get started with **Astro 5**.

Make sure that you are in the `root` directory of your project and run the following command to install Astro 5.

```bash
npm create astro@latest
```

You will be asked `Where should we create your new project?`. I will install it in the `client` directory. Once you have entered your project name, press enter.

```bash
paul@Mac astro % npm create astro@latest

 astro   Launch sequence initiated.

   dir   Where should we create your new project?
      ./client
```

We will go with the `basic` setup.

```bash
  tmpl   How would you like to start your new project?
         ● A basic, minimal starter (recommended)
         ○ Use blog template
         ○ Use docs (Starlight) template
```

Click yes for the remaining questions.

```bash
 ██████  Project initializing...
         ■ Template copied
         ▶ Dependencies installing with npm...

      ✔  Project initialized!
         ■ Template copied
         ■ Dependencies installed

 next   Liftoff confirmed. Explore your project!

 Enter your project directory using cd ./client-temp
 Run npm run dev to start the dev server. CTRL+C to stop.
 Add frameworks like react or tailwind using astro add.

 Stuck? Join us at https://astro.build/chat

╭──🎩─╮  Houston:
│ ◠ ◡ ◠  Good luck out there, astronaut! 🚀
╰─────╯
```

Once everything is installed, you can start your Astro 5 project with the following command:

```bash
  cd client
  npm run dev
```

Your project should be running at `http://localhost:4321`.

![002-astro-5.png](https://delicate-dawn-ac25646e6d.media.strapiapp.com/002_astro_5_17e6a0c87b.png)

Nice, now that we have our Astro 5 project setup, we can start to integrate it with our Strapi 5 server.

### Building out our Astro 5 Project

Astro 5 uses a file based routing system. This means that you can create a new file in the `src/pages` folder and it will be automatically added to your project.

You can read more about it [here](https://docs.astro.build/en/reference/routing-reference).

But for today, we will be using the `index.astro` file in the `src/pages` folder.

Let's update the `index.astro` file with the following code:

```astro
---
// Import necessary components and utilities
import Layout from '../layouts/Layout.astro';
import { getCollection } from 'astro:content';

// Fetch all posts from Strapi using Astro's content collection
const strapiPosts = await getCollection("strapiPostsLoader");
// Get Strapi URL from environment variables with fallback to localhost
const BASE_URL = await import.meta.env.STRAPI_BASE_URL || "http://localhost:1337";


console.dir(strapiPosts, { depth: null });

// Helper function to handle media URLs from Strapi
function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  // Return as-is if it's a data URL (base64)
  if (url.startsWith("data:")) return url;
  // Return as-is if it's an absolute URL
  if (url.startsWith("http") || url.startsWith("//")) return url;
  // Prepend BASE_URL for relative URLs
  return `${BASE_URL}${url}`;
}
---

<Layout>
  <div class="container mx-auto p-4">
  <!-- Main heading -->
	<h1 class="text-3xl font-bold mb-8">Hello Strapi 5 and Astro 5 World</h1>
	<!-- Responsive grid layout using Tailwind CSS -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{/* Map through posts and create article cards */}
		{strapiPosts.map((post) => (
			<article class="bg-white rounded-lg shadow-lg overflow-hidden">
				{/* Post cover image */}
				<img
					src={getStrapiMedia(post.data.cover.url)}
					alt={post.data.cover.alternativeText}
					class="w-full h-48 object-cover"
				/>
				{/* Post content container */}
				<div class="p-4">
					<h2 class="text-xl font-bold mb-2">{post.data.title}</h2>
					<p class="text-gray-600 mb-4">{post.data.description}</p>
					<div class="text-sm text-gray-500">
						Published: {new Date(post.data.publishedAt).toLocaleDateString()}
					</div>
				</div>
			</article>
		))}
	</div>
</div>
</Layout>
```

Brief Description:
This is an Astro page component that displays a grid of blog posts fetched from a Strapi CMS.

The page features:

- Integration with Strapi CMS using Astro's content collections
- A responsive grid layout using Tailwind CSS (1 column on mobile, 2 on tablet, 4 on desktop)
- Article cards with cover images, titles, descriptions, and publication dates
- A utility function (getStrapiMedia) to handle different types of media URLs from Strapi
- Proper handling of environment variables for the Strapi backend URL

### Adding Tailwind CSS to our Astro 5 Project

Notice that we are using Tailwind CSS in our project. Astro 5 uses the `@astrojs/tailwind` package.

You can read more about it [here](https://docs.astro.build/en/guides/integrations-guide/tailwind/).

Let's add it to our project by running the following command:

```bash
  npx astro add tailwind
```

Astro will ask you a few questions, and then it will add the necessary files to your project.

After all the files are added, let's import our global styles in the `src/layouts/Layout.astro` file.

```astro
import "../styles/global.css";
```

Complete the file with the following code:

```astro
---
import "../styles/global.css";
---

<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>Astro Basics</title>
	</head>
	<body>
		<slot />
	</body>
</html>

<style>
	html,
	body {
		margin: 0;
		width: 100%;
		height: 100%;
	}
</style>

```

Nice, now that we have Tailwind CSS added to our project, can start working on the most important part of our project, which is how to fetch our data from Strapi 5 via the Astro Content Loader API.

### Fetching Data from Strapi 5 with Astro Content Loader API

In our `index.astro` file, you may have noticed that we are using the `getCollection` function to fetch our data from Strapi 5.

```astro
const strapiPosts = await getCollection("strapiPostsLoader");
```

This is a custom function that Astro provides that allows you to fetch data via their Content Loader API.

Luckily we have a [Community Built Astro Strapi Loader](https://github.com/PaulBratslavsky/strapi-community-astro-loader) that allows us to fetch data from Strapi 5 with ease.


But if you wan to build your own custom loader, you can also read more about it [here](https://docs.astro.build/en/reference/content-loader-reference).

To make this work, we need to create a new file in the `src` folder called `content.config.mjs`.

This is where we will configure our Astro Strapi Loader.

Let's update the file with the following code:

```astro
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
      },
    },
  }),
});

export const collections = {
  strapiPostsLoader,
};

```

Brief Description:
This configuration file sets up a content collection in Astro that integrates with a Strapi CMS backend.

Now restart your Astro 5 project and you should be able to see the data from Strapi 5 in your project.

![003-astro-5.png](https://delicate-dawn-ac25646e6d.media.strapiapp.com/003_astro_5_356f4da376.png)

Awesome, great job!

## Github Project Repo

You can find the complete code for this project in the following [Github repo](https://github.com/PaulBratslavsky/astro-strapi-integration-example).

Also, I have created this awesome [Astro 5 & Strapi 5 Starter](https://github.com/PaulBratslavsky/astro-strapi-starter) that you can checkout for a completed basic project.

## Strapi Open Office Hours

If you have any questions about Strapi 5 or just would like to stop by and say hi, you can join us at **Strapi's Discord Open Office Hours** Monday through Friday at 12:30 pm - 1:30 pm CST: [Strapi Discord Open Office Hours](https://discord.com/invite/strapi)

For more details, visit the [Strapi documentation](https://strapi.io/documentation) and [Astro.js documentation](https://docs.astro.build/en/getting-started).
