// targets the button

const colorBtn = document.querySelector('.colorBtn');

//targets the body

const bodyBcg = document.querySelector('body');

//array that holds the background colors

const colors = [ 'yellow', 'green', 'red', '#3b5998' ];

// adds event listernor so something actually happens when button is targeted

colorBtn.addEventListener('click', changeColor);

function changeColor() {
	//allows to get random color from the array "colors"
	//bodyBcg.style.backgroundColor = colors[2];

	let random = Math.floor(Math.random() * colors.length);

	bodyBcg.style.backgroundColor = colors[random];
}
