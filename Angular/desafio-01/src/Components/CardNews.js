class CardNews extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });
		shadow.appendChild(this.build());
		shadow.appendChild(this.styles());
	}
	build() {
		const componentRoot = document.createElement("div");
		componentRoot.setAttribute("class", "card");

		const cardLeft = document.createElement("div");
		cardLeft.setAttribute("class", "card_left");

		const autor = document.createElement("span");
		autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

		const linkTitle = document.createElement("a");
		linkTitle.textContent = this.getAttribute("title");
		linkTitle.href = this.getAttribute("link-url");

		const newsContent = document.createElement("p");
		newsContent.textContent = this.getAttribute("content");

		cardLeft.appendChild(autor);
		cardLeft.appendChild(linkTitle);
		cardLeft.appendChild(newsContent);

		const cardRight = document.createElement("div");
		cardRight.setAttribute("class", "card_right");

		const newsImage = document.createElement("img");
		cardRight.appendChild(newsImage);
		newsImage.src =
			this.getAttribute("photo") || "assets/images/no-image-found.png";
		newsImage.alt = "Foto da Noticia";

		componentRoot.appendChild(cardLeft);
		componentRoot.appendChild(cardRight);

		return componentRoot;
	}

	styles() {
		const style = document.createElement("style");
		style.textContent = `

		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			font-family: Helvetica, sans-serif;
		}
		.card {
			display: flex;
			flex-direction: row;
			width: 80%;
			margin-top: 40px;
			justify-content: space-between;
			box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
			-webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
			-moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
		}


		.card_left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-left: 10px;
		}

		.card_left > span {
			font-weight: 500;
		}

		.card_left > a {
			color: black;
			text-decoration: none;
			font-weight: bold;
			margin-top: 10px;
			font-size: 30px;
		}

		.card_left > p {
			color: rgb(75, 72, 72);
			font-size: 20px;
			font-weight: 300;
		}


		.card_right img {
			width: 400px;   
			margin-bottom: -5px;
		}

				
				
		`;

		return style;
	}
}

customElements.define("card-news", CardNews);
