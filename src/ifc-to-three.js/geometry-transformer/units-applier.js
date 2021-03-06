import { createAxes, scene } from "../scene/three-scene.js";
import {
  namedProps as n,
  structuredData as s,
} from "../../utils/global-constants.js";

function applyScale(structured) {
  const units = structured[s.units][n.units];
  const scale = getUnitScale(units);
  applyScaleOnObjects(scale, structured)
}

function applyScaleOnObjects(scale, structured) {
  if (scale === 1) return;
  const axis = createAxes();
  scene.add(axis);

  structured[s.products].forEach((product)=> {
    const geometries = product[n.geometry];
    if(geometries) geometries.forEach((geometry)=> {
      axis.attach(geometry);
      axis.scale.set(scale, scale, scale);
      scene.attach(geometry);
      axis.scale.set(1,1,1);
    })
  })

  // scene.traverse((object) => {
  //   if(isValid(object)){
  //     axis.attach(object);
  //     axis.scale.set(0.000001, 0.000001, 0.000001);
  //     scene.attach(object);
  //     axis.scale.set(1,1,1);
  //   }
  //   // console.log(scale);
  //   // console.log(object.type);
  // });
}

function isValid(object){
  return object.type != "Scene" 
      && object.type != "AxesHelper" 
      && object.type != "GridHelper"
      && object.type != "DirectionalLight"
      && object.type != "AmbientLight";
}

function getUnitScale(units) {
  const lengthUnit = units.filter((unitType) => {
    return unitType[n.unitType] === "LENGTHUNIT";
  })[0];
  const prefix = lengthUnit[n.prefix];
  return unitMap[prefix];
}

const unitMap = {
  EXA:   100000000,
  PETA:  10000000,
  TERA:  1000000,
  GIGA:  100000,
  MEGA:  10000,
  KILO:  1000,
  HECTO: 100,
  DECA:  10,
  $:     1,
  DECI:  0.1,
  CENTI: 0.01,
  MILLI: 0.001,
  MICRO: 0.0001,
  NANO:  0.00001,
  PICO:  0.000001,
  FEMTO: 0.0000001,
  ATTO:  0.00000001,
};

export { applyScale };
