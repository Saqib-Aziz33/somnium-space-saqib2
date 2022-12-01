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

function Events() {
  return (
    <div className="events">
      <Container maxW={1200} pt={20} pb={40}>
        <Stack textAlign="center" className="t-shadow">
          <Heading size="md" fontWeight="500">
            STAY SHARP WITH UPCOMING EVENTS
          </Heading>
          <Heading size="xl">SOMNIUM EVENTS CALENDAR</Heading>
          <Heading size="md" fontWeight="500">
            Have Fun and Share with your Friends our Weekly and Special Events
          </Heading>
        </Stack>

        <Grid
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          mt={20}
          gap={8}
        >
          <GridItem>
            <Heading textAlign="center" size="md">
              Featured Events
            </Heading>
            <Divider w="50%" mx="auto" borderWidth={2} mt={2} mb={16} />

            <Image src="/assets/ep1.png" mx="auto" maxW="200px" opacity="0.5" />
            <Image src="/assets/ep2.jpg" mt={16} mx="auto" maxW="300px" />
          </GridItem>

          <GridItem>
            <Heading textAlign="center" size="md">
              Event Calender
            </Heading>
            <Divider w="50%" mx="auto" borderWidth={2} mt={2} mb={16} />
            <iframe
              src="https://calendar.google.com/calendar/embed?src=somnium.space.events%40gmail.com"
              width="100%"
              height="500"
              scrolling="no"
              style={{ border: "0px", borderRadius: "5px" }}
            />
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
export default Events;
