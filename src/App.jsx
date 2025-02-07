import GiftCard from "./GiftCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <video className="birthday-video" controls autoPlay loop muted>
        <source src="path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <GiftCard />
    </div>
  );
}

export default App;
