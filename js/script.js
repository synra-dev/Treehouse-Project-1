document.addEventListener('DOMContentLoaded',() => {
	/******************************************
	Treehouse FSJS Techdegree:
	project 1 - A Random Quote Generator
	******************************************/

	// For assistance: 
	  // Check the "Project Resources" section of the project instructions
	  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

	/*** 
	 * `quotes` array 
	***/
	const quotes = [
		{
			quote: "Imagination is more important than knowledge.",
			source: "Albert Einstein",
			year: "1879-1955",
			img: ['https://quotesnsmiles.com/wp-content/uploads/2016/07/Albert-Einsteins-Picture-Quotes-640x480.jpg',640,480]
		},
		{
			quote: "It does not matter how slowly you go as long as you do not stop.",
			source: "Confucius"
		},
		{
			quote: "All our dreams can come true, if we have the courage to pursue them.",
			source: "Walt Disney",
			year: "1901-1966",
			img: ['https://vignette.wikia.nocookie.net/disney/images/e/e5/Walt_Disney_2.jpg/revision/latest?cb=20170715055910',338,450]
		},
		{
			quote: "I never dreamed about success, I worked for it.",
			source: "Estée Lauder",
			year: "1908-2004"
		},
		{
			quote: "Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult.",
			source: "Avul Pacir Zainulabidin Abdul Kalam",
			year: "1931-2015",
		},
		{
			quote: "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
			source: "Steve Jobs",
			year: "1955-2011",
			img: ['https://i.pinimg.com/originals/27/09/7a/27097a6c6653a4d4f4f6933bb6b0a003.jpg',290,387]
		},
		{
			quote: "There is nothing more powerful in the world than the idea that came in time.",
			source: "Victor Hugo",
			year: "1802-1855",
			img: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg/260px-Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg',300,340]
		},
		{
			quote: "When we close ourselves off, we're not just closing ourselves off to other people, we're closing ourselves off from ourselves and impeding ourselves. When you open up, you allow yourself to be who you are.",
			source: "Amy Cuddy",
		},
		{
			quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
			source: "Aristotle",
		},
		{
			quote: "People of the Philippines, I have returned!",
			source: "General MacArthur",
			citation: "Philippine island of Leyte",
			img: ['https://i.pinimg.com/originals/5f/23/e9/5f23e9f1c775510afa2c3ddf5144da0a.jpg',375,450]
		},
		{
			quote: "Never bend your head. Always hold it high. Look the world straight in the eye.",
			source: "Helen Keller",
			year: "1880-1968",
			img: ['https://wisewomen.com.au/wp-content/uploads/2018/10/WW-Helen-Keller.jpg',540,360]
		},
		{
			quote: "Begin to be now what you will be hereafter.",
			source: "William James",
			year: "1842-1910"
		},
		{
			quote: "Setting goals is the first step in turning the invisible into the visible.",
			source: "Tony Robbins",
		}
	];

	const container = document.querySelector('div.container');
	const thumb = document.getElementById('thumb');
	let lastQuote;
	/***
	 * `getRandomQuote` function
	 	generate a random number using Math
		get a quote from the quotes array using the generated random number



		i addeded a function  to prevent quote from repeating 
	***/
	const getRandomQuote = arr => {
		let randNum;
		while(true) {
			randNum = Math.floor(Math.random() * arr.length);
			if (randNum != lastQuote) {
				break;
			}
		}

		lastQuote = randNum;
		return arr[randNum];
	}


	/***
	 * `printQuote` function
		get a random quote object
		concatenate the property values and print it 
	***/

	function printQuote() {
		const quote = getRandomQuote(quotes);
		let html = `<p class="quote">${quote.quote}</p>
					<p class="source">${quote.source}`;
		if(quote.citation) {
			html += `<span class="citation">${quote.citation}</span>`;
		}
		if(quote.year) {
			html += `<span class="year">${quote.year}</span>`;
		}
		html += `</p>`;

		
		if(quote.img) {
			thumb.style.display = 'block';
			html += `<img src="${quote.img[0]}" id="mainImg" style="
				display: none;
				left: 50%;
	   			top: 50%;
				width: ${quote.img[1]}px;
				height: ${quote.img[2]}px;
				margin-left: -${quote.img[1] / 2}px;
				margin-top: -${(quote.img[2] / 2) + 40}px;
				position: absolute
			">`;

		} else {
			thumb.style.display = 'none';
		}

		document.getElementById("quote-box").innerHTML = html;
	}


	/***
	 * click event listener for the print quote button
	 * DO NOT CHANGE THE CODE BELOW!!
	***/

	document.getElementById('load-quote').addEventListener("click", printQuote, false);

	/***
	 * mouse over event listener for display img
	 * displays img on mouse hover
	***/

	container.addEventListener('mouseover',(e) => {
		if(e.target.id == thumb.id) {
			document.getElementById('mainImg').style.display = 'block';
		}
	});

	container.addEventListener('mouseout',(e) => {
		if(e.target.id == thumb.id) {
			document.getElementById('mainImg').style.display = 'none';
		}
	});

});