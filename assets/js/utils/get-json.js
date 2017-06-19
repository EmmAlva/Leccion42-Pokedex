'use strict';

const getJSON = (url, cb) => { //cb: callback
	const xhr = new XMLHttpRequest();
	xhr.addEventListener('load', () => {
		if(xhr.status !== 200) { // 200: esta disponible
			return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
		}
		cb(null, xhr.response);
	});
    
	xhr.open('GET', url);
	xhr.responseType = 'json';
	xhr.send();
};