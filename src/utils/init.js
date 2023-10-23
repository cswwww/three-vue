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
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const container = document.getElementById(dom);
    container.appendChild(this.renderer.domElement);


    this.animate();
  }

  animate(callback) {
    this.renderer.render(this.scene, this.camera);
    callback && callback()
    requestAnimationFrame(() => this.animate(callback));
  }
}


export {
  ThreeJsApp
}