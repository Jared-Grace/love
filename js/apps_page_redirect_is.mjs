import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
export function apps_page_redirect_is(text) {
  arguments_assert(arguments, 1);
  ("whether a page is an old address kept alive: it holds nothing but an instruction to go somewhere else instead.");
  ("recognised by what the page DOES rather than by its name being written down somewhere, so keeping one more address alive costs no edit anywhere. A name-list would have to be kept true by hand, and the thing it would be tracking is already plainly visible in the file.");
  ("replacing the address rather than adding to it is what makes it an old address rather than a page. The reader's back button then returns to wherever they came from instead of to the address that no longer answers.");
  let r = text_includes(text, "location.replace(");
  return r;
}
