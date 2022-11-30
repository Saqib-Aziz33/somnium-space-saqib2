import { Heading, Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";

function ImgStack({ stackImgs }) {
  return (
    <div className="img-stack">
      <VStack gap={4} display={{ base: "none", lg: "flex" }}>
        {stackImgs.map((item, i) => (
          <Stack key={i}>
            <Image src={item.img} height={100} width={150} />
            <Heading
              textAlign="center"
              textShadow="0 0 10px black"
              color="#fff"
              fontSize="md"
            >
              {item.title}
            </Heading>
          </Stack>
        ))}
      </VStack>
    </div>
  );
}
export default ImgStack;
