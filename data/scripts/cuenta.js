let cuenta = { //Setup de la cuenta
	nombre: localStorage.getItem("lnombre"),
	descripcion: null,
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
			<input type="button" value="logar" id="logar" class="logar" />
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
			<input type="button" name="hecho" id="hecho" value="Hecho" onclick="enviar()">
		</section>
	`;
	document.getElementById('main').appendChild(forma);
}

function enviar(){//Enviar los datos para que pueden ser tratados depues
	let nnombre = document.getElementById('nombre').value;
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
			filtrar(ngenero, nnombre);
		}else if(ngenero[1].checked){
			ngenero = 'Mujer';
			filtrar(ngenero, nnombre);
		}else if(ngenero[2].checked){
			ngenero = 'Otro';
			filtrar(ngenero, nnombre);
		}else{
			window.alert('Esqueció de configurar el genero.');
		}
	}
}

function filtrar(ngenero, nnombre){ //Filtrar los datos(descargalos en su navegador)
	document.getElementById('form').remove();
	cuenta.nombre = nnombre;
	cuenta.genero = ngenero;
	localStorage.setItem('lnombre', cuenta.nombre);
	localStorage.setItem('lgenero', cuenta.genero);
	console.log(`${localStorage.getItem("lnombre")}, ${localStorage.getItem("lgenero")}`);
	load();
}

function deletar(group){//Remover los datos(incluso de su navegador)
	group.remove();
	cuenta.cadeado = true;
	cuenta.nombre = null;
	cuenta.genero = null;
	localStorage.removeItem("lnombre");
	localStorage.removeItem("lgenero");
	load();
}