import { Container, Heading, HStack, Image } from "@chakra-ui/react";

function AvailableNow() {
  return (
    <div className="available-now">
      <Container maxW={1800} py={6}>
        <HStack gap={16} justify="center" flexWrap="wrap">
          <Heading size="lg">Available Now</Heading>
          <HStack gap={4} flexWrap="wrap">
            <Image src="/assets/aw.png" />
            <Image src="/assets/aw2.png" />
            <Image src="/assets/aw3.png" />
            <Image src="/assets/aw4.png" />
          </HStack>
          <Heading size="lg">Ready to Play</Heading>
        </HStack>
      </Container>
    </div>
  );
}
export default AvailableNow;
