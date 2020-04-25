function init(){
	var scene = new THREE.Scene(); //создание сценыы
	var camera = new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight,0.1,10000); //создание камеры

	//render
	var render = new THREE.WebGLRenderer({antialias: true}); //добавление рендера
	render.setSize(window.innerWidth,window.innerHeight); //размер рендера
	render.setClearColor(0xFFFFFF); //цвет фона
	document.body.appendChild(render.domElement); //добавление рендера

	camera.position.z = 400; //смещение камеры
	camera.position.y = 400; //смещение камеры

	//light
	var light = new THREE.DirectionalLight( 0xfff7e8, 0.5); //направленный свет
	scene.add(light)

	var amColor = '#faffe3';
	var amLight = new THREE.AmbientLight(amColor); //рассеянный свет
	scene.add(amLight);

	//meshes
	var floor = new THREE.Mesh(
		new THREE.PlaneGeometry(1000,1000,100,100),
		new THREE.MeshBasicMaterial({color: 0x6E30FF,wireframe: false})
	);
	floor.rotation.x -= Math.PI / 2;

}
