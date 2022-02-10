import {
  ArcRotateCamera,
  Color3,
  Engine,
  HemisphericLight,
  MeshBuilder,
  Scene,
  SceneLoader,
  StandardMaterial,
  Texture,
  Vector3,
} from "@babylonjs/core";

import "@babylonjs/loaders/glTF";

const initialScene = async (engine: Engine, canvas: HTMLElement | null): Promise<Scene> => {
  const scene = new Scene(engine);

  const camera = new ArcRotateCamera("MainCamera", -Math.PI / 2, Math.PI / 2.5, 10, new Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // const box = MeshBuilder.CreateBox("box", {});
  // box.position.y = 0.5;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ground = MeshBuilder.CreateGround("ground", { width: 10, height: 10 });

  const groundMat = new StandardMaterial("groundMat", scene);
  groundMat.diffuseTexture = new Texture("https://www.babylonjs-playground.com/textures/floor.png", scene);
  // groundMat.diffuseColor = new Color3(0, 1, 0);
  ground.material = groundMat;

  // load the model
  const result = await SceneLoader.ImportMeshAsync("", "assets/models/girl/", "scene.gltf", scene);
  const girl = result.meshes[0];
  girl.scaling = new Vector3(10, 10, 10);

  // add fog
  scene.fogMode = Scene.FOGMODE_EXP;
  scene.fogDensity = 0.01;
  scene.fogStart = 20.0;
  scene.fogEnd = 60.0;
  scene.fogColor = new Color3(0.9, 0.9, 0.85);

  return scene;
};

export default initialScene;
