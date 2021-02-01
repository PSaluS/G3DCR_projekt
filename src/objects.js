import * as THREE from 'three';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2.js';
import Table from '../objects/Table 5500-75/Table 5500-75.obj';
import Sofa from '../objects/Sofa/Sofa.obj'
import Chair1 from '../objects/chair1/uploads_files_986259_Chair+01.obj';
import Chair2 from '../objects/chair2/Eames_OBJ.obj';
import Light1 from '../objects/light1/1.obj';
import Light2 from '../objects/light2/uploads_files_246913_Tisserant-Floor+Lamp-50.obj';


const objects = {
    table: new OBJLoader2(),
    sofa: new OBJLoader2(),
    chair1: new OBJLoader2(),
    chair2: new OBJLoader2(),
    light1: new OBJLoader2(),
    light2: new OBJLoader2()
}
objects.table.load( Table , callbackOnLoad);
objects.sofa.load( Sofa , callbackOnLoad);
objects.chair1.load( Chair1 , callbackOnLoad);
objects.chair2.load( Chair2 , callbackOnLoad);
objects.light1.load( Light1 , callbackOnLoad);
objects.light2.load( Light2 , callbackOnLoad);
function callbackOnLoad ( object3d ) {
    //console.log( object3d );
}

export default objects;