var tablediv = document.getElementById("firstbets-div");

function createFirstBets() {
    
    var table = document.createElement('table')
    table.setAttribute('id', 'gridtable');
    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
for(var i = 0; i < 19; i++) {
    //make 19 rows
    var row = document.createElement('tr');
    //name them appropriately (row0 - row18)
    row.setAttribute('class', `row${i}`);
    //add row to table
    table.appendChild(row);
    for(var j = 0; j < 19; j++) {
        //create cells in each row + add to table
        var cell = document.createElement('td');
        cell = row.insertCell(j);
        //in those cells add a button
        var button = document.createElement('input');
        //name them (btn_r0c0 - btn_r18c18)
        button.setAttribute('class', `gamePiece`);
        button.setAttribute('id', `btn_r${i}c${j}`);

        //set all attributes
        button.setAttribute('type', 'button');
        //button.onclick = function(){};
        button.onclick = function(){setColor(this)};
        //add to table
        cell.appendChild(button);
    }
}
tablediv.appendChild(table);
}

