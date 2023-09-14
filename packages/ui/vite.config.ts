import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [qwikVite(), tsconfigPaths()],
    build: {
      target: "es2020",
      lib: {
        entry: "./src/index.tsx",
        formats: ["es", "cjs"],
        fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
      },
      rollupOptions: {
        // externalize deps that shouldn't be bundled into the library
        external: [/^node:.*/, "@project/styled-system"],
      },
    },
  };
});
