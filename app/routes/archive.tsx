import { Layout } from "../newspaper-design/layout";
import { SCREEN } from "../styles/theme";
import { css } from "../styles/css";
import { v } from "../styles/theme";
import data from "../linkedin-scrape.json";

export default function Archive() {
  return (
    <Layout>
      <main
        className={css({
          [`@media (${SCREEN.half} <= width < ${SCREEN.full})`]: {
            paddingInlineEnd: "1rem",
          },
          "@layer layout": {
            "& p": {
              fontSize: v("--fs-md"),
              fontFamily: "'Noto Serif', serif",
              fontStretch: "extra-condensed",
              textAlign: "justify",
            },
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "3rem 0",
          })}
        >
          <h1>ARCHIVE</h1>
          <p
            className={css({
              fontStyle: "italic",
              textAlign: "center",
            })}
          >
            This is a collection of my small posts on the internet, generally in
            reverse chronological order.
          </p>
        </div>
        <div
          className={css({
            columns: "4 auto",
            columnGap: "1.5lh",
            [`@media (width < ${SCREEN.full})`]: {
              columns: "2 auto",
            },
            [`@media (width < ${SCREEN.half})`]: {
              columns: "1 auto",
            },
          })}
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              className={css({
                breakInside: "avoid",
              })}
            >
              {item.content.split("\n").map((line) => (
                <p
                  key={line}
                  className={css({
                    "&:not(:first-child)": {
                      marginTop: "1lh",
                    },
                  })}
                >
                  {line}
                </p>
              ))}
              <span
                className={css({
                  display: "block",
                  textAlign: "center",
                  margin: "1lh 0",
                })}
              >
                ✶
              </span>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
