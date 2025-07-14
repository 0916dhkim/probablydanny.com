import clsx from "clsx";
import { css } from "../styles/css";

interface Props extends React.ComponentProps<"div"> {}

export function Slot(props: Props) {
  const { children, className, ...rest } = props;

  return (
    <div
      className={clsx(
        className,
        css({
          gridColumn: "1 / -1",
          padding: "0 0.25rem",
          overflow: "hidden",
        }),
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
