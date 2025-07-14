import clsx from "clsx";
import { v } from "../styles/theme";
import { css } from "../styles/css";

export function NarrowTitle(props: React.ComponentProps<"div">) {
  const { children, className, ...rest } = props;

  return (
    <div
      className={clsx(
        className,
        css({
          width: "100%",
          overflow: "visible",
          "& .original": {
            fontSize: v("--fs-2xl"),
            fontStyle: "italic",
            fontStretch: "extra-condensed",
            fontWeight: "400",
          },
        }),
      )}
      {...rest}
    >
      <h2 className="original">{children}</h2>
    </div>
  );
}
