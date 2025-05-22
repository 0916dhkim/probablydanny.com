import { ScopedStyle } from "../styles/scoped-style";
import { v } from "../styles/theme";

export function Paragraph(props: React.ComponentProps<"p">) {
  const { children, ...rest } = props;

  return (
    <p {...rest}>
      <ScopedStyle>
        {{
          textAlign: "justify",
          fontSize: v("--fs-md"),
        }}
      </ScopedStyle>
      <span>{children}</span>
    </p>
  );
}
