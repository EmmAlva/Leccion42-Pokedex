'use strict';


const PokeItem = (pokemon) => {
	const item = $('<div class="item col s3"></div>');   
	const changeNum = ("00"+pokemon.entry_number).slice(-3);
	const img = $('<img data-target="modal1" class="btn responsive-img pokeImg" src ="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+changeNum+'.png">');
	const div = $('<div class="features" ></div>');
	const pokeball = $('<img class="btn btn-floating pulse" src="assets/icon/pokeball_gray.png" alt="pokeballGray">');
	const heart = $('<img src="assets/icon/valentines-heart.png" alt="heart">');
	const data = $('<img src="assets/icon/data.png" alt="data">');
	const name = $('<p>'+pokemon.pokemon_species.name+'<p>');     

img.on('click',(e) => {
    e.preventDefault();
     $('.modal-content').remove();
     PokeDetails(pokemon.entry_number,$('.modal'));
     
  });
  /*function ajustar(tam, num){
  	if (num.toString().length <= tam) return ajustar(tam, "0" + num)
  	else return num;
	}
  }*/
  item.append(img);
  item.append(div);
  div.append(pokeball);
  div.append(heart);
  div.append(data);
  div.append(name);

  return item;
  console.log(a);
}

const PokeSearch = () =>{
	const search = $('<div></div>');
	const input  = $('<input type="text" placeholder="">');
	const lupa = $('<i class="fa fa-search" aria-hidden="true"></i>');
	const contenedor = $('<div class=" container"></div>');
    const result = $('<div class="result row"></div>');

  search.append(input);
  search.append(lupa);
  result.append(contenedor);
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
	const pokeData = state.pokes.pokemon_entries;
	const filteredPoke = filterByPoke(pokeData,filter);
	//console.log(filteredPoke);

	if(filteredPoke.length > 0){
		$.each(filteredPoke, (index,pokemon) => {
			container.append(PokeItem(pokemon));
			//console.log(pokemon);
			}); 
	}else{
		container.append($('<p>Pokemon no encontrado</p>'));
	}

}

