import Bingo from "./bingo.js";

export default class Card {
  constructor(title) {
    // the constructor is called when you create a new instance of the class
    this.title = title;
    console.log(`Created a new card with title: ${title}`);
  }

  markDone(target) {
    // to mark a card as done, we add a class .bingo__card--done to it
    // 🔥🔥🔥 TODO 5: mark or unmark (toggle) a bingo card when clicked
    console.log("Marking card as done");
    console.log(target);
    // hint: use class .bingo__card--done
  }

  render(counter) {
    // rendering the card to the screen is done by building up a string of HTML
    // after that, we append the HTML to the DOM - check the index.html file to see what structure to use
    console.log("Rendering card...");

    // 🔥🔥🔥 TODO3: build the HTML element and append it to the DOM
    let card = document.createElement("div");
    card.classList.add("bingo__card");
    card.setAttribute("data-number", counter + 1);
    card.innerHTML = `<h4 class="bingo__card-title">${this.title}</h4>`;
    console.log(card)
    //build html element
    //append it to the DOM


    // don't forget to append the child to to DOM
    document.querySelector(".bingo__board").appendChild(card);


    // 🔥🔥🔥 TODO4: when we click an item, we want to check for winners and we want to save the selection to storage
    card.addEventListener("click", (e) => {
    this.markDone(e.target);
    console.log("click");
      // call checkWinner() on the Bingo class
      Bingo.checkWinner();
      // call save() on the Bingo class
      Bingo.save();
      // try to call the save() method on the Bingo class
    });
  }
}
