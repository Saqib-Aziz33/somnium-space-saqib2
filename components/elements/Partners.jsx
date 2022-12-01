import {
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

function Partners() {
  return (
    <div className="partners">
      <Container maxW={1200} pt={16} pb={40}>
        <VStack textAlign="center">
          <Heading size="lg" fontWeight="500">
            SOMNIUM SPACE
          </Heading>
          <Heading size="2xl" className="t-shadow">
            PARTNERS
          </Heading>
        </VStack>

        <Stack gap={8} mt={20}>
          <HStack gap={[4, null, 8]}>
            <Image src="/assets/ps1.png" maxW={32} />
            <Stack>
              <Heading className="t-blue">Somnium Space & Admix</Heading>
              <Text>
                We work together to bring advertising revenues for our players.
                It's the best and fastest way to monetize your property,
                measure, analyze how your audience interacts in VR.
              </Text>
            </Stack>
          </HStack>

          <HStack gap={[4, null, 8]}>
            <Image src="/assets/ps2.png" maxW={32} />
            <Stack>
              <Heading className="t-blue">High Fidelity & JanusVR</Heading>
              <Text>
                We believe that the future of the VR space is in connectivity
                and interoperability between open social worlds. That’s why we
                partnered with HighFidelity and JanusVR on two groundbreaking
                projects:
              </Text>
            </Stack>
          </HStack>

          <HStack gap={[4, null, 8]}>
            <Image src="/assets/ps3.png" maxW={32} />
            <Stack>
              <Heading className="t-blue">Sony</Heading>
              <Text>
                In 2019 we partnered with Sony and their amazing 3D model
                creation technology that allows our users to create full
                embodiment avatars of themselves in minutes alongside any 3D
                models for Somnium Store. Sony’s VR store in Somnium Space was
                among the world’s first.
              </Text>
            </Stack>
          </HStack>

          <HStack gap={[4, null, 8]}>
            <Image src="/assets/ps4.png" maxW={32} />
            <Stack>
              <Heading className="t-blue">Blockchain Gaming Alliance</Heading>
              <Text>
                We became a member of Blockchain Game Alliance to contribute
                towards building a true and decentralized Metaverse.
              </Text>
            </Stack>
          </HStack>
        </Stack>
      </Container>
    </div>
  );
}
export default Partners;
