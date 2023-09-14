import { definePreset } from "@pandacss/dev";
import pandaPreset from "@pandacss/preset-panda";

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export default definePreset({
  presets: [pandaPreset],
  theme: {
    breakpoints,
    tokens: {
      colors: {
        primary: { value: "#000" },
      },
    },
  },
});
