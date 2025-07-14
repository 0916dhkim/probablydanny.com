import { Link } from "react-router";
import { css } from "../styles/css";
import { SCREEN, v } from "../styles/theme";

type Props = {
  children: React.ReactNode;
};

export function Layout(props: Props) {
  return (
    <div
      className={css({
        minWidth: "100dvw",
        minHeight: "100dvh",
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <div
        className={css({
          backgroundImage: "url('/extra_clean_paper.webp')",
          backgroundRepeat: "repeat",
          position: "relative",
          width: SCREEN.full,
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          [`@media (width < ${SCREEN.full})`]: {
            width: SCREEN.half,
            padding: "1rem 0 1rem 1rem",
          },
          [`@media (width < ${SCREEN.half})`]: {
            width: "auto",
            padding: "4rem",
          },
        })}
      >
        <header
          className={css({
            overflow: "hidden",
          })}
        >
          <div
            className={css({
              width: SCREEN.full,
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              paddingBottom: "1rem",
              [`@media (width < ${SCREEN.half})`]: {
                width: "auto",
                gridTemplateColumns: "1fr",
              },
            })}
          >
            <div
              className={css({
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                [`@media (width < ${SCREEN.half})`]: {
                  display: "none",
                },
              })}
            >
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                  border: "1px solid black",
                  padding: "0.5rem 1rem",
                })}
              >
                <p>"All the News</p>
                <p>That's Fit to Print"</p>
              </div>
            </div>
            <div
              className={css({
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              <h1
                className={css({
                  fontFamily: "Textura Belgica",
                  fontSize: v("--fs-display"),
                  [`@media (width < ${SCREEN.half})`]: {
                    fontSize: v("--fs-4xl"),
                  },
                })}
              >
                Probably Danny
              </h1>
            </div>
            <div
              className={css({
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                [`@media (width < ${SCREEN.half})`]: {
                  display: "none",
                },
              })}
            >
              <div
                className={css({
                  textAlign: "justify",
                  maxWidth: "12rem",
                  textAlignLast: "justify",
                  "& .title": {
                    fontWeight: "bold",
                  },
                  "& .content": {
                    fontSize: "0.5rem",
                  },
                })}
              >
                <p className="title">TYPESCRIPT EDITION</p>
                <p className="content">
                  Weather: Rain, mild temperatures today, tonight. Showers
                  tomorrow. Temp. range: today 42-35. Thurs. 36-32. Full U.S.
                  report on Page 20.
                </p>
              </div>
            </div>
          </div>
        </header>
        <nav
          className={css({
            borderBlock: "1px solid black",
            paddingBlock: "0.25rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontStyle: "italic",
            fontSize: v("--fs-md"),
            fontWeight: "bold",
            [`@media (${SCREEN.half} <= width < ${SCREEN.full})`]: {
              paddingInlineEnd: "2rem",
            },
          })}
        >
          <Link to="/">Home</Link>
          <Link to="/archive">Archive</Link>
          <Link to="/concept">Design Concept</Link>
        </nav>
        {props.children}
        <Shadow />
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div
      className={css({
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "none",
        pointerEvents: "none",
        [`@media (width < ${SCREEN.full})`]: {
          display: "block",
          boxShadow: "inset -40px 0 40px -16px rgba(0,0,0,1)",
        },
        [`@media (width < ${SCREEN.half})`]: {
          display: "none",
        },
      })}
    />
  );
}
