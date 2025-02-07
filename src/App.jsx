import Spline from "@splinetool/react-spline";
import GiftCard from "./GiftCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="spline-container">
        <Spline scene="https://prod.spline.design/WxriJxRzOXSxPXgW/scene.splinecode" />
      </div>
        <iframe
          className="birthday-video"
          width="560"
          height="250"
          src="https://www.youtube.com/embed/oAQmRO42UHc?si=qFDR161uSBmlpLiU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      <GiftCard />
    </div>
  );
}

export default App;
