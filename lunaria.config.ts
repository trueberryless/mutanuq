import { html } from "@lunariajs/core";
import { defineConfig } from "@lunariajs/core/config";

export default defineConfig({
  repository: {
    name: "trueberryless/mutanuq",
  },
  sourceLocale: {
    label: "Deutsch",
    lang: "de",
  },
  locales: [
    {
      label: "English",
      lang: "en",
    },
  ],
  files: [
    {
      include: ["src/content/docs/de/**/*.{md,mdx}"],
      pattern: "src/content/docs/@lang/@path",
      type: "universal",
    },
  ],
  tracking: {
    ignoredKeywords: [
      "lunaria-ignore",
      "typo",
      "en-only",
      "broken link",
      "i18nReady",
      "i18nIgnore",
    ],
  },
  dashboard: {
    title: "Mutanuq Translation Status",
    description:
      "Translation progress tracker for the Mutanuq site. See how much has been translated in your language and get involved!",
    site: "https://mutanuq.netlify.app/lunaria/",
    basesToHide: ["src/content/docs/"],
    customCss: ["./lunaria/styles.css"],
    favicon: {
      external: [
        {
          link: "https://mutanuq.netlify.app/favicon.svg",
          type: "image/svg+xml",
        },
      ],
    },
    ui: {
      "statusByLocale.heading": "Translation progress by locale",
      "statusByLocale.incompleteLocalizationLink": "incomplete translation",
      "statusByLocale.outdatedLocalizationLink": "outdated translation",
      "statusByLocale.completeLocalization":
        "This translation is complete, amazing job! 🎉",
      "statusByFile.heading": "Translation status by file",
    },
  },
  renderer: {
    slots: {
      afterTitle: () => html`
        <p>
          If you're interested in helping us translate
          <a href="https://mutanuq.netlify.app/">mutanuq.netlify.app</a>
          into one of the languages listed below, you've come to the right
          place! This auto-updating page always lists all the content that could
          use your help right now.
        </p>
        <p>
          Before starting a new translation, please read our
          <a
            href="https://github.com/trueberryless/mutanuq/blob/main/CONTRIBUTING.md#translating-mutanuqs-docs"
            >translation guide</a
          >
          to learn about our translation process and how you can get involved.
        </p>
      `,
    },
  },
});
