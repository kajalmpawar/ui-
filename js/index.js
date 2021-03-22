
let input = document.getElementById('content');
let add = document.getElementById('add');
let list = document.getElementById('list');
let err = [];
function addItem() {
	

	input.value = input.value.trim();
     if (input.value !== ""){
		
		let li = document.createElement('li');
		li.innerText = input.value;
		list.appendChild(li);
        document.getElementById('content').value = '';
}else {
    alert("You have not entered any item to the list!");
}
        } 

add.addEventListener('click', addItem);