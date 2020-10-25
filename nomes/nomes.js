var minhaLista = [];
var carro = {
	nome: 'Fox',
	marca: 'Volkswagem',
	combustivel: 'etanol',
	cor: 'preto',
	ano: 1980,
};
function add() {
	var carro = [];
	console.log('add()');

	var nome = document.getElementById('inputNome').value;
	var marca = document.getElementById('inputMarca').value;
	var combustivel = document.getElementById('inputCombustivel').value;
	var cor = document.getElementById('inputCor').value;
	var ano = document.getElementById('inputAno').value;

	carro.push(nome);
	carro.push(marca);
	carro.push(combustivel);
	carro.push(cor);
	carro.push(ano);
	console.log('Carro: ', carro);

	minhaLista.push(carro);

	console.log(minhaLista);
	list();
}

function remove() {
	console.log('remove()');

	minhaLista.pop();

	console.log(minhaLista);
	list();
}

function list() {
	console.log('list()');

	var lista = '<ul>';
	for (var row = 0; row < minhaLista.length; row++) {
		console.log('Row' + row + ': ' + minhaLista[row]);
		var celula = '';
		for (var col = 0; col < minhaLista[row].length; col++) {
			console.log('Col' + col + ': ' + minhaLista[row][col]);
			celula += ' - ' + minhaLista[row][col];
		}
		lista += '<li>' + celula + '</li>';
	}
	lista += '</ul>';

	document.getElementById('lista').innerHTML = lista;

}

function clear() {
	console.log('clear()');
	minhaLista = [];
}