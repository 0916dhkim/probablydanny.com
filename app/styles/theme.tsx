import { Style } from "./style";

const CUSTOM_PROPERTIES = {
  "--fs-xs": "0.5rem",
  "--fs-sm": "0.75rem",
  "--fs-md": "1rem",
  "--fs-lg": "1.25rem",
  "--fs-xl": "1.5rem",
  "--fs-2xl": "1.75rem",
  "--fs-display": "4rem",
} as const;

export function v(key: keyof typeof CUSTOM_PROPERTIES) {
  return `var(${key})`;
}

export function Theme() {
  return (
    <Style>
      {{
        ":root": CUSTOM_PROPERTIES,
      }}
    </Style>
  );
}
