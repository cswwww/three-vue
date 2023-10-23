import * as THREE from 'three';

const ambientLight = new THREE.AmbientLight(0xffffff);

export {
  ambientLight,
}

// 平行光源
function addDirectionalLight(scene) {
  const light = new THREE.DirectionalLight(0xFFFFFF, 10);
  const helper = new THREE.DirectionalLightHelper(light, 5);

  light.position.set(50, 50, 0); //default; light shining from top
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

  light.shadow.mapSize.width = 512; // default
  light.shadow.mapSize.height = 512; // default
  light.shadow.camera.near = 0.5; // default
  light.shadow.camera.far = 500 // default

  const sphereSize = 1;
  const helper = new THREE.PointLightHelper(light, sphereSize);

  scene.add(light);
  scene.add(helper);
}

export {
  addDirectionalLight, addPointLight
}