import { useState } from "react";
import Spline from "@splinetool/react-spline";
import GiftCard from "./GiftCard";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  const handleSplineLoad = () => {
    setLoading(false);
  };

  return (
    <div className="app">
      {loading && (
        <div className="loading-overlay">
          <div className="loader"></div>
          <div className="loading-text">Loading...</div>
        </div>
      )}
      <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/WxriJxRzOXSxPXgW/scene.splinecode"
          onLoad={handleSplineLoad}
        />
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
