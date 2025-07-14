import { StyleObject } from "./style-object";
import { md5 } from "@noble/hashes/legacy";
import { styleToString } from "./style-to-string";

export class StyleSheetManager {
  #clientStyleSheet: CSSStyleSheet | null = null;
  #styleMap: Record<string, StyleObject> = {};
  #prefix: string;
  #serverStyleDataAttribute: string;

  constructor(options: { prefix: string; serverStyleDataAttribute: string }) {
    if (typeof window !== "undefined") {
      this.#clientStyleSheet = new CSSStyleSheet();
    }
    this.#prefix = options.prefix;
    this.#serverStyleDataAttribute = options.serverStyleDataAttribute;
  }

  toStyleElement() {
    return (
      <style {...{ [this.#serverStyleDataAttribute]: true }}>
        {Object.entries(this.#styleMap)
          .map(([hash, styles]) => `.${hash} {${styleToString(styles)}}`)
          .join("\n")}
      </style>
    );
  }

  hydrate() {
    if (this.#clientStyleSheet == null) {
      throw new Error("Hydration should only be called on the browser.");
    }

    const serverStyle = document.querySelector(
      `style[${this.#serverStyleDataAttribute}]`,
    );
    if (serverStyle && serverStyle.parentNode) {
      serverStyle.parentNode.removeChild(serverStyle);
    }

    document.adoptedStyleSheets.push(this.#clientStyleSheet);
  }

  setStyle(styles: StyleObject) {
    const hash = hashStyle(styles, this.#prefix);
    const existingStyle = this.#styleMap[hash];
    if (existingStyle != null) {
      return hash;
    }

    this.#styleMap[hash] = styles;

    if (this.#clientStyleSheet != null) {
      this.#clientStyleSheet.insertRule(`.${hash} {${styleToString(styles)}}`);
    }

    return hash;
  }
}

function hashStyle(styles: StyleObject, prefix: string) {
  const styleString = JSON.stringify(styles);
  return (
    prefix +
    Array.from(md5(styleString))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
      .substring(0, 8)
  );
}
