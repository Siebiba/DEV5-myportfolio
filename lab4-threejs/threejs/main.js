
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


//Scene
const scene = new THREE.Scene();
//Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#233143");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//ambient light
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(ambientLight);



//Lights
const light = new THREE.PointLight(0xFFFFFF, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);

// Make Canvas Responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

// Create Box with position
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshPhongMaterial( { color: 0x00FF00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.x = 0;
cube.position.y = 1;
cube.position.z = 0;


// Create Floorbox
const floorGeometry = new THREE.BoxGeometry( 10, 0.1, 10 );
const floorMaterial = new THREE.MeshPhongMaterial( { color: 0xFF0FFF } );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
scene.add( floor );

//create roof cone on cube
const roofGeometry = new THREE.ConeGeometry( 2, 2, 4 );
const roofMaterial = new THREE.MeshPhongMaterial( { color: 0xFF0FFF } );
const roof = new THREE.Mesh( roofGeometry, roofMaterial );
scene.add( roof );
roof.position.x = 0;
roof.position.y = 3;
roof.position.z = 0;

//roof rotation on y axis with radials
roof.rotation.y = 0.8;


//create door on cube
const doorGeometry = new THREE.BoxGeometry( 0.5, 1, 0.2 );
const doorMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );
const door = new THREE.Mesh( doorGeometry, doorMaterial );
scene.add( door );
door.position.x = 0.5;
door.position.y = 0.5;
door.position.z = 1;

//create window on cube










camera.position.z = 5;







//add controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 5;
controls.maxDistance = 10;

camera.position.set( 0, 20, 100 );
controls.update();


// Rendering Function
const rendering = function() {
    requestAnimationFrame(rendering);

    // Update controls
    
    
    // Constantly rotate box
    
    renderer.render(scene, camera);
}
rendering();