import { component$ } from "@builder.io/qwik";
import type { DocumentHead, StaticGenerateHandler } from "@builder.io/qwik-city";
import { getSdk } from "@project/cms-sdk";
import { GraphQLClient } from "graphql-request";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const cms = getSdk(
  new GraphQLClient("https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cllkrywks070o01ui6qqpb9gk/master")
);

export const useCmsContent = routeLoader$(async ({ params, error, cacheControl }) => {
  const data = await cms.GetPage({ slug: params.page });
  console.log({ data });
  // If there's no content, throw a 404.
  // You can use your own 404 component here
  if (!data) {
    throw error(404, "Page not found");
  }

  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 15,
  });

  return data;
});

export default component$(() => {
  const location = useLocation();
  const content = useCmsContent();
  console.log(location.params);
  return <>{content.value.post?.title}</>;
});

export const head: DocumentHead = ({ resolveValue }) => {
  const content = resolveValue(useCmsContent);
  return {
    title: content?.post?.title,
  };
};

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const slugs = await cms.GetAllRoutes();
  const params = slugs.posts.map(({ slug }) => {
    return { page: slug as string };
  });

  return {
    params,
  };
};
