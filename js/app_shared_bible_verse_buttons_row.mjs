import { arguments_assert } from "./arguments_assert.mjs";
import { html_p } from "./html_p.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
export function app_shared_bible_verse_buttons_row(p_verse) {
  arguments_assert(arguments, 1);
  let bottom = html_p(p_verse);
  html_centered(bottom);
  ("the row under the verse is simply shown. It was reached through a name holding whether it was hidden and a function flipping that name, but the flipping was asked for exactly once and nothing else ever read the name, so the pair could only ever end one way - hidden set to true and immediately turned over. Whatever once turned it back has gone, and until it returns the machinery said nothing the one line does not.");
  html_display_none_or_block(false, bottom);
  ("the row starts empty: what goes in it, and in what order, is said in one place by whoever fills it, so the order the human asked for - copy and share first, the ways out after - is not split between two functions.");
  return bottom;
}
