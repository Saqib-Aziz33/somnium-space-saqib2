import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { FaDiscord, FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import SocialBar from "./SocialBar";

function Community() {
  return (
    <div className="community">
      <Container maxW={1000} pt={20} pb={40}>
        <Stack className="c-header t-shadow">
          <Stack>
            <Heading size="lg" fontWeight="500">
              KEEP IN TOUCH WITH
            </Heading>
            <Heading size="2xl">SOMNIUM COMMUNITY</Heading>
            <Heading size="lg" fontWeight="500">
              Share your thoughts with Us and the World
            </Heading>
          </Stack>

          <Text pt={16}>
            We are an open social world. Our community is the most important
            thing. We are active and happy to answer every question through our
            live channels or through our social channels.
          </Text>

          <div className="icon">
            <FaDiscord />
          </div>
        </Stack>

        {/* discord */}
        <Box mt={4}>
          <iframe
            src="https://e.widgetbot.io/channels/494994753146847233/496817347211034630"
            width="100%"
            height="400"
          />
        </Box>

        <Grid
          gridTemplateColumns={{ base: "fr", md: "1fr 1fr" }}
          mt={20}
          gap={8}
        >
          <GridItem>
            <div className="icon">
              <BsTwitter />
            </div>

            {/* twitter */}
            <div className="styles_timeLine__C0215">
              <div>
                <div
                  className="twitter-timeline twitter-timeline-rendered"
                  style={{
                    display: "flex",
                    width: "100%",
                    maxWidth: "100%",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                  <iframe
                    id="twitter-widget-0"
                    scrolling="no"
                    frameBorder={0}
                    allowTransparency="true"
                    allowFullScreen="true"
                    className
                    style={{
                      position: "static",
                      visibility: "visible",
                      width: "100%",
                      height: "600px",
                      display: "block",
                      flexGrow: 1,
                    }}
                    title="Twitter Timeline"
                    src="https://syndication.twitter.com/srv/timeline-profile/screen-name/somniumspace?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19ibHVlX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&lang=en&maxHeight=600px&origin=https%3A%2F%2Fsomniumspace.com%2F&sessionId=bc2b94291ca907e990d4d14067ab662e80a3eb71&showHeader=true&showReplies=false&theme=dark&transparent=false&widgetsVersion=a3525f077c700%3A1667415560940"
                  />
                </div>
              </div>
            </div>
          </GridItem>

          <GridItem>
            <div className="icon">
              <FaFacebookF />
            </div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=1000&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=696405131323293"
              width="100%"
              height="600px"
              style={{
                border: "none",
                overflow: "hidden",
                margin: "auto",
                display: "block",
              }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </GridItem>
        </Grid>
      </Container>

      <SocialBar />
    </div>
  );
}
export default Community;
