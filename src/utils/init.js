import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { addPerspectiveCamera } from '../utils/camera.js'

class ThreeJsApp {
  constructor(dom = 'item') {
    if (!WebGL.isWebGLAvailable()) {
      const warning = WebGL.getWebGLErrorMessage();
      document.getElementById(dom).appendChild(warning);
      return;
    }

    // ! About Scene
    const scene = new THREE.Scene();
    scene.backgroundColor = 0xffffff;
    scene.fog = new THREE.Fog(0xffffff, 0.0025, 50);
    scene.fog = new THREE.Fog(0xffffff, 0.1, 500);
    // scene.add(new THREE.AxesHelper(20));  // 显示坐标轴 The X axis is red. The Y axis is green. The Z axis is blue.
    this.scene = scene

    this.camera = addPerspectiveCamera()
    this.camera.lookAt(this.scene.position);

    // ! About Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap; // PCFSoftShadowMap
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff);
    this.renderer = renderer
    document.getElementById(dom).appendChild(this.renderer.domElement);

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