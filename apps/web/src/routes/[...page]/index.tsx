import { component$ } from "@builder.io/qwik";
import type { DocumentHead, StaticGenerateHandler } from "@builder.io/qwik-city";
import { getSdk } from "@project/builder-sdk";
import { GraphQLClient } from "graphql-request";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const cms = getSdk(
  new GraphQLClient("https://cdn.builder.io/api/v1/graphql/ffb2ed83b4ea4cbaa059204ca3693d3a", {
    fetch,
  })
);

export const useCmsContent = routeLoader$(async ({ params, error, cacheControl }) => {
  const data = await cms.GetPage({ urlPath: `/${params.page}` });
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
    maxAge: 20,
  });

  return data;
});

export default component$(() => {
  const location = useLocation();
  const content = useCmsContent();
  console.log(location.params);
  return <>{content.value.onePage?.name}</>;
});

export const head: DocumentHead = ({ resolveValue }) => {
  const content = resolveValue(useCmsContent);
  return {
    title: content?.onePage?.name ?? "",
  };
};

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const slugs = await cms.GetAllRoutes();
  console.log(slugs);
  const params = slugs?.page?.map((page) => {
    return { page: page?.data?.url as string };
  });

  return {
    params,
  };
};
