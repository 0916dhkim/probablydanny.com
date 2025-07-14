import clsx from "clsx";
import { css } from "../styles/css";
import { SCREEN } from "../styles/theme";

interface Props extends React.ComponentProps<"div"> {
  full: {
    span: number;
    border?: boolean;
  };
  half: {
    span: number;
    border?: boolean;
  };
}

export function Track(props: Props) {
  const { full, half, children, className, ...rest } = props;

  return (
    <div
      className={clsx(
        className,
        css({
          display: "grid",
          gridTemplateColumns: "subgrid",
          gridTemplateRows: "repeat(100, auto) 1fr",
          gridColumn: `span ${full.span}`,
          borderRight: full.border ? "1px solid black" : "none",
          [`@media (width < ${SCREEN.full})`]: {
            gridColumn: `span ${half.span}`,
            borderRight: half.border ? "1px solid black" : "none",
          },
          [`@media (width < ${SCREEN.half})`]: {
            gridColumn: "span 1",
            borderRight: "none",
            // marginBottom: "2rem",
            paddingBottom: "0.5rem",
            borderBottom: "1px solid black",
          },
        }),
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
