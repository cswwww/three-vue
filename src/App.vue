<script setup>
import { onMounted } from 'vue';
import { ThreeJsApp } from './utils/init.js'
import * as THREE from 'three';
import { addPlane, addBox, addSphere } from './utils/geometry.js'
import { addDirectionalLight } from './utils/light.js'

onMounted(() => {
  const threeJs = new ThreeJsApp();

  threeJs.scene.add(new THREE.AxesHelper(20));  // 显示坐标轴 The X axis is red. The Y axis is green. The Z axis is blue.
  const box = addBox()
  threeJs.scene.add(addPlane())
  threeJs.scene.add(box)
  threeJs.scene.add(addSphere())

  addDirectionalLight(threeJs.scene)
  threeJs.animate(() => {
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
  })
});

</script>

<template>
  <div id="item" style="width: 100%;height: 100%;">
  </div>
</template>
