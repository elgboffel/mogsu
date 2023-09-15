import { component$, useSignal } from "@builder.io/qwik";
import { css } from "../../styled-system/css";

export const Counter = component$(() => {
  const count = useSignal(0);

  return (
    <div class={css({ bg: "primary" })}>
      <p>Count: {count.value}</p>
      <p>
        <button onClick$={() => count.value++}>Plus</button>
      </p>
    </div>
  );
});
