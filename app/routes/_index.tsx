import { useLoaderData } from "react-router";
import { NarrowTitle } from "../newspaper-design/narrow-title";
import { Paragraph } from "../newspaper-design/paragraph";
import { Slot } from "../newspaper-design/slot";
import { Title } from "../newspaper-design/title";
import { Track } from "../newspaper-design/track";
import { ScopedStyle } from "../styles/scoped-style";

export const loader = async () => {
  const response = await fetch(
    "https://mastodon.social/api/v1/accounts/110198440149305622/statuses?exclude_replies=true&exclude_reblogs=true",
  );
  const data = (await response.json()) as any[];
  const html = data.map((item) => item.content).join("");
  return html;
};

export default function Home() {
  const data = useLoaderData();

  return (
    <div
      style={{
        minWidth: "100dvw",
        minHeight: "100dvh",
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <ScopedStyle>
          {{
            backgroundImage: "url('/extra_clean_paper.webp')",
            backgroundRepeat: "repeat",
            position: "relative",
            width: "93rem",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            "@media (width < 95rem)": {
              width: "48rem",
              padding: "1rem 0 1rem 1rem",
            },
            "@media (width < 50rem)": {
              width: "24rem",
            },
          }}
        </ScopedStyle>
        <header
          style={{
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "93rem",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              paddingBottom: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                  border: "1px solid black",
                  padding: "0.5rem 1rem",
                }}
              >
                <p>"All the News</p>
                <p>That's Fit to Print"</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontFamily: "Textura Belgica", fontSize: "4rem" }}>
                Probably Danny
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <div>
                <ScopedStyle>
                  {{
                    textAlign: "justify",
                    maxWidth: "11rem",
                    textAlignLast: "justify",
                    ".title": {
                      fontWeight: "bold",
                    },
                    ".content": {
                      fontSize: "0.5rem",
                    },
                  }}
                </ScopedStyle>
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
        <nav>
          <ScopedStyle>
            {{
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontStyle: "italic",
              fontSize: "1.25rem",
              fontWeight: "bold",
              "@media (width < 95rem)": {
                paddingRight: "2rem",
              },
            }}
          </ScopedStyle>
          <span>Home</span>
          <span>Blog</span>
          <span>Contact</span>
        </nav>
        <main>
          <ScopedStyle>
            {{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              "@media (max-width: 95rem)": {
                gridTemplateColumns: "repeat(4, 1fr)",
              },
              "@media (width < 50rem)": {
                gridTemplateColumns: "repeat(1, 1fr)",
              },
            }}
          </ScopedStyle>
          <Track span={4} border>
            <Slot span={4}>
              <Title>
                TANSTACK START YOUR ENGINES; TANNER LINSLEY GOES HEAD ON WITH
                REACT ROUTER
              </Title>
              <img
                src="/military-trucks.jpg"
                alt="Military trucks"
                style={{
                  width: "100%",
                  filter: "grayscale(100%)",
                }}
              />
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                Vestibulum luctus lectus nisl, id porta sem gravida vitae.
                Aenean eget convallis mi. Curabitur sit amet massa ut lorem
                euismod iaculis.
              </p>
            </Slot>
          </Track>
          <Track border>
            <Slot>
              <ScopedStyle>
                {{
                  "& p": {
                    textIndent: "3ch",
                    textAlign: "justify",
                    a: {
                      wordBreak: "break-all",
                    },
                  },
                }}
              </ScopedStyle>
              <NarrowTitle>FOLLOW DANNY ON SOCIAL MEDIA</NarrowTitle>
              <div dangerouslySetInnerHTML={{ __html: data }}></div>
            </Slot>
          </Track>
          <Track border>
            <Slot>
              <NarrowTitle>
                SUSPENDISSE NON ACCUMSAN LIBERO DUIS IN RISUS AUGUE
              </NarrowTitle>
              <Paragraph>
                Vivamus lacinia, libero eleifend ultrices malesuada, orci erat
                consectetur metus, condimentum ultricies turpis odio vel augue.
                Etiam rutrum enim metus, at elementum arcu fringilla et. Ut eu
                mi sit amet augue semper feugiat. Aenean pharetra dui nisl, quis
                tristique velit egestas non. Pellentesque blandit porttitor
                efficitur. Pellentesque faucibus, sem scelerisque tempus tempor,
                elit dolor ultricies diam, eget varius sem lorem a massa.
                Suspendisse at diam a sem convallis tincidunt. Sed quis dolor ut
                felis ultrices lobortis sit amet id urna.
              </Paragraph>
              <Paragraph>
                Nunc rutrum non augue in pretium. Praesent at libero purus. In
                hac habitasse platea dictumst. Mauris nunc elit, molestie non
                neque in, tristique commodo metus. Sed placerat, justo dignissim
                dignissim tincidunt, lorem nulla sagittis lectus, nec egestas
                quam orci a ligula. Nulla pharetra cursus justo, vitae ultrices
                mauris pellentesque et. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
                Suspendisse non accumsan libero. Duis in risus augue.
              </Paragraph>
            </Slot>
          </Track>
          <Track span={2}>
            <Slot span={2}>
              <Title
                style={{
                  gridColumn: "span 2",
                  gridRow: "span 1",
                }}
              >
                HTMX 2.0 RELEASED; NO MORE IE SUPPORT
              </Title>
            </Slot>
            <Track border>
              <Slot>
                <NarrowTitle>YET ANOTHER REACT 19 DELAY ANNOUNCED</NarrowTitle>
                <Paragraph>
                  Morbi quis quam non mi ullamcorper placerat. Integer pharetra
                  leo dolor, pulvinar porta metus luctus non. Vivamus suscipit,
                  velit vel tincidunt porta, eros velit cursus felis, nec
                  efficitur nunc ipsum a elit. Phasellus lorem neque, lacinia at
                  vestibulum fermentum, pellentesque sed augue. Sed auctor
                  lobortis consectetur. Vestibulum rhoncus dictum posuere.
                  Phasellus metus augue, sodales quis lacus id, laoreet viverra
                  felis. Phasellus a odio vulputate, ullamcorper mi sed,
                  bibendum ante. Duis tristique eu augue eget tristique. In
                  egestas leo quis viverra fermentum. Cras a mi varius nulla
                  elementum venenatis. Suspendisse nec ex quis metus consectetur
                  porttitor non a urna. Orci varius natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Nunc a risus ut
                  ipsum semper scelerisque.
                </Paragraph>
              </Slot>
            </Track>
            <Track>
              <Slot>
                <img
                  src="/johnson.jpg"
                  alt="Johnson"
                  style={{
                    width: "100%",
                    filter: "grayscale(100%)",
                  }}
                />
                <p
                  style={{
                    textAlign: "justify",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  Donec nec nunc id ligula efficitur.
                </p>
                <NarrowTitle>
                  SUSPECT ON THE RUN FOR OBJECT NOT FOUND ERR
                </NarrowTitle>
                <Paragraph>
                  Suspendisse laoreet urna id ultricies cursus. Ut fringilla
                  libero augue, non rutrum elit pellentesque eu. Phasellus
                  tincidunt, est in cursus fermentum, tortor urna ultrices
                  nulla, ut pharetra massa dolor eget velit. In hac habitasse
                  platea dictumst. Curabitur convallis et quam sed tincidunt.
                  Nunc cursus, dui a aliquet imperdiet, mi dolor placerat magna,
                  in egestas odio tortor sed neque. Nulla eget quam eu tellus
                  molestie accumsan sit amet vel metus. Nam aliquet fringilla
                  porta.
                </Paragraph>
              </Slot>
            </Track>
          </Track>
        </main>
        <Shadow />
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <ScopedStyle>
        {{
          display: "none",
          "@media (width < 95rem)": {
            display: "block",
            boxShadow: "inset -40px 0 40px -16px rgba(0,0,0,1)",
          },
        }}
      </ScopedStyle>
    </div>
  );
}
