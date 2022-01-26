import { ArcRotateCamera, Engine, HemisphericLight, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";

const initialScene = (engine: Engine, canvas: HTMLElement | null): Scene => {
  const scene = new Scene(engine);

  const camera = new ArcRotateCamera("MainCamera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  const box = MeshBuilder.CreateBox("box", {});
  box.position.y = 0.5;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 });

  return scene;
};

export default initialScene;
