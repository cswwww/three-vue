import * as THREE from 'three';

// https://threejs.org/docs/#api/zh/cameras/PerspectiveCamera
function addPerspectiveCamera() {
  const camera = new THREE.PerspectiveCamera(
    45, // fov — Camera frustum vertical field of view.
    window.innerWidth / window.innerHeight, // aspect — Camera frustum aspect ratio.
    0.1, // near — Camera frustum near plane.
    1000 // far — Camera frustum far plane.
  );

  // ! position property is inherited from Object3D
  // camera.position.x = 120;
  // camera.position.y = 60;
  // camera.position.z = 180;
  camera.position.set(100, 100, 100);
  return camera;
}

function addOrthographicCamera() {
  const camera = new THREE.OrthographicCamera(window.innerWidth / -16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / 500, -500, 500);
  // camera.position.x = -10;
  // camera.position.y = -10;
  // camera.position.z = -410;
  // camera.position.set(100, 100, 100);
  return camera;
}

export {
  addPerspectiveCamera, addOrthographicCamera
}