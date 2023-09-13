import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["generated/index.ts"],
  format: ["cjs", "esm"],
  minify: true,
  sourcemap: true,
  treeshake: true,
  splitting: true,
});
