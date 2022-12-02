import { Box, Container, Heading, HStack, Image, Text } from "@chakra-ui/react";
import OwnershipTop from "./OwnershipTop";

function Ownership() {
  return (
    <div className="ownership">
      <Container maxW={1800} px={0}>
        <OwnershipTop />
      </Container>
    </div>
  );
}
export default Ownership;
