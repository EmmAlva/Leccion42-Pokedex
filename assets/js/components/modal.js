'use strict';
 $('.modal').modal();
const PokeDetails = (number, showModal) => {
    //showModal.empty();
    const div = $('<div id="modal1" class="modal"></div>');
	const modalContent = $('<div class="modal-content"></div>');
 	const imgModal = $('<img class="responsive-img pokeImg" src ="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+("00"+number).slice(-3)+'.png">');  
    const specie = $("<div></div>");
    const informacion = $('<div class = "information"></div>');
	const close = $('<img src="assets/icon/cross-out.png" alt="cross">');

	div.append(modalContent);	
	modalContent.append(imgModal);  
    modalContent.append(specie);
    modalContent.append(informacion);
	modalContent.append(close);    
      
    var sexo = $('<span></span>');
    informacion.append(sexo);
      
     
    
  function imgSelected(number){
	
     $.getJSON("http://pokeapi.co/api/v2/pokemon/"+number+"/",function(respon){      
         
        var ability = $('<span></span>');
         var nameAbi = respon.abilities.name;
         ability.text(nameAbi);
         informacion.append(ability);
        
        var weight = $('<span></span>');
         var nameWeight = respon.weight;
        weight.text(nameWeight);
         informacion.append(weight);
         
      var height = $('<span></span>');
     var nameHeight = respon.height;
    height.text(nameHeight);
     informacion.append(height);
        
    var types = $('<div class = "type"></div>');
        var tipo1 = $('<a href="#"></a>');
          var nameType1 = respon.types[0].type.name;
         tipo1.text(nameType1);
         types.append(tipo1);
     informacion.append(types);     
       
         
     });
    
  
    $.getJSON("http://pokeapi.co/api/v2/pokemon-species/"+number+"/",function(response){
       
		var nameSpecie = $("<p></p>");
        var name = response.flavor_text_entries[3].flavor_text;
          nameSpecie.text(name); 
		specie.append(nameSpecie);
        console.log(name);
        
         var category = $('<span></span>');
            var nameCate = response.genera[2].genus;
            category.text(nameCate);
            console.log(nameCate);
         informacion.append(category);   
        
        var weak = $('<div class = "weak"></div>');
        var weak1 = $('<a href="#"></a>');
        var weak2 = $('<a href="#"></a>');
        
	
       
        
          console.log(response);
        
        
    } );
}
    

    return showModal;
    
}

  

