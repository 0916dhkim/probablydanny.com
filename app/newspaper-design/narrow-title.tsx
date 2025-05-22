import { ScopedStyle } from "../styles/scoped-style";
import { v } from "../styles/theme";

export function NarrowTitle(props: React.ComponentProps<"div">) {
  const { children, ...rest } = props;

  return (
    <div {...rest}>
      <ScopedStyle>
        {{
          width: "100%",
          overflow: "visible",
          "& .original": {
            fontSize: v("--fs-2xl"),
            fontStyle: "italic",
            textAlign: "justify",
            transform: "scaleX(0.5)",
            transformOrigin: "left",
            width: "200%",
          },
        }}
      </ScopedStyle>
      <h2 className="original">{children}</h2>
    </div>
  );
}
