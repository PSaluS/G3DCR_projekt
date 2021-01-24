import * as THREE from 'three';

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
        map: new THREE.TextureLoader().load( '../textures/DarkWood.png' ),
        specular: 0x222222,
        name: 'Dark wood shiny'
    }),
    darkWoodM: new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load( '../textures/DarkWood.png' ),
        name: 'Dark wood mat'
    }),
    midWoodS: new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load( '../textures/Wood_nat.jpg' ),
        specular: 0x222222,
        name: 'Mid wood shiny'
    }),
    midWoodM: new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load( '../textures/Wood_nat.jpg' ),
        name: 'Mid wood mat'
    }),
    lightWoodS: new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load( '../textures/LightWood.jpg' ),
        specular: 0x222222,
        name: 'Bright wood shiny'
    }),
    lightWoodM: new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load( '../textures/LightWood.jpg' ),
        name: 'Bright wood mat'
    }),
    panelsWoodS: new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load( '../textures/WoodFloor.jpg' ),
        specular: 0x222222,
        name: 'Wood panels shiny'
    }),
    panelsWoodM: new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load( '../textures/WoodFloor.jpg' ),
        name: 'Wood panels mat'
    })
    ,
    panelsLightWoodS: new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load( '../textures/LightWoodFloor.jpg' ),
        specular: 0x222222,
        name: 'Bright wood panels shiny'
    }),
    panelsLightWoodM: new THREE.MeshLambertMaterial({
        map: new THREE.TextureLoader().load( '../textures/LightWoodFloor.jpg' ),
        name: 'Bright wood panels mat'
    }),
    letherS: new THREE.MeshPhongMaterial({
        name: 'Lether',
        map: new THREE.TextureLoader().load( '../textures/letherTex/Alberta_Alfred_leather_dark.jpg'),
        bumpmap: new THREE.TextureLoader().load( '../textures/letherTex/Leather_1-bump.jpg'),
        displacementMap: new THREE.TextureLoader().load( '../textures/letherTex/Leather_displace.jpg'),
        displacementScale: 0.01,
        normalMap: new THREE.TextureLoader().load( '../textures/letherTex/leather_normal.jpg'),
        specular: 0x333333,
    }),
    letherM: new THREE.MeshPhongMaterial({
        name: 'Lether',
        map: new THREE.TextureLoader().load( '../textures/letherTex/Alberta_Alfred_leather_dark.jpg'),
        bumpmap: new THREE.TextureLoader().load( '../textures/letherTex/Leather_1-bump.jpg'),
        displacementMap: new THREE.TextureLoader().load( '../textures/letherTex/Leather_displace.jpg'),
        displacementScale: 0.01,
        normalMap: new THREE.TextureLoader().load( '../textures/letherTex/leather_normal.jpg'),
        specular: 0x000000,
    })

}

export default Materials;