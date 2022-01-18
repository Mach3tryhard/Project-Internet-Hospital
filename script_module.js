  import * as THREE from 'https://threejs.org/build/three.module.js';
  import {OrbitControls} from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';
  import {GUI} from 'https://threejs.org/examples/jsm/libs/lil-gui.module.min.js';
  import {OBJLoader} from 'https://threejs.org/examples/jsm/loaders/OBJLoader.js';

  const scene = new THREE.Scene();

  // New Model------------------------------------------------------------------------------------------------------------------

  const loader = new OBJLoader();
  loader.load(
      'HumanObjfiles/arm.obj',
      function (object) {
          var part = object.getObjectByName('arm');
          part.material.color.setHex(0xffc9a9);
          object.position.set(0.25,10.4,19.9);
          object.rotation.set(4.7123889825,0,1.5707963275);
          object.scale.set(-0.1,0.1,0.1);
          scene.add(object);
      },
  );
  loader.load(
      'HumanObjfiles/arm.obj',
      function (object1) {
          var part1 = object1.getObjectByName('arm');
          part1.material.color.setHex(0xffc9a9);
          object1.position.set(0.25,10.4,26.5);
          object1.rotation.set(4.7123889825,0,1.5707963275);
          object1.scale.set(0.1,0.1,0.1);
          scene.add(object1);
      },
  );
  loader.load(
      'HumanObjfiles/torso.obj',
      function (object2) {
          var part2 = object2.getObjectByName('male_torso');
          part2.material.color.setHex(0xffc9a9);
          object2.position.set(0,11,23);
          object2.rotation.set(4.7123889825,0,1.5707963275);
          object2.scale.set(0.1,0.1,0.1);
          scene.add(object2);
      },
  );
  loader.load(
      'HumanObjfiles/head.obj',
      function (object3) {
          var part3 = object3.getObjectByName('GenericHead');
          part3.material.color.setHex(0xffc9a9);
          object3.position.set(0.125,12.8,23.25);
          object3.rotation.set(4.7123889825,0,1.5707963275);
          object3.scale.set(0.1,0.1,0.1);
          scene.add(object3);
      },
  );
  loader.load(
      'HumanObjfiles/leg.obj',
      function (object4) {
          var part4 = object4.getObjectByName('default');
          part4.material.color.setHex(0xffc9a9);
          object4.position.set(0.5,-1.5,24.25);
          object4.rotation.set(4.7123889825,0,1.5707963275);
          object4.scale.set(0.1,0.1,0.1);
          scene.add(object4);
      },
  );
  loader.load(
      'HumanObjfiles/leg.obj',
      function (object5) {
          var part5 = object5.getObjectByName('default');
          part5.material.color.setHex(0xffc9a9);
          object5.position.set(0.5,-1.5,22.25);
          object5.rotation.set(4.7123889825,0,1.5707963275);
          object5.scale.set(-0.1,0.1,0.1);
          scene.add(object5);
      },
  );
  // Old Model-----------------------------------------------------------------------------------------------------------------------------------
  let partsdata = [
      {
          w:2, h:1, d:1,
          x:-0.5, y:0, z:-1, n:'talpaD'
      },
      {
          w:2, h:1, d:1,
          x:-0.5, y:0, z:1, n:'talpaS'
      },
      {
          w:1, h:3, d:1,
          x:-1, y:2, z:-1, n:'gambaD'
      },
      {
          w:1, h:3, d:1,
          x:-1, y:2, z:1, n:'gambaS'
      },
      {
          w:1, h:1, d:1,
          x:-1, y:4, z:1, n:'genunchiS'
      },
      {
          w:1, h:1, d:1,
          x:-1, y:4, z:-1, n:'genunchiD'
      },
      {
          w:1, h:3, d:1,
          x:-1, y:6, z:-1, n:'coapsaD'
      },
      {
          w:1, h:3, d:1,
          x:-1, y:6, z:1, n:'coapsaS'
      },
      {
          w:2, h:2, d:3,
          x:-1, y:8.5, z:0, n:'bazin'
      },
      {
          w:2, h:2, d:3,
          x:-1, y:10.5, z:0, n:'stomac'
      },
      {
          w:2, h:3, d:3,
          x:-1, y:13, z:0, n:'piept'
      },
      {
          w:1, h:1, d:2,
          x:-1, y:14, z:-2.5, n:'mana1D'
      },
      {
          w:1, h:1, d:2,
          x:-1, y:14, z:2.5, n:'mana1S'
      },
      {
          w:1, h:1, d:1,
          x:-1, y:14, z:-4, n:'cotD'
      },
      {
          w:1, h:1, d:1,
          x:-1, y:14, z:4, n:'cotS'
      },
      {
          w:1, h:1, d:2,
          x:-1, y:14, z:-5.5, n:'mana2D'
      },
      {
          w:1, h:1, d:2,
          x:-1, y:14, z:5.5, n:"mana2S"
      },
      {
          w:1, h:1, d:1,
          x:-1, y:14, z:-7,n:"palmaD"
      },
      {
          w:1, h:1, d:1,
          x:-1, y:14, z:7,n:"palmaS"
      },
      {
          w:1, h:1.5, d:1,
          x:-1, y:15, z:0, n:'gat'
      },
      {
          w:2, h:2, d:2,
          x:-1, y:16.5, z:0, n:'cap'
      }
  ];
  for (let dat of partsdata){
      const material = new THREE.MeshPhongMaterial({color: 0xffc9a9});
      let geometry = new THREE.BoxGeometry(dat.w, dat.h, dat.d);
      const cube = new THREE.Mesh(geometry, material);
      cube.name=dat.n;
      scene.add(cube);
      cube.position.set(dat.x, dat.y, dat.z);
  }
  // Set up lights------------------------------------------------------------------------------------------------------------------------------
  const color = 0xFFFFFF;
  const intensity = 0.3;
  const light = new THREE.AmbientLight(color, intensity);
  scene.add(light);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(9, 20, 7);
  scene.add(directionalLight);

  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight1.position.set(-9, -20, -7);
  scene.add(directionalLight1);
  // Camera-------------------------------------------------------------------------------------------------------------------------------------
  const canvas = document.querySelector('#c');

  const fov = 60;
  const aspect = 2;
  const near = 0.1;
  const far = 10000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 0);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 10, 10);
  controls.update();

  camera.position.set(30, 10, 30);
  camera.lookAt(0, 10, 10);
  // Raycasting + Rendering-------------------------------------------------------------------------------------------------------------------------------
  const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
  });
  renderer.setSize(window.innerWidth*0.9999, window.innerHeight*0.9999);
  renderer.render(scene, camera);

  function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
      renderer.setSize(width, height, false);
      }
      return needResize;
  }
  // Resize in realtime------------------------------------------------------------------------------------------------------------------------------
  window.addEventListener( 'resize', onWindowResize, false );
  function onWindowResize(){

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );

  } 
  //---------------------------------------------------------------------------------------------------------------------------------------------
  class PickHelper {
      constructor() {
      this.raycaster = new THREE.Raycaster();
      this.pickedObject = null;
      this.pickedObjectSavedColor = 0;
      }
      pick(normalizedPosition, scene, camera, time) {
      if (this.pickedObject) {
          this.pickedObject.material.color.setHex(this.pickedObjectSavedColor);
          this.pickedObject = undefined;
      }

      this.raycaster.setFromCamera(normalizedPosition, camera);
      const intersectedObjects = this.raycaster.intersectObjects(scene.children);
      if (intersectedObjects.length) {
          this.pickedObject = intersectedObjects[0].object;
          this.pickedObjectSavedColor = this.pickedObject.material.color.getHex();
          this.pickedObject.material.color.setHex(0xff0000);
          //legatura cu html
          for(let pp of document.querySelectorAll('qqq')) pp.style.display='none';
          let punerebloc=document.querySelector('#'+this.pickedObject.name);
          parteselectata = this.pickedObject.name;
          if(punerebloc) punerebloc.style.display='block';
          document.getElementById("qqq").style.display="none";
      }
      }
  }

  const pickPosition = {x: 0, y: 0};
  const pickHelper = new PickHelper();
  clearPickPosition();

  function render(time) {
      time *= 0.001;

      if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      }


      pickHelper.pick(pickPosition, scene, camera, time);

      renderer.render(scene, camera);

      requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  function getCanvasRelativePosition(event) {
      const rect = canvas.getBoundingClientRect();
      return {
      x: (event.clientX - rect.left) * canvas.width  / rect.width,
      y: (event.clientY - rect.top ) * canvas.height / rect.height,
      };
  }

  function setPickPosition(event) {
      const pos = getCanvasRelativePosition(event);
      pickPosition.x = (pos.x / canvas.width ) *  2 - 1;
      pickPosition.y = (pos.y / canvas.height) * -2 + 1
  }

  function clearPickPosition() {
      pickPosition.x = -100000;
      pickPosition.y = -100000;
  }
  window.addEventListener('mousemove', setPickPosition);