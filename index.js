window.onload =function() {

	word =document.getElementsByTagName('input')[0];
	button =document.getElementsByTagName('input')[1];
	getAll =document.getElementsByTagName('input')[2];

	button.onclick =function() {
		ajaxFunction(); 
		searchRequest();
	}

	getAll.onclick =function() {
		getAll.setAttribute('all','true');
		ajaxFunction(); 
		getAllDefinitions();
	}
};

function ajaxFunction() {

	if (window.XMLHttpRequest) 
		httprequest =new XMLHttpRequest();
	else 
		httprequest =new ActiveXObject('Microsoft.XMLHTTP');
}

function searchRequest() {

	var url = "request.php?q="+word.value;
   
	httprequest.onreadystatechange = processSearch;
	httprequest.open("GET", url);
	httprequest.send();
}

function processSearch() {
	
	var output =document.getElementById('result');

	if (httprequest.readyState === XMLHttpRequest.DONE) {
		if (httprequest.status === 200) {
		 	response = httprequest.responseText;
		 	if (response.length <500) {
		 		output.innerHTML ='<h3> Result </h3>'+response;
			}
			else {
				response ='no result found';
				output.innerHTML ='<h3> Result </h3>'+response;
			}
		}
	}
}

function getAllDefinitions() {

	var url = "request.php?q="+getAll.getAttribute('all');
	httprequest.onreadystatechange = searchAll;
	httprequest.open("GET", url);
	httprequest.send();
}

function searchAll() {

	var output =document.getElementById('result');
	var list = document.createElement('ol');
	output.innerHTML ='<h3> Result </h3>';

	if (httprequest.readyState === XMLHttpRequest.DONE) {
		if (httprequest.status === 200) {
		 	response = httprequest.responseXML;
		 	definitions =response.getElementsByTagName('definition');
            output.appendChild(list);
         
            for (var i = 0; i < definitions.length; i++) {

            	var definition =document.createElement('li');
            	var heading =document.createElement('h3');
            	var p1 =document.createElement('p');
            	var p2 =document.createElement('p');

            	var word =document.createTextNode(definitions[i].getAttribute('name'));
            	heading.appendChild(word);
				
				var meaning =document.createTextNode(definitions[i].childNodes[0].nodeValue);
            	p1.appendChild(meaning);

            	var author =document.createTextNode('-'+definitions[i].getAttribute('author'));
            	p2.appendChild(author);

                definition.appendChild(heading);
                definition.appendChild(p1);
                definition.appendChild(p2);
                list.appendChild(definition);
            } 
		}
		else 
			response ='There was a problem with the request, could not get definition';
	}
}
