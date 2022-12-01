import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

function VRWorld() {
  return (
    <div className="vr-world">
      <Container maxW={1800} pt={16} pb={60}>
        <VStack textAlign="center">
          <Heading size="lg" fontWeight="500">
            SOMNIUM SPACE IS A
          </Heading>
          <Heading size="2xl">VIRTUAL REALITY WORLD</Heading>
          <Heading size="lg" fontWeight="500">
            Open, Social & Persistent
          </Heading>
        </VStack>

        <Grid
          gridTemplateColumns={{ base: "1fr 1fr 1fr", md: "1fr 2fr 1fr" }}
          mt={20}
        >
          <GridItem textAlign="end" className="g-item">
            <Text mt={16}>
              We are creating an Open, Social, Virtual Reality world. A world
              with its own economy and its own currency. A VR world with its own
              Marketplace, Games, Social experiences and Virtual Land ownership.
            </Text>

            <Box className="left" display={{ base: "none", lg: "block" }}>
              <Image src="/assets/vrw2.png" maxW="250px" ml="auto" />
              <Text>Chat, Build, Trade in dedicated Somnium PC client</Text>
            </Box>
          </GridItem>

          <GridItem>
            <Image src="/assets/vrw1.png" mx="auto" />
            <Text fontSize="xl" textAlign="center" mt={8}>
              PC VR Mode <br /> Live Inside Somnium World
            </Text>
          </GridItem>

          <GridItem className="g-item" textAlign="start" display="block">
            <Text mt={16}>
              A VR world which is fully interconnected and seamless. Fully
              accessible from any device: PC & VR clients for user's Desktop or
              an immersive VR experience on mobile devices.
            </Text>

            <Box className="right" display={{ base: "none", lg: "block" }}>
              <Image src="/assets/vrw3.png" maxW="300px" ml="auto" />
              <Text textAlign="end">
                Oculus Quest <br /> Compatible
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
export default VRWorld;
