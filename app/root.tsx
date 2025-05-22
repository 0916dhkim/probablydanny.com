import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./styles/reset.css";
import "./styles/fonts.css";
import { Theme } from "./styles/theme";

export function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
        <Meta />
        <Links />
        <Theme />
      </head>
      <body>
        {props.children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
