import { Box } from "@chakra-ui/react";
import Content from "./Content";
import ImgStack from "./ImgStack";
import VideoSlider from "./VideoSlider";

function Hero({ videos, stackImgs }) {
  return (
    <Box className="hero">
      <VideoSlider videos={videos} />
      <ImgStack stackImgs={stackImgs} />
      <Content />
    </Box>
  );
}
export default Hero;
