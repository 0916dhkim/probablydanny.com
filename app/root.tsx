import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import "./styles/reset.css";
import "./styles/fonts.css";
import { Theme } from "./styles/theme";
import { useEffect } from "react";
import { styleSheetManager } from "./styles/css";

export const loader = () => {
  return {
    serverStyles: styleSheetManager.toStyleElement(),
  };
};

export function Layout(props: { children: React.ReactNode }) {
  const { serverStyles } = useLoaderData();

  useEffect(() => {
    styleSheetManager.hydrate();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
        <Meta />
        <Links />
        <Theme />
        {serverStyles}
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
