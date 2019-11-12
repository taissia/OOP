// document

let sisu;

sisu = document; // sisu HTMLis
sisu = document.all; // HTML tagid kasutamisjärjekorras
sisu =  document.all[2]; // konkreetne HTML tag
sisu = document.all.length; // palju on HTMl tagi kasutamisel

// dokumendi omadused

sisu = document.head; // head sisu
sisu = document.body; //body sisu
sisu = document.doctype; // doctype
sisu = document.domain;
sisu = document.URL;
sisu = document.characterSet; 
sisu = document.contentType;

// formi andmed
sisu = document.forms; // kõik formid
sisu = document.forms[0]; // esimene form 
sisu = document.forms[0].id; //esimese formi ID
sisu = document.forms[0].method;
sisu = document.forms[0].action;

// lingide andmed
sisu = document.links; // küik lingid
sisu = document.links[0]; // esimene link
sisu = document.links[0].className; // lingi class
sisu = document.links[0].classList[1]; // klasside massiiv ja sealt elemendi lugemine


console.log(sisu);
