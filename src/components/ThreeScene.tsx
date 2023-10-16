import { useEffect, useRef } from "react";
import * as THREE from "three";

function interpolateColor(color1 : number[], color2 : number[], factor : number) {
  if (arguments.length < 3) { 
      factor = 0.5; 
  }
  var result = color1.slice();
  for (var i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return result;
}

const ThreeScene = () => {

  useEffect(() => {

    const createCube = (x: number, y: number, z: number) => {
      const color = interpolateColor([0,0,0],[170,190,255], (x+5+y+5)/20)
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: `rgb(${color[0]}, ${color[1]}, ${color[2]})` });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = x;
      cube.position.y = y;
      cube.position.z = z;
      return cube;
    }

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    let cubes: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>[] = [];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cube = createCube(i - 5, j - 5, 1);
        cubes.push(cube)
        scene.add(cube)
      }
    }

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);
      for (let cube of cubes) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div>

    </div>
  );
}

export default ThreeScene;