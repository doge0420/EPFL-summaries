/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        light: {
          css: {
            "--tw-prose-body":
              "var(--color-gray-200)" /* Light gray for body text */,
            "--tw-prose-headings":
              "var(--color-gray-100)" /* Very light gray for headings */,
            "--tw-prose-lead":
              "var(--color-gray-300)" /* Lighter gray for lead text */,
            "--tw-prose-links":
              "var(--color-blue-400)" /* Lighter blue for links */,
            "--tw-prose-bold":
              "var(--color-gray-100)" /* Very light gray for bold text */,
            "--tw-prose-counters":
              "var(--color-gray-400)" /* Light gray for counters */,
            "--tw-prose-bullets":
              "var(--color-gray-500)" /* Medium gray for bullet points */,
            "--tw-prose-hr":
              "var(--color-gray-600)" /* Dark gray for horizontal rules */,
            "--tw-prose-quotes":
              "var(--color-gray-100)" /* Very light gray for quote text */,
            "--tw-prose-quote-borders":
              "var(--color-gray-600)" /* Darker gray for quote borders */,
            "--tw-prose-captions":
              "var(--color-gray-300)" /* Lighter gray for captions */,
            "--tw-prose-code":
              "var(--color-gray-100)" /* Very light gray for inline code */,
            "--tw-prose-pre-code":
              "var(--color-gray-200)" /* Light gray for code in pre block */,
            "--tw-prose-pre-bg":
              "var(--color-gray-700)" /* Dark gray background for pre blocks */,
            "--tw-prose-th-borders":
              "var(--color-gray-600)" /* Darker gray for table header borders */,
            "--tw-prose-td-borders":
              "var(--color-gray-500)" /* Medium gray for table cell borders */,
            "--tw-prose-invert-body":
              "var(--color-gray-700)" /* Medium gray for inverted body text */,
            "--tw-prose-invert-headings":
              "var(--color-white)" /* White for inverted headings */,
            "--tw-prose-invert-lead":
              "var(--color-gray-500)" /* Medium gray for inverted lead text */,
            "--tw-prose-invert-links":
              "var(--color-white)" /* White for inverted links */,
            "--tw-prose-invert-bold":
              "var(--color-white)" /* White for inverted bold text */,
            "--tw-prose-invert-counters":
              "var(--color-gray-600)" /* Darker gray for inverted counters */,
            "--tw-prose-invert-bullets":
              "var(--color-gray-700)" /* Darker gray for inverted bullets */,
            "--tw-prose-invert-hr":
              "var(--color-gray-500)" /* Medium gray for inverted horizontal rules */,
            "--tw-prose-invert-quotes":
              "var(--color-gray-200)" /* Light gray for inverted quotes */,
            "--tw-prose-invert-quote-borders":
              "var(--color-gray-500)" /* Medium gray for inverted quote borders */,
            "--tw-prose-invert-captions":
              "var(--color-gray-600)" /* Darker gray for inverted captions */,
            "--tw-prose-invert-code":
              "var(--color-white)" /* White for inverted code */,
            "--tw-prose-invert-pre-code":
              "var(--color-gray-400)" /* Light gray for inverted code in pre blocks */,
            "--tw-prose-invert-pre-bg":
              "rgb(0 0 0 / 50%)" /* Semi-transparent dark background for inverted pre blocks */,
            "--tw-prose-invert-th-borders":
              "var(--color-gray-700)" /* Darker gray for inverted table header borders */,
            "--tw-prose-invert-td-borders":
              "var(--color-gray-800)" /* Darker gray for inverted table cell borders */,
          },
        },
      }),
    },
  },
};
