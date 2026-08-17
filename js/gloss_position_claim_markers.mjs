export function gloss_position_claim_markers() {
  "The turns of phrase an explanation uses when it says where its word stands among the words around it - which one comes before it, which after, whether it opens or closes what it is in.";
  "A claim of this shape is a matter of fact and the passage settles it, which is what makes it worth finding. It is also the claim an author is likeliest to get wrong, because it is checked by counting along a line rather than by knowing the language.";
  "They are matched against wording already lowered, so each is written in lower case here. Each one carries the space that has to stand before it, and the wording it is matched against is given a space at the front, so a phrase opening a sentence still finds one.";
  "The reading beside this one asks how often a word stands in its chapter. This one asks where it stands in its own line, and neither can answer the other's question: a word may stand in the right verses and still be said to open a line it closes.";
  "This is a net and not a verdict. A word's own parts sit in an order too, so 'the prefix just before the root' is caught here as well - a reader sees at once that it is not about the line, and the cost of catching it is one glance.";
  let markers = [
    " just before",
    " just after",
    " the word before",
    " the word after",
    " the word just",
    " the words before",
    " the words after",
    " word earlier",
    " words earlier",
    " word later",
    " words later",
    " earlier in this verse",
    " later in this verse",
    " earlier in the verse",
    " later in the verse",
    " stands earlier",
    " stands later",
    " opens the verse",
    " opens this verse",
    " opened the verse",
    " opened this verse",
    " opening the verse",
    " opens the line",
    " opened the line",
    " closes the verse",
    " closes this verse",
    " closed the verse",
    " closing the verse",
    " closes the line",
    " closes it",
    " closing it",
    " begins the verse",
    " ends the verse",
    " the first word",
    " the last word",
    " at the start of the verse",
    " at the end of the verse",
  ];
  return markers;
}
