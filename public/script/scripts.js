const cards = document.querySelectorAll('.card');

for (let card of cards){
	card.addEventListener ('click' , function (){
		const recipeIndex = card.getAttribute('id');
		window.location.href = `/recipes/${recipeIndex}`;

		// const title = card.querySelector('.title_recipe').innerText; // atribui o texto que contém 
		// const author = card.querySelector('.card_chef').innerText;

		// modalOverlay.classList.add('active');
		// modalOverlay.querySelector('img').src = `/assets/${imageId}`;
		// modalOverlay.querySelector('.title-modal').innerHTML = `${title}`;
		// modalOverlay.querySelector('.chef-modal').innerHTML = `${author}`;
	});
}

// const closeModal = document.querySelector('.close-modal');

// closeModal.addEventListener('click', function (){
// 	modalOverlay.classList.remove('active'); // remove classe active p/ fechar modal
// 	modalOverlay.querySelector('img').src = '';
// });