import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

function Content() {
  return (
    <div className="content">
      <HStack px={8} direction="row">
        <Image src="/assets/hc.png" height={100} width={70} />
        <Stack>
          <Image src="/assets/hlogo.png" height={100} width={250} />
          <Box alignSelf="center" position="relative">
            <Image src="/assets/hbs.png" height={40} width={120} />
            <Text
              color="white"
              as="small"
              position="absolute"
              top="3px"
              left={8}
            >
              Download
            </Text>
          </Box>
        </Stack>
      </HStack>

      <HStack pt={8} gap={2}>
        <Image src="/assets/hlogo2.png" height={20} width={60} />
        <Box className="hero-bbg-text">
          <Text>Access CUBEs</Text>
        </Box>
      </HStack>

      <HStack pt={4} flexWrap="wrap" justify="center" gap={2}>
        <Box className="h-btn">
          <Image src="/assets/hb1.png" height={100} width={150} />
          <Image
            src="/assets/hbt1.png"
            className="t"
            height={100}
            width={100}
          />
        </Box>
        <Box className="h-btn">
          <Image src="/assets/hb2.png" height={100} width={150} />
          <Image
            src="/assets/hbt2.png"
            className="t"
            height={100}
            width={100}
          />
        </Box>
        <Box className="h-btn">
          <Image src="/assets/hb1.png" height={100} width={150} />
          <Image
            src="/assets/hbt1.png"
            className="t"
            height={100}
            width={100}
          />
        </Box>
      </HStack>
    </div>
  );
}
export default Content;
