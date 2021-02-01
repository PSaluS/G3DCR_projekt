import './style.scss';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import Stats from 'stats.js';
import materials from './materials.js';
import objects from './objects.js';
import {scalMatrix, setMaterial, getMaterialKey, getMaterial} from './tools';

const root = document.getElementById("root");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, root.offsetWidth * 0.995 / root.offsetHeight * 0.995, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);
const stats = new Stats();
const interactivObj = [];

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let activObject = undefined;

const PointLight = new THREE.PointLight(0xffffff, 1.3, 20);
const PointLight2 = new THREE.PointLight(0xdee04b, 0.5, 10);
const AmbientLight = new THREE.AmbientLight(0xffffff, 0.2);

function onMouseClick( event ) {

	mouse.x = ( event.clientX / root.offsetWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / root.offsetHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, camera );
    const intersects = raycaster.intersectObjects( interactivObj, true );

    if ( intersects.length > 0 )
	{
        if(intersects[0].object.parent != scene) {
            document.getElementById('material').value = getMaterialKey(intersects[0].object.material);
            activObject = intersects[0].object.parent;
        }
        else {
            activObject = activObject = intersects[0].object;
            document.getElementById('material').value = getMaterialKey(activObject.material);
        }
        document.getElementById('name').value = activObject.name;
        document.getElementById('posX').value = activObject.position.x;
        document.getElementById('posY').value = activObject.position.y;
        document.getElementById('posZ').value = activObject.position.z;
    }
    else {
        activObject = undefined;
        document.getElementById('name').value = null;
        document.getElementById('posX').value = null;
        document.getElementById('posY').value = null;
        document.getElementById('posZ').value = null;
    }

}

renderer.setSize(root.offsetWidth * 0.995, root.offsetHeight * 0.995);
root.appendChild(renderer.domElement);

function animate() {

    stats.begin();



    renderer.render(scene, camera);
    controls.update();
    stats.end();
    requestAnimationFrame(animate);
}

function wallInit(geometry){

    //1
    const wall1 =new THREE.Mesh(geometry,materials.whiteM);
    scene.add(wall1);
    wall1.translateX(-5);
    wall1.rotateY(Math.PI / 2);
    wall1.translateY(2.5);
    wall1.name='wall1';
    interactivObj.push(wall1);

    //2
    const wall2 =new THREE.Mesh(geometry,materials.whiteM);
    scene.add(wall2);
    wall2.translateX(5);
    wall2.rotateY(-Math.PI / 2);
    wall2.translateY(2.5);
    wall2.name='wall2';
    interactivObj.push(wall2);

    //3
    const wall3 =new THREE.Mesh(geometry,materials.whiteM);
    scene.add(wall3);
    wall3.translateZ(-5);
    wall3.translateY(2.5);
    wall3.name='wall3';
    interactivObj.push(wall3);

    //4
    const wall4 =new THREE.Mesh(geometry,materials.whiteM);
    scene.add(wall4);
    wall4.translateZ(5);
    wall4.rotateY(Math.PI);
    wall4.translateY(2.5);
    wall4.name='wall4';
    interactivObj.push(wall4);

}

function init() {
    camera.position.z = 8;
    camera.position.y = 8;
    renderer.setClearColor(0x8abdff, 1);

    scene.add(PointLight);
    scene.add(PointLight2);
    scene.add(AmbientLight);

    const floorGeometry = new THREE.PlaneGeometry(10, 10);
    const wallGeometry = new THREE.PlaneGeometry(10,5);
    interactivObj.push(new THREE.Mesh(floorGeometry, materials.whiteM));

    scene.add(interactivObj[0]);
    interactivObj[0].name='floor';
    interactivObj[0].rotateX(-Math.PI / 2);

    wallInit(wallGeometry);

    const light1 = objects.light1.baseObject3d
    scene.add(light1);
    light1.applyMatrix4(scalMatrix(0.1));
    light1.translateY(5);
    light1.name='lamp1';
    interactivObj.push(light1);
    PointLight.position.set(0, 5.5, 0);

    const light2 = objects.light2.baseObject3d;
    scene.add(light2);
    light2.name='lamp2';
    light2.applyMatrix4(scalMatrix(0.003));
    light2.position.set(4,0.01,-4);
    light2.rotateY(-Math.PI / 1.44);
    interactivObj.push(light2);
    PointLight2.position.set(3.7, 3.7, -3.7);
    // console.log(light2);

    const table = objects.table.baseObject3d;
    scene.add(table);
    table.applyMatrix4(scalMatrix(0.00007));
    table.name='table';
    interactivObj.push(table);

    const sofa = objects.sofa.baseObject3d;
    scene.add(sofa);
    sofa.applyMatrix4(scalMatrix(0.002));
    sofa.translateZ(-3.5);
    sofa.name = 'sofa'
    interactivObj.push(sofa);

    const chair1 = objects.chair1.baseObject3d;
    scene.add(chair1);
    chair1.applyMatrix4(scalMatrix(0.3));
    chair1.position.set(-2.5, 0.8,0);
    chair1.name = 'chair1';
    interactivObj.push(chair1);

    const chair2 = objects.chair2.baseObject3d;
    scene.add(chair2);
    chair2.applyMatrix4(scalMatrix(2));
    chair2.position.set(0, 0,1.5);
    chair2.rotateY(Math.PI);
    chair2.name = 'chair2';
    interactivObj.push(chair2);

    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    root.appendChild(stats.dom);

    // console.log(interactivObj);
    animate();
}

init();
document.getElementById('root').addEventListener( 'click', onMouseClick, false );
document.getElementById('name').onchange = function () {
    activObject.name = this.value;
};
document.getElementById('posX').onchange = function () {
    activObject.position.x = this.value;
};
document.getElementById('posY').onchange = function () {
    activObject.position.y = this.value;
};
document.getElementById('posZ').onchange = function () {
    activObject.position.z = this.value;
};
document.getElementById('material').onchange = function () {
// console.log(this);
const key = this.value;
// console.log(key);
    if(activObject.children.length > 0) {
        activObject.children.forEach(function(element) {
            element.material = getMaterial(key);
        })
    } else {
        activObject.material = getMaterial(key);
    }
}