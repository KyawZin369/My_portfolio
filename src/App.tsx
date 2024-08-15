import Heading from "./components/Heading";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={2.5}>
          <Heading />
        </ParallaxLayer>
      </Parallax>
      <div style={{ height: "200vh", backgroundColor: "green" }}>
        <p style={{ padding: "2rem", textAlign: "center" }}>
          Scroll down to see the parallax effect in action.
        </p>
      </div>
    </div>
  );
}

export default App;
