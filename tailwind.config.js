module.exports = {
  purge: {
    content: [
      "./index.html",
      "./src/**/*.vue",
      "./src/**/*.js",
      // etc.
    ],
  },
  theme: {
    extend: {},
    // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
    typography: {
      default: {
        css: {
          color: "rgba(var(--color-on-background), 1)",
          "h1, h2, h3": {
            color: "rgba(var(--color-on-background), 1)",
          },
        },
      },
    },
    // https://github.com/tailwindlabs/tailwindcss-custom-forms/blob/master/docs/pages/index.mdx#customizing-the-default-styles
    customForms: {
      default: {
        "input, textarea, multiselect": {
          color: "rgba(var(--color-on-foreground), 1)",
          backgroundColor: "rgba(var(--color-foreground), 1)",
          borderColor: "rgba(var(--color-surface), 1)",
        },
        input: {},
        textarea: {},
        multiselect: {},
        select: {},
        checkbox: {},
        radio: {},
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-theming")({
      // preset docs: https://github.com/innocenzi/tailwindcss-theming/blob/master/docs/presets.md
      // nord src: https://github.com/innocenzi/tailwindcss-theming/blob/master/src/presets/nord.ts
      preset: "nord",
      variants: {
        dark: true,
        light: true,
      },
    }),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
