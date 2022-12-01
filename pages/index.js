import AvailableNow from "../components/elements/AvailableNow";
import Community from "../components/elements/Community";
import Events from "../components/elements/Events";
import Hero from "../components/elements/hero/Hero";
import HeroFooter from "../components/elements/HeroFooter";
import InGame from "../components/elements/InGame";
import Partners from "../components/elements/Partners";
import VRWorld from "../components/elements/VRWorld";
import data from "../lib/data.json";

export function getStaticProps() {
  return {
    props: { videos: data.videos, stackImgs: data.stack_images },
  };
}

export default function Home({ videos, stackImgs }) {
  return (
    <>
      <Hero videos={videos} stackImgs={stackImgs} />
      <HeroFooter />
      <VRWorld />
      <InGame />
      <Partners />
      <Events />
      <Community />
    </>
  );
}
