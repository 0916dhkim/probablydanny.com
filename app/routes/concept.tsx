import { useLoaderData } from "react-router";
import { NarrowTitle } from "../newspaper-design/narrow-title";
import { Paragraph } from "../newspaper-design/paragraph";
import { Slot } from "../newspaper-design/slot";
import { Title } from "../newspaper-design/title";
import { Track } from "../newspaper-design/track";
import { SCREEN, v } from "../styles/theme";
import { css } from "../styles/css";
import { Layout } from "../newspaper-design/layout";

export const loader = async () => {
  const response = await fetch(
    "https://mastodon.social/api/v1/accounts/110198440149305622/statuses?exclude_replies=true&exclude_reblogs=true",
  );
  const data = (await response.json()) as any[];
  const html = data.map((item) => item.content).join("");
  return html;
};

export default function Concept() {
  const data = useLoaderData();

  return (
    <Layout>
      <main
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          [`@media (width < ${SCREEN.full})`]: {
            gridTemplateColumns: "repeat(4, 1fr)",
          },
          [`@media (width < ${SCREEN.half})`]: {
            gridTemplateColumns: "repeat(1, 1fr)",
          },
          "& p": {
            fontSize: v("--fs-sm"),
            fontFamily: "'Noto Serif', serif",
            fontStretch: "extra-condensed",
          },
        })}
      >
        <Track full={{ span: 4, border: true }} half={{ span: 4 }}>
          <Slot>
            <Title>
              TANSTACK START YOUR ENGINES; TANNER LINSLEY GOES HEAD ON WITH
              REACT ROUTER
            </Title>
            <img
              src="/military-trucks.jpg"
              alt="Military trucks"
              className={css({
                width: "100%",
                filter: "grayscale(100%)",
              })}
            />
            <p
              className={css({
                fontWeight: "bold",
              })}
            >
              Vestibulum luctus lectus nisl, id porta sem gravida vitae. Aenean
              eget convallis mi. Curabitur sit amet massa ut lorem euismod
              iaculis.
            </p>
          </Slot>
        </Track>
        <Track
          full={{ span: 1, border: true }}
          half={{ span: 1, border: true }}
        >
          <Slot
            className={css({
              "& p": {
                textIndent: "3ch",
                textAlign: "justify",
                "& a": {
                  wordBreak: "break-all",
                },
              },
            })}
          >
            <NarrowTitle>FOLLOW DANNY ON SOCIAL MEDIA</NarrowTitle>
            <div dangerouslySetInnerHTML={{ __html: data }}></div>
          </Slot>
        </Track>
        <Track
          full={{ span: 1, border: true }}
          half={{ span: 1, border: true }}
        >
          <Slot>
            <NarrowTitle>
              SUSPENDISSE NON ACCUMSAN LIBERO DUIS IN RISUS AUGUE
            </NarrowTitle>
            <Paragraph>
              Vivamus lacinia, libero eleifend ultrices malesuada, orci erat
              consectetur metus, condimentum ultricies turpis odio vel augue.
              Etiam rutrum enim metus, at elementum arcu fringilla et. Ut eu mi
              sit amet augue semper feugiat. Aenean pharetra dui nisl, quis
              tristique velit egestas non. Pellentesque blandit porttitor
              efficitur. Pellentesque faucibus, sem scelerisque tempus tempor,
              elit dolor ultricies diam, eget varius sem lorem a massa.
              Suspendisse at diam a sem convallis tincidunt. Sed quis dolor ut
              felis ultrices lobortis sit amet id urna.
            </Paragraph>
            <Paragraph>
              Nunc rutrum non augue in pretium. Praesent at libero purus. In hac
              habitasse platea dictumst. Mauris nunc elit, molestie non neque
              in, tristique commodo metus. Sed placerat, justo dignissim
              dignissim tincidunt, lorem nulla sagittis lectus, nec egestas quam
              orci a ligula. Nulla pharetra cursus justo, vitae ultrices mauris
              pellentesque et. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Suspendisse non
              accumsan libero. Duis in risus augue.
            </Paragraph>
          </Slot>
        </Track>
        <Track full={{ span: 2 }} half={{ span: 2 }}>
          <Slot>
            <Title
              className={css({
                gridColumn: "span 2",
                gridRow: "span 1",
              })}
            >
              HTMX 2.0 RELEASED; NO MORE IE SUPPORT
            </Title>
          </Slot>
          <Track
            full={{ span: 1, border: true }}
            half={{ span: 1, border: true }}
          >
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
                felis. Phasellus a odio vulputate, ullamcorper mi sed, bibendum
                ante. Duis tristique eu augue eget tristique. In egestas leo
                quis viverra fermentum. Cras a mi varius nulla elementum
                venenatis. Suspendisse nec ex quis metus consectetur porttitor
                non a urna. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Nunc a risus ut ipsum
                semper scelerisque.
              </Paragraph>
            </Slot>
          </Track>
          <Track full={{ span: 1 }} half={{ span: 1 }}>
            <Slot>
              <img
                src="/johnson.jpg"
                alt="Johnson"
                className={css({
                  width: "100%",
                  filter: "grayscale(100%)",
                })}
              />
              <p
                className={css({
                  textAlign: "justify",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                })}
              >
                Donec nec nunc id ligula efficitur.
              </p>
              <NarrowTitle>
                SUSPECT ON THE RUN FOR OBJECT NOT FOUND ERR
              </NarrowTitle>
              <Paragraph>
                Suspendisse laoreet urna id ultricies cursus. Ut fringilla
                libero augue, non rutrum elit pellentesque eu. Phasellus
                tincidunt, est in cursus fermentum, tortor urna ultrices nulla,
                ut pharetra massa dolor eget velit. In hac habitasse platea
                dictumst. Curabitur convallis et quam sed tincidunt. Nunc
                cursus, dui a aliquet imperdiet, mi dolor placerat magna, in
                egestas odio tortor sed neque. Nulla eget quam eu tellus
                molestie accumsan sit amet vel metus. Nam aliquet fringilla
                porta.
              </Paragraph>
            </Slot>
          </Track>
        </Track>
      </main>
    </Layout>
  );
}
