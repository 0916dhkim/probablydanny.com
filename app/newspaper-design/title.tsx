import { ScopedStyle } from "../styles/scoped-style";
import { v } from "../styles/theme";

export function Title(props: React.ComponentProps<"h2">) {
  const { children, ...rest } = props;

  return (
    <h2 {...rest}>
      <ScopedStyle>
        {{
          fontSize: v("--fs-2xl"),
          fontStyle: "italic",
          textAlign: "justify",
        }}
      </ScopedStyle>
      {children}
    </h2>
  );
}
