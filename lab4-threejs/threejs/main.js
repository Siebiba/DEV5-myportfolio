import * as THREE from 'three';
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js';
import {
    OBJLoader
} from 'three/examples/jsm/loaders/OBJLoader.js';

//Scene
const scene = new THREE.Scene();
//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
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
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshPhongMaterial({
    color: 0x00FF00
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
cube.position.x = 0;
cube.position.y = 1;
cube.position.z = 0;


// Create Floorbox
const floorGeometry = new THREE.BoxGeometry(10, 0.1, 10);
const floorMaterial = new THREE.MeshPhongMaterial({
    color: 0xFF0FFF
});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);

//create roof cone on cube
const roofGeometry = new THREE.ConeGeometry(2, 2, 4);
const roofMaterial = new THREE.MeshPhongMaterial({
    color: 0xFF0FFF
});
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
scene.add(roof);
roof.position.x = 0;
roof.position.y = 3;
roof.position.z = 0;

//roof rotation on y axis with radials
roof.rotation.y = 0.8;


//create door on cube
const doorGeometry = new THREE.BoxGeometry(0.5, 1, 0.1);
const doorMaterial = new THREE.MeshPhongMaterial({
    color: 0x000000
});
const door = new THREE.Mesh(doorGeometry, doorMaterial);
scene.add(door);
door.position.x = 0.5;
door.position.y = 0.5;
door.position.z = 1;


//create second door on cube
const door2Geometry = new THREE.BoxGeometry(0.5, 0.5, 0.1);
const door2Material = new THREE.MeshPhongMaterial({
    color: 0xFFFFFFF
});
const door2 = new THREE.Mesh(door2Geometry, door2Material);
scene.add(door2);
door2.position.x = -0.5;
door2.position.y = 1;
door2.position.z = 1;

//add texture from assets map to cube
const texture = new THREE.TextureLoader().load('assets/Stone.jpeg');
const textureMaterial = new THREE.MeshPhongMaterial({
    map: texture
});
cube.material = textureMaterial;

//add wood texture from assets map to door
const woodTexture = new THREE.TextureLoader().load('Wood.jpeg');
const woodTextureMaterial = new THREE.MeshPhongMaterial({
    map: woodTexture
});
door.material = woodTextureMaterial;

//add Stone2 texture from assets map to roof
const stone2Texture = new THREE.TextureLoader().load('assets/Stone2.jpeg');
const stone2TextureMaterial = new THREE.MeshPhongMaterial({
    map: stone2Texture
});
roof.material = stone2TextureMaterial;

//add name texture from assets map to door2
const nameTexture = new THREE.TextureLoader().load('assets/Name.jpg');
const nameTextureMaterial = new THREE.MeshPhongMaterial({
    map: nameTexture
});
door2.material = nameTextureMaterial;

//add ground texture from assets map to floor
const groundTexture = new THREE.TextureLoader().load('assets/Ground.jpeg');
const groundTextureMaterial = new THREE.MeshPhongMaterial({
    map: groundTexture
});
floor.material = groundTextureMaterial;

// obj loader from models clouTwo.obj

const loader = new OBJLoader();

for (let i = 0; i < 10; i++) {

    loader.load('models/cloudTwo.obj', function (object) {

        let sign = Math.random() < 0.5 ? -1 : 1;
        let x = Math.random() * 10 * sign;

        sign = Math.random() < 0.5 ? -1 : 1;
        let y = Math.random() * 10 * sign;

        sign = Math.random() < 0.5 ? -1 : 1;
        let z = Math.random() * 10 * sign;

        object.position.set(x, y, z);
        object.scale.set(3, 3, 3);
        scene.add(object);

    });


}

// obj loader from models Animal.obj

const loader2 = new OBJLoader();

loader2.load('models/Animal.obj', function (object) {

    //object position on floor
    object.position.set(2, 0.5, 0);
    object.scale.set(2, 2, 2);
    scene.add(object);

});

//add controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 5;
controls.maxDistance = 10;

camera.position.set(0, 20, 100);
controls.update();

// Rendering Function
const rendering = function () {
    requestAnimationFrame(rendering);

    // Update controls
    controls.update();

    //rotation animation of roof
    roof.rotation.y += 0.01;

    renderer.render(scene, camera);
}
rendering();