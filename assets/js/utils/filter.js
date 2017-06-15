'use strict';

const filterByPoke = (pokes, query) => {
	console.log(pokes);
	
	return pokes.filter((pokemon) => {
		return pokemon.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
	});
}




/*NOTA: revisar el consola cada const-function que se cree*/