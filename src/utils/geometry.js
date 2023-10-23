import * as THREE from 'three';

function addPlane() {
  // width — Width along the X axis.Default is 1.
  // height — Height along the Y axis.Default is 1.
  // widthSegments — Optional.Default is 1.
  // heightSegments — Optional.Default is 1.
  const geometry = new THREE.PlaneGeometry(60, 20, 1, 1);
  // const material = new THREE.MeshBasicMaterial({ color: 0xcccccc });
  const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
  const item = new THREE.Mesh(geometry, material);
  item.rotation.x = -0.5 * Math.PI;
  item.position.x = 15;
  item.position.y = 0;
  item.position.z = 0;

  item.castShadow = true; //default is false
  item.receiveShadow = true; //default
  
  return item;
}

function addBox() {
  const geometry = new THREE.BoxGeometry(4, 4, 4);
  // const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
  const material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
  const item = new THREE.Mesh(geometry, material);
  item.position.x = -4;
  item.position.y = 3;
  item.position.z = 0;

  item.castShadow = true; //default is false
  item.receiveShadow = true; //default

  return item;
}

function addSphere() {
  const geometry = new THREE.SphereGeometry(4, 20, 20);
  // const material = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe: true });
  const material = new THREE.MeshLambertMaterial({ color: 0x7777ff });

  const item = new THREE.Mesh(geometry, material);

  item.position.x = 20;
  item.position.y = 4;
  item.position.z = 2;
  
  item.castShadow = true; //default is false
  item.receiveShadow = true; //default

  return item;
}


export {
  addPlane, addBox, addSphere
}