import Hero from "../components/elements/hero/Hero";
import HeroFooter from "../components/elements/HeroFooter";
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
    </>
  );
}
