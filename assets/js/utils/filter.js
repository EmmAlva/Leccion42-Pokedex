'use strict';

const filterByPoke = (poke, query) => {
	return poke.filter((pokemon) => {
		return poke.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
	});
}