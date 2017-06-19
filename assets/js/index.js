'use strict';
const render = (root) => {
	root.empty();
	const wrapper = $('<div class = "wrapper"></div>');
	wrapper.append(Header());
	if(state.status == null){
		wrapper.append(PokeSearch());
	}/*else{
		wrapper.append(PokeDetails());
	}*/
	root.append(wrapper);
}

const state = {
	pokes: null,
	status: null //filtrado o no
};

$( _ => {
	getJSON('http://pokeapi.co/api/v2/pokedex/1/',(err,json) =>{
		if(err){ return alert(err.message);}
		state.pokes = json;
       	const root = $('#root');
		render(root);
	//state.doRender = render.bind(null,root);
	});	
})