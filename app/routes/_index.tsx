import { Layout } from "../newspaper-design/layout";
import { css } from "../styles/css";
import { Link } from "react-router";

export default function Home() {
  return (
    <Layout>
      <h1>UNDER CONSTRUCTION</h1>
      <p
        className={css({
          fontStyle: "italic",
        })}
      >
        Check out my <Link to="/archive">Archive</Link> for now.
      </p>
    </Layout>
  );
}
