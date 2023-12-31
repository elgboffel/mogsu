import { defineConfig } from "@pandacss/dev";

import preset from "@project/css-preset";

export default defineConfig({
  jsxFramework: "qwik",

  presets: [preset],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./node_modules/@project/ui/src/**/*.tsx", "./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  emitPackage: true,

  // The output directory for your css system
  outdir: "@project/styled-system",
});
