import { createClient } from "contentful";

const PAGE_CONTENT_TYPE_ID = "page";
const IS_DEV = process.env.NODE_ENV === "development";

async function getEntries(content_type, queryParams) {
  const client = createClient({
    accessToken: IS_DEV
      ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN
      : process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    host: IS_DEV ? "preview.contentful.com" : "cdn.contentful.com",
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
  });

  const entries = await client.getEntries({
    content_type,
    ...queryParams,
    include: 10,
  });
  return entries;
}

export async function getPagePaths() {
  const { items } = await getEntries(PAGE_CONTENT_TYPE_ID);
  return items.map((page) => {
    const slug = page.fields.slug;
    return slug.startsWith("/") ? slug : `/${slug}`;
  });
}

export async function getPageFromSlug(slug, locale) {
  try {
    const { items } = await getEntries(PAGE_CONTENT_TYPE_ID, {
      "fields.slug": slug,
      locale,
    });
    let page = (items ?? [])[0];
    if (!page && slug !== "/" && slug.startsWith("/")) {
      const { items } = await getEntries(PAGE_CONTENT_TYPE_ID, {
        "fields.slug": slug.slice(1),
        locale,
      });
      page = (items ?? [])[0];
    }
    if (!page) return { error: true };
    return mapEntry(page);
  } catch (e) {
    return { error: true };
  }
}

function mapEntry(entry) {
  const id = entry.sys?.id;
  const type = entry.sys?.contentType?.sys?.id || entry.sys?.type;

  if (entry.sys?.type === "Asset") {
    return {
      id,
      type,
      src: `https:${entry.fields.file.url}`,
      alt: entry.fields.title,
    };
  }

  return {
    id,
    type,
    ...Object.fromEntries(
      Object.entries(entry.fields || {}).map(([key, value]) => [
        key,
        parseField(value),
      ])
    ),
  };
}

function parseField(value) {
  if (typeof value === "object" && value.sys) return mapEntry(value);
  if (Array.isArray(value)) return value.map(mapEntry);
  return value;
}
