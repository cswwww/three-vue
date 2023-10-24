import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

class ThreeJsApp {
  constructor(dom = 'item') {
    if (!WebGL.isWebGLAvailable()) {
      const warning = WebGL.getWebGLErrorMessage();
      document.getElementById(dom).appendChild(warning);
      return;
    }

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(100, 100, 100);
    this.camera.lookAt(this.scene.position);

    this.renderer = new THREE.WebGLRenderer();
    // this.renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene.fog = new THREE.Fog(0xffffff, 0.1, 500);
    // this.scene.add(new THREE.AxesHelper(20));  // 显示坐标轴 The X axis is red. The Y axis is green. The Z axis is blue.


    const container = document.getElementById(dom);
    container.appendChild(this.renderer.domElement);

    this.animate();
  }

  animate(callback) {
    this.renderer.render(this.scene, this.camera);
    callback && callback()
    requestAnimationFrame(() => this.animate(callback));
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}


export {
  ThreeJsApp
}