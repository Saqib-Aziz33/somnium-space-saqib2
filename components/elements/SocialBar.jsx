import { Box, Container, HStack, Image } from "@chakra-ui/react";
import { FaMedium, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

function SocialBar() {
  return (
    <div className="social-bar">
      <Container maxW={1200} py={6}>
        <HStack justify="center" gap={12} flexWrap="wrap">
          <FaTelegramPlane />
          <Box h={8} border="1px solid #fff" />
          <BsInstagram />
          <Box h={8} border="1px solid #fff" />
          <BsYoutube />
          <Box h={8} border="1px solid #fff" />
          <FaMedium />
          <Box h={8} border="1px solid #fff" />
          <BsLinkedin />
        </HStack>
      </Container>
    </div>
  );
}
export default SocialBar;
