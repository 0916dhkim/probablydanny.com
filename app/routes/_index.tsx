import { Link, useLoaderData } from "react-router";
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

export default function Home() {
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
          "@layer layout": {
            "& a": {
              fontWeight: "bold",
            },
            "& p": {
              fontSize: v("--fs-sm"),
              fontFamily: "'Noto Serif', serif",
              fontStretch: "extra-condensed",
              textIndent: "3ch",
              textAlign: "justify",
              "& a": {
                wordBreak: "break-all",
              },
            },
            "& figcaption": {
              fontSize: v("--fs-sm"),
              fontStretch: "extra-condensed",
              fontWeight: "bold",
            },
          },
        })}
      >
        <Track full={{ span: 4, border: true }} half={{ span: 4 }}>
          <Slot>
            <Title>
              HI, I AM DANNY; FULL-STACK SOFTWARE ENGINEER AND TECH COMMUNITY
              ORGANIZER
            </Title>
            <img
              src="/portraits/home-1.jpg"
              className={css({
                width: "100%",
                filter: "grayscale(100%)",
                transition: "filter 0.2s ease-in-out",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              })}
            />
            <figcaption>
              Me at home, posing like I am thinking about something important.
              Hover to see colors.
            </figcaption>
          </Slot>
          <Track
            full={{ span: 1, border: true }}
            half={{ span: 1, border: true }}
          >
            <Slot>
              <NarrowTitle>WELCOME TO MY WEBSITE</NarrowTitle>
              <Paragraph className={css({ textIndent: 0 })}>
                Read more about me on <Link to="/about">page 3</Link>.
              </Paragraph>
              <Paragraph className={css({ textIndent: 0 })}>
                Find my small posts on <Link to="/archive">page 4</Link>.
              </Paragraph>
            </Slot>
          </Track>
          <Track
            full={{ span: 2, border: true }}
            half={{ span: 2, border: true }}
          >
            <Slot>
              <Title>PRESS CTRL + = IF YOU CAN'T READ SMALL TEXT</Title>
              <Paragraph>
                This website's design is inspired by historic newspapers. Old
                newspapers used small & narrow font faces to fit as much
                information as possible in a limited space. It gave them the
                distinct visual with dense text. To imitate the design closely,
                I had to sacrifice the readability of the text here.
              </Paragraph>
            </Slot>
          </Track>
          <Track full={{ span: 1 }} half={{ span: 1 }}>
            <Slot>
              <NarrowTitle>UPCOMING EVENTS</NarrowTitle>
              <Paragraph className={css({ textIndent: 0 })}>
                You can catch me at the following events:
              </Paragraph>
              <Paragraph className={css({ textIndent: 0 })}>
                Jul 19th: Hack the 6ix mentoring
              </Paragraph>
              <Paragraph className={css({ textIndent: 0 })}>
                Jul 26th: Mob Programming
              </Paragraph>
            </Slot>
          </Track>
        </Track>
        <Track
          full={{ span: 1, border: true }}
          half={{ span: 1, border: true }}
        >
          <Slot>
            <NarrowTitle>FOR POTENTIAL EMPLOYERS & CLIENTS</NarrowTitle>
            <Paragraph>
              I have {new Date().getFullYear() - 2020} years of experience in
              developing & delivering consumer web apps at scale. Although my
              expertise is in full stack web development with Typescript, I have
              also worked with other languages like Java and Python. I
              contribute to open source projects, so you can see examples of my
              work. Check out the highlights <Link to="/works">here</Link>.
            </Paragraph>
            <Paragraph>
              My passion is to help the builders level up. Any of my past
              coworkers can attest to my trait of sharing my learnings with
              everyone and bringing growth to the team. People talk about how AI
              is a multiplier, but I believe a right person can be a way better
              multiplier than AI.
            </Paragraph>
            <img
              src="/portraits/mob-3.jpg"
              className={css({
                width: "100%",
                filter: "grayscale(100%)",
                transition: "filter 0.2s ease-in-out",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              })}
            />
            <figcaption>
              Mob Programming session on a Saturday afternoon. Me in the middle.
            </figcaption>
            <Paragraph>
              To pursue my passion, I have been organizing events for the local
              developer community. Mob Programming started as an online event to
              tackle 2023 Hacktoberfest, but I realized coding together is the
              most efficient way to grow my skills. I opened the event up for
              all types of projects, and now it has grown into a weekly
              in-person gathering to help the builders unblock each other.
            </Paragraph>
            <Paragraph>
              I have also hosted many social events to help people in tech build
              new connections. This involved getting a sponsorship, handling the
              logistics, and managing the volunteering team.
            </Paragraph>
            <Paragraph>
              If we end up working together, I will bring the years of
              experience, growth mindset, and people skills to the table.
            </Paragraph>
            <Paragraph>
              Lastly, here is my{" "}
              <Link to="https://0916dhkim.github.io/resume/" target="_blank">
                resume
              </Link>{" "}
              if you are a resume kind of person.
            </Paragraph>
          </Slot>
        </Track>
        <Track
          full={{ span: 1, border: true }}
          half={{ span: 1, border: true }}
        >
          <Slot>
            <NarrowTitle>FOLLOW DANNY ON SOCIAL MEDIA</NarrowTitle>
            <img
              src="/portraits/sf-moma.jpg"
              className={css({
                width: "100%",
                filter: "grayscale(100%)",
                transition: "filter 0.2s ease-in-out",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              })}
            />
            <figcaption>
              Yayoi Kusama, Aspiring to Pumpkin's Love, the Love in My Heart,
              2023
            </figcaption>
            <Paragraph>
              I am active on{" "}
              <Link to="https://www.linkedin.com/in/0916dhkim/" target="_blank">
                LinkedIn
              </Link>
              ,{" "}
              <Link
                to="https://bsky.app/profile/probablydanny.com"
                target="_blank"
              >
                Bluesky
              </Link>
              , and{" "}
              <Link to="https://mastodon.social/@0916dhkim" target="_blank">
                Mastodon
              </Link>
              . Connect with me on any of these platforms.
            </Paragraph>
            <Paragraph>
              Also, I check my TorontoJS Slack more often than my email. I chat
              a lot there. Join on their{" "}
              <Link to="https://torontojs.com/" target="_blank">
                website
              </Link>
              .
            </Paragraph>
          </Slot>
          <Slot>
            <NarrowTitle>WHAT I SAY ON FEDIVERSE</NarrowTitle>
            <div dangerouslySetInnerHTML={{ __html: data }}></div>
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
              INTERESTING THINGS I FOUND ON THE INTERNET
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
