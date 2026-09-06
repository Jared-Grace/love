import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
export function app_index_card_caption(card, text) {
  "the line under a card's button on the index page, saying what the thing it opens is for. a card with nothing to say leaves the line out rather than showing an empty one";
  "Its own thing because the two kinds of card - one holding a lambda, one holding an address - differ in the button and in nothing else. Written out in each of them, the day one grows a second line the other quietly keeps having one.";
  "The line itself is handed back, and nothing between here and the page bothers to look at it. It is handed back for the one caller that writes the line again later: how many chapters a language app has published is fetched while the page is already up, and there is no way to put a number into a sentence that was drawn a second ago except to have kept hold of the sentence. A card with nothing to say hands back nothing, which is the same answer as leaving the line out.";
  let has_text = text_empty_not_is(text);
  if (has_text) {
    let caption = html_div_text_centered(card, text);
    return caption;
  }
  return null;
}
