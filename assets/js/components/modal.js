'use strict';

const PokeDetails = () =>{
	const div = $('<div id="pokeModal class="modal"></div>');
	const content = $('<div class="modal-content"></div>');
	const description = $('<div class= col m6></div>');
	const close = $('<img src="assets/icon/cross-out.png" alt="cross">');

	div.append(content);
	content.append(description);
	content.append(close);


 /*<!-- Modal Structure -->
  <div id="pokeModal" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>*/

}