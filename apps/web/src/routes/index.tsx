import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { Counter, Logo } from "@project/ui";
import { css } from "@project/styled-system/css";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <div class={css({ bg: "primary", height: 200, lg: { height: 600 } })}>
        <Logo />
      </div>

      <div
        class={css({
          padding: 10,
          height: "dvh",
          margin: 100,
          fontSize: 30,
        })}
      >
        <Counter />
        Front page
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
