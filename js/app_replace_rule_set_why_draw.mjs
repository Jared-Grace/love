import { app_replace_why_words_draw } from "./app_replace_why_words_draw.mjs";
import { html_p } from "./html_p.mjs";
import { text_is } from "./text_is.mjs";
export function app_replace_rule_set_why_draw(root, why) {
  "A lesson's explanation put on the page, written either as plain words or as a little program that draws its own.";
  "A sentence gets its quoted symbols drawn as the tiles they name, which is what the whole set of lessons is written as; a drawing program is for the lesson that wants a shape a sentence has no way of holding.";
  let p = html_p(root);
  if (text_is(why)) {
    app_replace_why_words_draw(p, why);
    return p;
  }
  why(p);
  return p;
}
