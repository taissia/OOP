// docemnt meetodid
// single element selectors

sisu = document.getElementById('add-task'); // HTML sisu
sisu = document.getElementById('add-task').id; //id
sisu = document.getElementById('add-task').className;


sisu = document.getElementById('title');
id = document.getElementById('title').id;
klass = document.getElementById('title').className;

// stiliseerimine

sisu.style.background = '#333';
document.getElementById('title').style.background = '#eee';
sisu.style.color = '#fff';
sisu.style.padding = '5px';
// sisu.style.display = 'none';

console.log(sisu);