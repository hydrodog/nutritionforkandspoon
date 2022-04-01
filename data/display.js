
function display() {
    var t = document.getElementById("nutrition");
    var foods = f["FoundationFoods"];
    for (var i = 0; i < foods.length; i++) {
	var food = foods[i];
	var row = document.createElement("tr");
	var name = document.createElement("td");
	console.log(food.description);
        var cellText = document.createTextNode(food.description);
	name.appendChild(cellText);
	row.appendChild(name);

	var nutrients = document.createElement("td");
	for (var j = 0; j < food.nutrients; j++) {
	    var cellText = document.createTextNode();
	   nutrients.appendChild(cellText);
	    row.appendChild(nutrients);
	    t.appendChild(row);
	}
    }	
}
