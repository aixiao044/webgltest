function init() {
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setClearColor(0x000000);
    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
    camera.position.set(20, 15, 23);
    camera.lookAt(new THREE.Vector3(-5, 0, -2));
    scene.add(camera);

    var light = new THREE.PointLight(0xffffff, 2, 100);
    light.position.set(0, 1.5, 2);
    scene.add(light);

    var whiteCube = new THREE.Mesh(new THREE.CubeGeometry(4, 2, 2),
        new THREE.MeshLambertMaterial({ color: 0xffffff }));
    whiteCube.position.x = -3;
    scene.add(whiteCube);

    var material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        
    });
    drawTorus(scene, material);

    renderer.render(scene, camera);
}


function drawTorus(scene, material) {
    //var torus = new THREE.Mesh(new THREE.TorusGeometry(3, 1, 4, 8), material);
    var torus = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.15, 15, 20), material);
    // var torus = new THREE.Mesh(new THREE.TorusGeometry(3, 1, 4, 8, Math.PI / 3 * 2), material);
    torus.position.z = 1 
    torus.position.x = -2 
    torus.position.y = -1
    
    scene.add(torus);
}
