import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function app_index_card_caption(card, text) {
  "the line under a card's button on the index page, saying what the thing it opens is for. a card with nothing to say leaves the line out rather than showing an empty one";
  "Its own thing because the two kinds of card - one holding a lambda, one holding an address - differ in the button and in nothing else. Written out in each of them, the day one grows a second line the other quietly keeps having one.";
  let has_text = text_empty_not_is(text);
  if (has_text) {
    html_div_text_centered(card, text);
  }
}
