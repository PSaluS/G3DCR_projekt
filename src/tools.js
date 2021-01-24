import * as THREE from 'three';
import materials from './materials.js';

export function scalMatrix(scale) {

    const scal = new THREE.Matrix4();
    scal.set(
        scale,  0,  0,  0,
        0,  scale,  0,  0,
        0,  0,  scale,  0,
        0,  0,  0,  1
        );
        return scal;
}

export function setMaterial(obj, newMaterial) {

    if(obj.material !== undefined) {
        obj.material = newMaterial;
    }
    else {
        obj.children.forEach( function(element) {
                console.log('element to: ' + element)
                element.material = newMaterial
            } );
        }
    }

    export function retChildern(obj) {
        if(obj.children == undefined || obj.children.length == 0){
            return obj;
        }
        else {
            return [...obj.children];
        }
    }

    export function getMaterialKey(material) {

        if(material === materials.whiteS) return 'whiteS';
        if(material === materials.whiteM) return 'whiteM';
        if(material === materials.blackS) return 'blackS';
        if(material === materials.blackM) return 'blackM';
        if(material === materials.darkWoodS) return 'darkWoodS';
        if(material === materials.darkWoodM) return 'darkWoodM';
        if(material === materials.midWoodS) return 'midWoodS';
        if(material === materials.midWoodM) return 'midWoodM';
        if(material === materials.lightWoodS) return 'lightWoodS';
        if(material === materials.lightWoodM) return 'lightWoodM';
        if(material === materials.panelsWoodS) return 'panelsWoodS';
        if(material === materials.panelsWoodM) return 'panelsWoodM';
        if(material === materials.panelsLightWoodS) return 'panelsLightWoodS';
        if(material === materials.panelsLightWoodM) return 'panelsLightWoodM';
        if(material === materials.letherS) return 'letherS';
        if(material === materials.letherM) return 'letherM';
    }

    export function getMaterial(key) {
        if(key == 'whiteS') return materials.whiteS;
        if(key == 'whiteM') return materials.whiteM;
        if(key == 'blackS') return materials.blackS;
        if(key == 'blackM') return materials.blackM;
        if(key == 'darkWoodS') return materials.darkWoodS;
        if(key == 'darkWoodM') return materials.darkWoodM;
        if(key == 'midWoodS') return materials.midWoodS;
        if(key == 'midWoodM') return materials.midWoodM;
        if(key == 'lightWoodS') return materials.lightWoodS;
        if(key == 'lightWoodM') return materials.lightWoodM;
        if(key == 'panelsWoodS') return materials.panelsWoodS;
        if(key == 'panelsWoodM') return materials.panelsWoodM;
        if(key == 'panelsLightWoodS') return materials.panelsLightWoodS;
        if(key == 'panelsLightWoodM') return materials.panelsLightWoodM;
        if(key == 'letherS') return materials.letherS;
        if(key == 'letherM') return materials.letherM;
    }