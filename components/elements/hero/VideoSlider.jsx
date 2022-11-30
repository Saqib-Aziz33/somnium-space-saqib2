import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function VideoSlider({ videos }) {
  return (
    <div className="video-slider">
      <Carousel showArrows={false} showStatus={false}>
        {videos.map((video, i) => (
          <div key={i} className="item">
            <video src={video.url} autoPlay muted loop />
            <img className="img" src={video.img} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default VideoSlider;
