import { Box, Container, Heading, HStack, Link, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { FaDiscord, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube, BsWindows } from "react-icons/bs";

function Header() {
  return (
    <header className="header">
      <Container maxW={1400} py={2}>
        <Stack direction="row" gap={4}>
          <Box>
            <Image src="/assets/flogo.png" height={120} width={120} />
          </Box>

          <Stack
            className="page-links"
            py={2}
            display={{ base: "none", md: "flex" }}
          >
            <HStack gap={4}>
              <Link href="#blockchain">Blockchain</Link>
              <Link href="#mechanics">Mechanics</Link>
              <Link href="#partners">Partners</Link>
              <Link href="#events">Events</Link>
            </HStack>
            <HStack gap={2}>
              <Link href="#">Log In</Link>
              <Box
                borderLeft="1px solid transparent"
                borderColor="blue.300"
                h="full"
              />
              <Link href="#">Sign Up</Link>
              <HStack ml={4} className="icons">
                <Link className="icon">
                  <FaDiscord />
                </Link>
                <Link className="icon">
                  <FaFacebookF />
                </Link>
                <Link className="icon">
                  <BsTwitter />
                </Link>
                <Link className="icon">
                  <BsInstagram />
                </Link>
                <Link className="icon">
                  <FaTelegramPlane />
                </Link>
                <Link className="icon">
                  <BsYoutube />
                </Link>
              </HStack>
            </HStack>
          </Stack>

          <HStack
            gap={2}
            alignItems="flex-start"
            display={{ base: "none", lg: "flex" }}
          >
            <button className="btn blue">Explore Somnium Map</button>
            <button className="btn green">Marketplace</button>
          </HStack>
        </Stack>

        <Box
          className="download-buttons-wrapper"
          display={{ base: "none", sm: "block" }}
        >
          <Box className="trianlge" />
          <button>
            Download VR Client <BsWindows />
          </button>
          <button>
            Join SOMNIUM <span className="badge">WEB</span>{" "}
          </button>
        </Box>
      </Container>
    </header>
  );
}
export default Header;
