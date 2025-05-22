import { useId } from "react";
import { StyleObject } from "./style-object";
import { styleToString } from "./style-to-string";
import { HAS_SCOPE_SUPPORT } from "./browser-support";
import { ClientOnly } from "remix-utils/client-only";

type Props = {
  children: StyleObject;
};

/**
 * Helper component to render scoped `<style>` in body.
 *
 * If the browser supports the `@scope` rule, render the stylesheet inside a `@scope` block.
 * Otherwise, render the stylesheet using the (potentially slow) parent selector.
 */
export function ScopedStyle(props: Props) {
  const id = useId();
  const stylesheet = styleToString(props.children);

  return (
    <ClientOnly fallback={<style id={id}>{`@scope {${stylesheet}}`}</style>}>
      {() => (
        <style id={id}>
          {
            HAS_SCOPE_SUPPORT
              ? `@scope {${stylesheet}}` // Use @scope if supported.
              : `:has(> #${CSS.escape(id)}) {${stylesheet}}` // Fallback to more expensive parent selector.
          }
        </style>
      )}
    </ClientOnly>
  );
}
