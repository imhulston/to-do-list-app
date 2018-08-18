function addItem() {
	var newItem = document.createElement("div");
	newItem.innerHTML = document.getElementById("box").value;
	document.getElementById("list").appendChild(newItem);
}

function removeItem() {
			document.getElementById("list").removeChild(this);
		}