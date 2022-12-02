import { Box, Heading, HStack, Image, Stack } from "@chakra-ui/react";
import CircleOutline from "./CircleOutline";

function OwnershipBottom() {
  return (
    <>
      <Image className="top-lig" src="/assets/ssb2.svg" />
      <div className="ownership-bottom">
        <div className="imgs">
          <Image className="wires" src="/assets/ssb3.png" />
          <Image className="mountain" src="/assets/ssb4.png" />
          <Image className="lines1" src="/assets/ssb5.png" />
          <Image className="lines1" src="/assets/lines2.png" />
          <Image className="loc" src="/assets/loc.svg" />

          <Box className="content">
            <div className="text">
              <Heading size="sm" mt={12}>
                “By tokenizing Somnium In-Game assets and Land Parcels, we are
                forever decoupling Somnium Space as a company from owning and
                operating database of parcels and all in- game items by giving
                this power to our users”
              </Heading>

              <Stack mt={12} gap={3}>
                <HStack gap={2}>
                  <CircleOutline />
                  <Heading size="sm">A Blockchain VR Metaverse</Heading>
                </HStack>
                <HStack gap={2}>
                  <CircleOutline />
                  <Heading size="sm">Security of Ownership</Heading>
                </HStack>
                <HStack gap={2}>
                  <CircleOutline />
                  <Heading size="sm">Authenticity of Origin</Heading>
                </HStack>
                <HStack gap={2}>
                  <CircleOutline />
                  <Heading size="sm">
                    Tradable via decentralized Marketplaces
                  </Heading>
                </HStack>
                <HStack gap={2}>
                  <CircleOutline />
                  <Heading size="sm">
                    Built with proven & secure standards
                  </Heading>
                </HStack>
                <HStack gap={2}>
                  <CircleOutline />
                  <Heading size="sm">
                    Variety of creative tools: SDK, Builder, etc.
                  </Heading>
                </HStack>
                <HStack gap={2}>
                  <CircleOutline />
                  <Heading size="sm">Cross-platform VR Client</Heading>
                </HStack>
              </Stack>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
export default OwnershipBottom;
