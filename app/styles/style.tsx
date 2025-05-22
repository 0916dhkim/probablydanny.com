import { StyleObject } from "./style-object";
import { styleToString } from "./style-to-string";

type Props = {
  children: StyleObject;
};

/**
 * It's like `<style>` but takes stylesheet object as a child.
 *
 * It is much easier to write `<Style>{{background: "red"}}</Style>`
 * than `<style>{"background: red;"}</style>`
 * especially when it is multi-line.
 */
export function Style(props: Props) {
  return <style>{styleToString(props.children)}</style>;
}
