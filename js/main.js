(() => {
	// this is a self invoking anonymous function
	console.log('fired!');
	// these are the elements that you want to reference on the page (the icons in this case)
	// querySelector gets one result
	let icons = document.querySelectorAll("svg");

	console.log(icons);


	icons.forEach(
		monster=> monster.addEventListener("click", iconClicked)
	);


	let selectMonster=document.querySelector("#selectMonster");
	let title= document.querySelector("#title");

	function iconClicked(){
		console.log("clicked on a graphic - this monster: ",this.id);
		selectMonster.innerHTML="clicked on a graphic - this monster ID is: "+this.id;
		this.classList.add("selected");

	}
	
    setTimeout(function() {
      title.textContent = "Here are ten different monsters";
      title.classList.add("selected");
    }, 3000);

	
})();
