import { html_p } from "./html_p.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { text_is } from "./text_is.mjs";
export function app_replace_rule_set_why_draw(root, why) {
  "A lesson's explanation put on the page, written either as plain words or as a little program that draws its own - a program, so that a symbol can appear as the tile it names instead of as a letter in quotes.";
  if (text_is(why)) {
    let words = html_p_text(root, why);
    return words;
  }
  let drawn = html_p(root);
  why(drawn);
  return drawn;
}
