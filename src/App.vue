<script setup>
import { onMounted } from 'vue';
import { ThreeJsApp } from './utils/init.js'
import * as THREE from 'three';
import { addPlane, addBox, addSphere } from './utils/geometry.js'
import { addPointLight, addAmbientLight } from './utils/light.js'


onMounted(() => {
  const threeJs = new ThreeJsApp();
  let step = 0

  const box = addBox()
  const sphere = addSphere()
  threeJs.scene.add(box)
  threeJs.scene.add(sphere)
  threeJs.scene.add(addPlane())

  addAmbientLight(threeJs.scene)
  addPointLight(threeJs.scene)

  threeJs.animate(() => {
    step += 0.04;
    sphere.position.x = 20 + (10 * (Math.cos(step)));
    sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));

    threeJs.camera.lookAt(sphere.position);

    threeJs.scene.traverse(e => {
      if (e instanceof THREE.Mesh && e == box) {
        e.rotation.x += 0.01;
        e.rotation.y += 0.01;
      }
    });

  })

  window.addEventListener('resize', threeJs.onResize.bind(threeJs), false);
});

</script>

<template>
  <div id="item" style="width: 100%;height: 100%;">
  </div>
</template>
