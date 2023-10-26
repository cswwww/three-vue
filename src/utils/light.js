import * as THREE from 'three';

// 环境光
function addAmbientLight(scene) {
  const light = new THREE.AmbientLight( new THREE.Color("#ababab") ); // soft white light
  scene.add(light);
}

// 平行光源
function addDirectionalLight(scene) {
  const light = new THREE.DirectionalLight(0xFFFFFF, 10);
  const helper = new THREE.DirectionalLightHelper(light, 5);

  light.position.set(50, 40, 0); //default; light shining from top
  light.castShadow = true; // default false

  //Set up shadow properties for the light
  light.shadow.mapSize.width = 512; // default
  light.shadow.mapSize.height = 512; // default
  light.shadow.camera.near = 0.5; // default
  light.shadow.camera.far = 500; // default

  scene.add(light);
  scene.add(helper);

  const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
  scene.add(cameraHelper);
}

// 点光源
function addPointLight(scene) {
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(50, 50, 10);
  light.castShadow = true; // default false
  light.intensity = 8000;

  light.shadow.mapSize.width = 512; // default
  light.shadow.mapSize.height = 512; // default
  light.shadow.camera.near = 0.5; // default
  light.shadow.camera.far = 500 // default

  const sphereSize = 1;
  const helper = new THREE.PointLightHelper(light, sphereSize);

  scene.add(light);
  scene.add(helper);
}

// 聚光灯
function addSpotLight(scene) {
  const light = new THREE.SpotLight(0xffffff);
  light.position.set(-40, 60, -10);
  // light.map = new THREE.TextureLoader().load( url );

  light.castShadow = true;
  light.distance = 0;
  light.angle = 0.4;

  light.shadow.mapSize.width = 512; // default
  light.shadow.mapSize.height = 512; // default
  light.shadow.camera.near = 0.5; // default
  light.shadow.camera.far = 500; // default
  // light.shadow.camera.fov = 30;
  // light.shadow.focus = 1; // default

  const helper = new THREE.SpotLightHelper(light);

  scene.add(light);
  scene.add(helper);

  // const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
  // scene.add(cameraHelper);
}

export {
  addAmbientLight, addDirectionalLight, addPointLight, addSpotLight
}