import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

const id = window.location.pathname.split('/').pop();

let shaderInfo;
try {
    const response = await fetch('/shader/' + id);
    if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
    }
    const json = await response.json();
    shaderInfo = json.shaderInfo;
} catch (error) {
    throw new Error('Could not get shader. Please refresh the page.')
}

if (shaderInfo === undefined) {
    window.location.href = '/'
}

let vertexShader = await(await fetch(`/data/shaders/${shaderInfo.src}/shader.vert`)).text();
let fragmentShader = await(await fetch(`/data/shaders/${shaderInfo.src}/shader.frag`)).text();

const geometry = new THREE.IcosahedronGeometry(1, 5);

const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
});

// if (shaderInfo.color !== undefined) {
//     material.color = new THREE.Color(shaderInfo.color);
// }

const cube = new THREE.Mesh(geometry, material);

const scene = new THREE.Scene();
scene.add(cube);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

camera.position.z = 3;

if (WebGL.isWebGL2Available()) {
    renderer.setAnimationLoop(animate);
} else {
    const warning = WebGL.getWebGL2ErrorMessage();
    const container = document.getElementById("container");
    if (container !== null) {
        container.appendChild(warning);
    }
}

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
