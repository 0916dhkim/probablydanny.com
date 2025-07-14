const CUSTOM_PROPERTIES = {
  "--fs-xs": "0.5rem",
  "--fs-sm": "0.75rem",
  "--fs-md": "1rem",
  "--fs-lg": "1.25rem",
  "--fs-xl": "1.5rem",
  "--fs-2xl": "1.75rem",
  "--fs-3xl": "2rem",
  "--fs-4xl": "3rem",
  "--fs-display": "4rem",
} as const;

export const SCREEN = {
  half: "50rem",
  full: "100rem",
} as const;

export function v(key: keyof typeof CUSTOM_PROPERTIES) {
  return `var(${key})`;
}

export function Theme() {
  return (
    <style>
      {":root{" +
        Object.entries(CUSTOM_PROPERTIES)
          .map(([key, val]) => `${key}: ${val}`)
          .join(";\n") +
        "}"}
    </style>
  );
}
