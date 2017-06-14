'use strict';

const PokeSearch = () =>{
	const search = $('<div></div>');
	const input  = $('<input type="text" placeholder="">');
	const lupa = $('<i class="fa fa-search" aria-hidden="true"></i>')
	const result = $('<div class="result"></div>');

  search.append(input);
  search.append(lupa);
  search.append(result); //donde se montara la grilla

  input.on('keyup',(e) => {
  	const filter = input.val();
  	reRender(result,filter);
  });
  reRender(result,"");

  return search;
}

const reRender = (container, filter) => {
	container.empty();
	const filteredPoke = filterByPoke(state.poke, filter);
	if(filteredPoke.length > 0){
		$.each(filteredPoke, (index,pokemon) => {
			container.append(PokeItem(pokemon));
			});
	}else{
		container.append($('<p>Pokemon no encontrado</p>'));
	}
}

const PokeItem = (pokemon) => {
	const item = $('<div class="item"></div>');
	const img = $('<img src ="assets/img/'+poke.id);
	const div = $('<div class="features" ></div>');
	const pokeball = $('<img src="assets/img/pokeball_gray.png" alt="pokeballGray">');
	const heart = $('<img src="assets/img/valentines-heart.png" alt="heart">');
	const cross = $('<img src="assets/img/cross-out.png" alt="cross-out">');
	const name = $('<p>'+poke.name+'<p>');

  img.on('click',(e) => {
    e.preventDefault();
    state.status = poke;
  });

  item.append(img);
  item.append(div);
  div.append(pokeball);
  div.append(heart);
  div.append(cross);
  div.append(name);

  return item;


}