import { Engine, Scene } from "@babylonjs/core";
import { useEffect, useRef } from "react";

import initialScene from "./scenes/Initial.scene";

const Game = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // init engine
    const engine = new Engine(canvasRef.current, true);

    // load the scene
    let scene: Scene;
    initialScene(engine, canvasRef.current).then((result) => {
      scene = result;

      // Register a render loop to repeatedly render the scene
      engine.runRenderLoop(() => {
        scene.render();
      });
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", () => {
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
