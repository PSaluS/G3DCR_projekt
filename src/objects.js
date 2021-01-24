import * as THREE from 'three';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2.js';


const objects = {
    table: new OBJLoader2(),
    sofa: new OBJLoader2(),
    chair1: new OBJLoader2(),
    chair2: new OBJLoader2(),
    light1: new OBJLoader2(),
    light2: new OBJLoader2()
}
objects.table.load('../objects/Table 5500-75/Table 5500-75.obj', callbackOnLoad);
objects.sofa.load('../objects/Sofa/Sofa.obj', callbackOnLoad);
objects.chair1.load('../objects/chair1/uploads_files_986259_Chair+01.obj', callbackOnLoad);
objects.chair2.load('../objects/chair2/Eames_OBJ.obj', callbackOnLoad);
objects.light1.load('../objects/light1/1.obj', callbackOnLoad);
objects.light2.load('../objects/light2/uploads_files_246913_Tisserant-Floor+Lamp-50.obj', callbackOnLoad);
function callbackOnLoad ( object3d ) {
    //console.log( object3d );
}

export default objects;