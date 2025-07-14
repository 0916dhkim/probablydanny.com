import { StyleObject } from "./style-object";
import { StyleSheetManager } from "./style-sheet-manager";

export const styleSheetManager = new StyleSheetManager({
  prefix: "inline-",
  serverStyleDataAttribute: "data-css-in-js-server",
});

export const css = (styles: StyleObject) => {
  return styleSheetManager.setStyle(styles);
};
