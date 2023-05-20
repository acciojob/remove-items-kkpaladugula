//your JS code here. If required.
function delColor() {
	var dropdown = document.getElementById("colorSelect");
  var selectedIndex = dropdown.selectedIndex;
	//alert("The selectedIndex is: " + selectedIndex)
	dropdown.removeChild(dropdown.options[selectedIndex]);
}