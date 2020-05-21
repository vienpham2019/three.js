let scene = new THREE.Scene()

let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.z = 4
camera.position.x = 1
camera.position.y = 1

let renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setClearColor("#e5e5e5")
renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement)

window.addEventListener("resize" , () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
})

let geometry = new THREE.BoxGeometry(1 , 1 , 1)
let material = new THREE.MeshLambertMaterial({color: 0xFFCC00})
let mesh = new THREE.Mesh(geometry , material)

let controls = new THREE.OrbitControls( camera, renderer.domElement );

// mesh.position.x = 2
// mesh.rotation.set(10,0,0)
// mesh.scale.set(1,2,1)

scene.add(mesh)

let light = new THREE.PointLight(0xFFFFFF, 1 ,500)
light.position.set(10,15,25)
scene.add(light)

const render = () => {
    requestAnimationFrame(render)
    renderer.render(scene,camera)
}

render()
