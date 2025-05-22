import { ScopedStyle } from "../styles/scoped-style";

interface Props extends React.ComponentProps<"div"> {
  span?: number;
}

export function Slot(props: Props) {
  const { span, children, ...rest } = props;

  return (
    <div {...rest}>
      <ScopedStyle>
        {{
          gridColumn: `span ${span ?? 1}`,
          padding: "0 0.25rem",
          overflow: "hidden",
        }}
      </ScopedStyle>
      {children}
    </div>
  );
}
