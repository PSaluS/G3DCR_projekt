import * as THREE from 'three';
import darkWood from '../textures/DarkWood.png';
import midWood from '../textures/Wood_nat.jpg';
import LightWood from '../textures/LightWood.jpg';
import WoodFloor from '../textures/WoodFloor.jpg';
import LightWoodFloor from '../textures/LightWoodFloor.jpg';
import Alberta_Alfred_leather_dark from '../textures/letherTex/Alberta_Alfred_leather_dark.jpg';
import Leather_1_bump from '../textures/letherTex/Leather_1-bump.jpg';
import Leather_displace from '../textures/letherTex/Leather_displace.jpg';
import leather_normal from '../textures/letherTex/leather_normal.jpg';

const Materials = {
    whiteS: new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular:0x222222,
        name: 'White shiny'
    }),
    whiteM: new THREE.MeshLambertMaterial({
        color: 0xffffff,
        name: 'White mat'
    }),
    blackS: new THREE.MeshPhongMaterial({
        color: 0x000000,
        specular:0x222222,
        name: 'Black shiny'
    }),
    blackM: new THREE.MeshLambertMaterial({
        color: 0x000000,
        name: 'Black mat'
    }),
    darkWoodS: new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load( darkWood ),
        specular: 0x222222,
        name: 'Dark wood shiny'
    }),
    darkWoodM: new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load( darkWood ),
        name: 'Dark wood mat'
    }),
    midWoodS: new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load( midWood ),
        specular: 0x222222,
        name: 'Mid wood shiny'
    }),
    midWoodM: new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load( midWood ),
        name: 'Mid wood mat'
    }),
    lightWoodS: new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load(LightWood ),
        specular: 0x222222,
        name: 'Bright wood shiny'
    }),
    lightWoodM: new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(LightWood ),
        name: 'Bright wood mat'
    }),
    panelsWoodS: new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load(WoodFloor ),
        specular: 0x222222,
        name: 'Wood panels shiny'
    }),
    panelsWoodM: new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(WoodFloor ),
        name: 'Wood panels mat'
    })
    ,
    panelsLightWoodS: new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load(LightWoodFloor ),
        specular: 0x222222,
        name: 'Bright wood panels shiny'
    }),
    panelsLightWoodM: new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load(LightWoodFloor ),
        name: 'Bright wood panels mat'
    }),
    letherS: new THREE.MeshPhongMaterial({
        name: 'Lether',
        map: new THREE.TextureLoader().load( Alberta_Alfred_leather_dark),
        bumpmap: new THREE.TextureLoader().load(Leather_1_bump),
        displacementMap: new THREE.TextureLoader().load(Leather_displace),
        displacementScale: 0.01,
        normalMap: new THREE.TextureLoader().load( leather_normal),
        specular: 0x333333,
    }),
    letherM: new THREE.MeshPhongMaterial({
        name: 'Lether',
        map: new THREE.TextureLoader().load(Alberta_Alfred_leather_dark),
        bumpmap: new THREE.TextureLoader().load( Leather_1_bump),
        displacementMap: new THREE.TextureLoader().load(Leather_displace),
        displacementScale: 0.01,
        bumpScale:0.01,
        normalMap: new THREE.TextureLoader().load(leather_normal),
        specular: 0x000000,
    })

}

export default Materials;