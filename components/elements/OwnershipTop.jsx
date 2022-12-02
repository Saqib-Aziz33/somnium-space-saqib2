import { Box, Container, Heading, HStack, Image, Text } from "@chakra-ui/react";

function OwnershipTop() {
  return (
    <>
      <div className="top-section">
        {/* bg img */}
        <Image src="/assets/ss23.png" />
        {/* top blue img */}
        <div className="blue-wrapper">
          <Image className="top-blue" src="/assets/ss22.png" />
          <Box className="content" display={{ base: "none", lg: "block" }}>
            <Heading size="md">TRUE OWNERSHIP OF IN-GAME ASSETS ON</Heading>
            <Heading>ETHEREUM & SOLANA BLOCKCHAIN</Heading>
            <Text marginTop={8}>In Partnership with</Text>
            <HStack justify="center" mt={4} align="flex-start">
              <Image src="/assets/ssp1.png" />
              <Image pt={12} src="/assets/ssp2.png" />
              <Image pt={12} src="/assets/ssp3.png" />
              <Image src="/assets/ssp4.png" />
            </HStack>
          </Box>
        </div>
      </div>

      {/* middle-section */}
      <div className="left-lig">
        <Image className="lig4" src="/assets/lig4.png" />
        <Image className="shoes" src="/assets/shoes.png" />
      </div>

      <div className="mid-lig">
        <Image className="lig" src="/assets/lig1.png" />
        <Image className="per" src="/assets/per1.png" />
      </div>

      <div className="mid-lig-2">
        <Image className="lig" src="/assets/lig2.png" />
        <Image className="per" src="/assets/loc1.png" />
      </div>

      <div className="end-lig">
        <Image className="lig" src="/assets/lig3.png" />
        <Image className="per" src="/assets/wat1.png" />
      </div>
    </>
  );
}
export default OwnershipTop;
