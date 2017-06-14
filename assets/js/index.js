'use strict';
const render = (root) => {
	root.empty();

	const wrapper = $('<div class = "wrapper"></div>');
	wrapper.append(Header());
	wrapper.append(PokeSearch());

	/*if(state.status == null){
		wrapper.append(PokeSearch());
	}else{
		wrapper.append(PokeDetails());
	}*/
	root.append(wrapper);
}

const state = {
	poke: null,
	status: null //selecionado o no
};

$( _ => {
	const root = $('#root');
	render(root);
	//state.doRender = render.bind(null,root);
})