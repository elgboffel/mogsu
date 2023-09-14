import { component$, useSignal } from "@builder.io/qwik";
import { css } from "@project/styled-system/css";
export const Counter = component$(() => {
  const count = useSignal(0);

  return (
    <div class={css({ bg: "red" })}>
      <p>Count: {count.value}</p>
      <p>
        <button onClick$={() => count.value++}>test</button>
      </p>
    </div>
  );
});
