import { Container } from "@chakra-ui/react";
import Content from "./Content";
import ImgStack from "./ImgStack";
import VideoSlider from "./VideoSlider";

function Hero({ videos, stackImgs }) {
  return (
    <Container className="hero" maxW={1800} px={0}>
      <VideoSlider videos={videos} />
      <ImgStack stackImgs={stackImgs} />
      <Content />
    </Container>
  );
}
export default Hero;
