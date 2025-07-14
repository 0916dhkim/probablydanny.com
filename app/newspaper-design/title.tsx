import clsx from "clsx";
import { v } from "../styles/theme";
import { css } from "../styles/css";

export function Title(props: React.ComponentProps<"h2">) {
  const { children, className, ...rest } = props;

  return (
    <h2
      className={clsx(
        className,
        css({
          fontSize: v("--fs-2xl"),
          // fontStyle: "italic",
          fontStretch: "extra-expanded",
        }),
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}
