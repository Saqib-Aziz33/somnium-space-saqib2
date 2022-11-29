import {
  Flex,
  Link,
  HStack,
  Stack,
  Container,
  Box,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaDiscord, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <Container maxW={1400}>
        <Flex p={4} gap={8} justify="space-between" flexWrap="wrap">
          <Stack maxW={{ base: "unset", lg: "250px" }}>
            <Image src="/assets/flogo.png" height={150} width={150} />
            <Text fontSize="0.7rem" as="small">
              © 2022 by Somnium Space LTD. Somnium Space and Somnium Space Logo
              are trademarks of Somnium Space LTD. All other trademarks are the
              property of their respective owners. All rights reserved.
            </Text>
          </Stack>

          <HStack
            className="para-links"
            gap={8}
            display={{ base: "none", lg: "flex" }}
          >
            <Stack>
              <Link>Get Somnium</Link>
              <Link>Events</Link>
            </Stack>
            <Stack>
              <Link>Partners</Link>
              <Link>Support</Link>
            </Stack>
            <Stack>
              <Link>Terms of Service</Link>
              <Link>Privacy Policy</Link>
            </Stack>
            <Stack>
              <Link>FAQ</Link>
              <Link>Contact</Link>
            </Stack>
          </HStack>

          <Box className="icons" maxW={{ base: "unset", lg: "180px" }}>
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
          </Box>
        </Flex>
      </Container>
    </footer>
  );
}
export default Footer;
