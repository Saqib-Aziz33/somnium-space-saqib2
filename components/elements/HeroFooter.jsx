import { Box, Container, HStack, Image } from "@chakra-ui/react";

function HeroFooter() {
  return (
    <div className="hero-footer">
      <Container maxW={1800}>
        <HStack flexWrap="wrap" py={16} gap={2} justifyContent="center">
          <Image src="/assets/hf1.png" />
          <Box borderLeft="1px solid white" h={8} />
          <Image src="/assets/hf2.png" />
          <Box borderLeft="1px solid white" h={8} />
          <Image src="/assets/hf3.png" />
          <Box borderLeft="1px solid white" h={8} />
          <Image src="/assets/hf4.png" />
          <Box borderLeft="1px solid white" h={8} />
          <Image src="/assets/hf5.png" />
          <Box borderLeft="1px solid white" h={8} />
          <Image src="/assets/hf6.png" />
          <Box borderLeft="1px solid white" h={8} />
          <Image src="/assets/hf7.png" />
          <Box borderLeft="1px solid white" h={8} />
          <Image src="/assets/hf8.png" />
          <Box borderLeft="1px solid white" h={8} />
          <Image src="/assets/hf9.png" />
        </HStack>
      </Container>
    </div>
  );
}
export default HeroFooter;
