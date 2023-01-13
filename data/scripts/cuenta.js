let cuenta = { //Setup de la cuenta
	nombre: localStorage.getItem("lnombre"),
	descripcion: localStorage.getItem("ldescripcion"),
	genero: localStorage.getItem("lgenero"),
	cadeado: true
}

function load(){ //Load de la pagina
	if(cuenta.nombre != null){ //Si la cuenta ya tienes nombre(luego ya se creó), cambiar el valor de lo cadeado
		cuenta.cadeado = false;
	}
	
	if (cuenta.cadeado == true){//Retorno si no tienes cuenta
		aler = document.createElement('section');
		aler.setAttribute('id', 'aler');
		aler.classList.add('section');
		aler.innerHTML = `
			<h1>No tienes cuenta.</h1>
			<button onclick="criar(aler)">Crear</button>
		`;
		document.getElementById('main').appendChild(aler);
	}else if(cuenta.cadeado == false){//Retorno si tienes cuenta
		menu = document.createElement('section');
		menu.setAttribute('id', 'menu');
		menu.classList.add('section');
		menu.innerHTML = `
			<h1>Detectamos un(a) usuário(a)!</h1>
			<h2>${cuenta.nombre}</h2>
			<p>Qué pretendes hacer?</p>
			<button onclick="lograr(menu)" id="lograr" class="lograr">Lograr</button>
			<button onclick="deletar(menu)" id="deletar" class="deletar">Deletar Cuenta</button>
		`;
		document.getElementById('main').appendChild(menu);
	}
}

function criar(group){//Pagina de crar la cuenta
		group.remove();
		let forma = document.createElement('form');
		forma.setAttribute('id', 'form');
		forma.classList.add('form');
		forma.innerHTML = `
		<section id="section" class="section">
			<h1>Crear tu perfil</h1>
				<div id="nick">
					<p>¿Cómo podremos llamarte?</p>
					<input type="text" id="nombre" maxlength="18" placeholder="Llamame de...">
				</div>
				<div id="gender">
					<p>¿Cual identificas?</p>
					<div id="align">
						<input type="radio" name="gen" id="machoice">
						<label for="machoice">hombre</label>
						<input type="radio" name="gen" id="fechoice">
						<label for="fechoice">mujer</label>
						<input type="radio" name="gen" id="ochoice">
						<label for="ochoice">otro</label>
					</div>
				</div>
				<div id="aboutme">
					<textarea maxlength="150" id="descripcion" class="descripcion" placeholder="Sobre mi"></textarea>
				</div>
			<input type="submit" name="hecho" id="hecho" value="Hecho" onclick="enviar()">
		</section>
	`;
	document.getElementById('main').appendChild(forma);
}

function enviar(){//Enviar los datos para que pueden ser tratados depues
	let nnombre = document.getElementById('nombre').value;
	let ndescripcion = document.getElementById('descripcion').value;
	let ngenero = 
	[
	document.getElementById('machoice'),
	document.getElementById('fechoice'),
	document.getElementById('ochoice')
	];
	
	if(nnombre == false){
		window.alert('Por favor, defina un nick.');
	}else{
		if(ngenero[0].checked){
			ngenero = 'Hombre';
			filtrar(ngenero, nnombre, ndescripcion);
		}else if(ngenero[1].checked){
			ngenero = 'Mujer';
			filtrar(ngenero, nnombre, ndescripcion);
		}else if(ngenero[2].checked){
			ngenero = 'Otro';
			filtrar(ngenero, nnombre, ndescripcion);
		}else{
			window.alert('Esqueció de configurar el genero.');
		}
	}
}

function filtrar(ngenero, nnombre, ndescripcion){ //Filtrar los datos(descargalos en su navegador)
	document.getElementById('form').remove();
	cuenta.nombre = nnombre;
	cuenta.descripcion = ndescripcion;
	cuenta.genero = ngenero;
	localStorage.setItem('lnombre', cuenta.nombre);
	localStorage.setItem('ldescripcion', cuenta.descripcion);
	localStorage.setItem('lgenero', cuenta.genero);
	console.log(`${localStorage.getItem("lnombre")}, ${localStorage.getItem("lgenero")}, ${localStorage.getItem("ldescripcion")}`);
	load();
}

function deletar(group){//Remover los datos(incluso de su navegador)
	group.remove();
	cuenta.cadeado = true;
	cuenta.nombre = null;
	cuenta.genero = null;
	cuenta.descripcion = null;
	localStorage.removeItem("lnombre");
	localStorage.removeItem("lgenero");
	localStorage.removeItem("ldescripcion");
	load();
}

function lograr(menu){ //Lograr en la cuenta
	menu.innerHTML = `
			<div id="header" class="header">
				<h1 id="nombre" class="nombre">${cuenta.nombre}</h1>
			</div>
			<p id="descripcion" class="descripcion">${cuenta.descripcion}</p>
			<button onclick="deslograr()" id="deslograr" class="deslograr">Deslograr</button>
	`;
	if(cuenta.descripcion == false){
		document.getElementById('descripcion').remove();
	}
}

function deslograr(){
	menu.remove();
	load();
}