import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

function InGame() {
  return (
    <div className="in-game">
      <Container maxW={1200} pt={16} pb={32}>
        <VStack textAlign="center">
          <Heading size="lg" fontWeight="500">
            SOMNIUM SPACE
          </Heading>
          <Heading size="2xl">INGAME MECHANICS</Heading>
        </VStack>

        <Grid
          columnGap={8}
          rowGap={16}
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          mt={20}
        >
          <GridItem>
            <HStack justify={{ md: "flex-end" }} gap={4}>
              <Box textAlign={{ base: "unset", md: "end" }}>
                <Heading className="t-blue">Cross Platform</Heading>
                <Text>Available on all major VR headsets.</Text>
              </Box>
              <Image src="/assets/ig1.png" />
            </HStack>
          </GridItem>

          <GridItem>
            <HStack justify={{ md: "flex-end" }} gap={4}>
              <Image src="/assets/ig2.png" />
              <Box>
                <Heading className="t-blue">Persistent Social VR World</Heading>
                <Text>
                  Unlimited scalable world built by users within one instance.
                </Text>
              </Box>
            </HStack>
          </GridItem>

          <GridItem>
            <HStack justify={{ md: "flex-end" }} gap={4}>
              <Box textAlign={{ base: "unset", md: "end" }}>
                <Heading className="t-blue">Customizable PC Client</Heading>
                <Text>
                  Create and adjust your own layout setup for fast in-game
                  interaction.
                </Text>
              </Box>
              <Image src="/assets/ig3.png" />
            </HStack>
          </GridItem>

          <GridItem>
            <HStack justify={{ md: "flex-end" }} gap={4}>
              <Image src="/assets/ig4.png" />
              <Box>
                <Heading className="t-blue">Virtual Land Ownership</Heading>
                <Text>
                  Buy and customize your own land. Build anything you envision.
                </Text>
              </Box>
            </HStack>
          </GridItem>

          <GridItem>
            <HStack justify={{ md: "flex-end" }} gap={4}>
              <Box textAlign={{ base: "unset", md: "end" }}>
                <Heading className="t-blue">Cross Platform</Heading>
                <Text>Available on all major VR headsets.</Text>
              </Box>
              <Image src="/assets/ig1.png" />
            </HStack>
          </GridItem>

          <GridItem>
            <HStack justify={{ md: "flex-end" }} gap={4}>
              <Image src="/assets/ig2.png" />
              <Box>
                <Heading className="t-blue">Persistent Social VR World</Heading>
                <Text>
                  Unlimited scalable world built by users within one instance.
                </Text>
              </Box>
            </HStack>
          </GridItem>

          <GridItem>
            <HStack justify={{ md: "flex-end" }} gap={4}>
              <Box textAlign={{ base: "unset", md: "end" }}>
                <Heading className="t-blue">Customizable PC Client</Heading>
                <Text>
                  Create and adjust your own layout setup for fast in-game
                  interaction.
                </Text>
              </Box>
              <Image src="/assets/ig3.png" />
            </HStack>
          </GridItem>

          <GridItem>
            <HStack justify={{ md: "flex-end" }} gap={4}>
              <Image src="/assets/ig4.png" />
              <Box>
                <Heading className="t-blue">Virtual Land Ownership</Heading>
                <Text>
                  Buy and customize your own land. Build anything you envision.
                </Text>
              </Box>
            </HStack>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
export default InGame;
