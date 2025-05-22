import { ScopedStyle } from "../styles/scoped-style";

interface Props extends React.ComponentProps<"div"> {
  span?: number;
  border?: boolean;
}

export function Track(props: Props) {
  const { span, border, children, ...rest } = props;

  return (
    <div {...rest}>
      <ScopedStyle>
        {{
          display: "grid",
          gridTemplateColumns: "subgrid",
          gridTemplateRows: "repeat(100, auto) 1fr",
          gridColumn: `span ${span ?? 1}`,
          borderRight: border ? "1px solid black" : "none",
        }}
      </ScopedStyle>
      {children}
    </div>
  );
}
