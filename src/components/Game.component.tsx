import { Engine } from "@babylonjs/core";
import { useEffect, useRef } from "react";

import initialScene from "./scenes/Initial.scene";

const Game = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // init engine
    const engine = new Engine(canvasRef.current, true);

    // load the scene
    const scene = initialScene(engine, canvasRef.current);

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
      scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }, []);

  return (
    <div className="pns-canvas-container">
      <canvas className="pns-canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default Game;
