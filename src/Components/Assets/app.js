function updateUI(){
    let list = document.getElementById('list');
list.innerHTML = "";

    //reading data from table in websql
window.db.transaction(function (e) { 
e.executeSql('SELECT * FROM TODO', [], function (e, result) { 
for(let i=0;i<result.rows.length;i++){
                let list = document.getElementById('list');

                let title = document.createElement('h1');
                let description = document.createElement('span');

title.innerText = result.rows.item(i).title;
description.innerText = result.rows.item(i).description;

                let item = document.createElement('div');
item.className = "item";

item.appendChild(title);
item.appendChild(description);
let deleteButton = document.createElement('button');
deleteButton.innerText = "Delete";
deleteButton.addEventListener("click", function() {
  deleteTodoItem(result.rows.item(i).id);
});
item.appendChild(deleteButton);

list.appendChild(item);
            }   
        }, null); 
    });
}

function addTodo(){

    let title = prompt("Enter Todo Title");
if(title == '')
alert("Title is empty!");

    let description = prompt("Enter Todo Description");
if(description == "")
alert("Description is empty!");

window.db.transaction(function (e) { 
e.executeSql(`INSERT INTO TODO (id, title, description) VALUES ("${new Date().valueOf()}", "${title}", "${description}")`); 
    }); 

updateUI();
}
function deleteTodoItem(id) {
    window.db.transaction(function (e) { 
      e.executeSql(`DELETE FROM TODO WHERE id = "${id}"`); 
    }); 
    updateUI();
  }

function initializeDatabase(){
    //initializing a websql database
    let db = openDatabase('TodoDatabase', '1.0', 'TodoDatabase', 2 * 1024 * 1024);

window.db = db;

    //creating a table in websql
db.transaction(function (e) {   
e.executeSql('CREATE TABLE IF NOT EXISTS TODO (id, title , description)'); 
updateUI();
    });
}

initializeDatabase();