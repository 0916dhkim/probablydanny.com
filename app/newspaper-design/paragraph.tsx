import clsx from "clsx";
import { v } from "../styles/theme";
import { css } from "../styles/css";

export function Paragraph(props: React.ComponentProps<"p">) {
  const { children, className, ...rest } = props;

  return (
    <p
      className={clsx(
        className,
        css({
          textAlign: "justify",
          fontSize: v("--fs-sm"),
        }),
      )}
      {...rest}
    >
      {children}
    </p>
  );
}
