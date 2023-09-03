import { component$ } from "@builder.io/qwik";
import { css } from "@styled-system/css";

export const Logo = component$(() => {
  return (
    <div class={css({ bg: "primary" })}>
      <a href="https://qwik.builder.io/">
        <img
          alt="Qwik Logo"
          width={400}
          height={147}
          src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F667ab6c2283d4c4d878fb9083aacc10f"
        />
      </a>
    </div>
  );
});
