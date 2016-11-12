<?php
	// accept a term (keyword)
	// respond with a value
	$query =$_GET['q'];
	$definition = [
	    "definition" => "A statement of the exact meaning of a word, especially in a dictionary.",
	    "bar" => "A place that sells alcholic beverages",
	    "ajax" => "Technique which involves the use of javascript and xml (or JSON)",
	    "html" => "The standard markup language for creating web pages and web applications.",
	    "css" => "A style sheet language used for describing the presentation of a document written in a markup language.",
	    "javascript" => "A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.",
	    "php" => "A server-side scripting language, and a powerful tool for making dynamic and interactive websites",
	];
	if ($query == 'true') {
		
		$all ='<?xml version="1.0" encoding="UTF-8"?>
		<entries> 
			<definition name="Definition" author="Seamus"> 
				a statement of the exact meaning of a word, especially in a dictionary. 
			</definition> 
			<definition name="Bar" author="Charles"> 
				a place that sells alcholic beverages 
			</definition> 
			<definition name="Ajax" author="Chevon"> 
				technique which involves the use of javascript and xml (or JSON)
			</definition> 
			<definition name="HTML" author="Devon"> 
				The standard markup language for creating web pages and web applications.
			</definition> 
			<definition name="CSS" author="Marianne"> 
				A style sheet language used for describing the presentation of a document written in a markup language.
			</definition> 
			<definition name="Javascript" author="Fred"> 
				A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.
			</definition> 
			<definition name="PHP" author="Stephen"> 
				A server-side scripting language, and a powerful tool for making dynamic and interactive websites
			</definition> 
		</entries>
		';
		header('Content-Type: text/xml');
		$xml = new SimpleXMLElement($all);
		echo $xml->asXML();
	}
	else {
		print "<h3>" . strtoupper($query) . "</h3>";	
		print "<p>" . $definition[$query] . "</p>";
	}
?>
