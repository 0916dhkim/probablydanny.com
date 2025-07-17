import clsx from "clsx";
import { css } from "../styles/css";
import { SCREEN } from "../styles/theme";

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
          [`@media (width < ${SCREEN.half})`]: {
            borderBlockEnd: "1px solid black",
            paddingBlock: "0.5rem",
          },
        }),
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
