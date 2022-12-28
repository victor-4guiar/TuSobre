let cuenta = {
	nombre: null,
	descripcion: null,
	genero: null,
	cadeado: true
}

function load(){
	if (cuenta.cadeado == true){
		aler = document.createElement('section');
		aler.setAttribute('id', 'aler');
		aler.classList.add('section');
		aler.innerHTML = `
			<h1>Não tens conta.</h1>
			<button onclick="criar(aler)">Criar</button>
		`;
		document.getElementById('main').appendChild(aler);
	}else if(cuenta.cadeado == false){
		menu = document.createElement('section');
		menu.setAttribute('id', 'menu');
		menu.classList.add('section');
		menu.innerHTML = `
			<h1>Teste.</h1>
		`;
		document.getElementById('main').appendChild(menu);
	}
}

function criar(group){
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
			<input type="button" name="hecho" id="hecho" value="Hecho">
		</section>
	`;
	document.getElementById('main').appendChild(forma);
}