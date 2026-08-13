import { each } from "./each.mjs";
import { js_tokens_spaced_is } from "./js_tokens_spaced_is.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_tokens_to_code(tokens) {
  "write a list of tokens back out as code text, spaced the way a person would write it.";
  "Deliberately NOT a parse followed by an unparse, which is what this was until the second of August. That round trip is not faithful: a parenthesis the tree does not NEED is dropped on the way out, so ( 3 === 5 ) === false came back as 3 === 5 === false. The one caller then looks for each token the learner has clicked inside this text, to show how much of the answer is built - and looking for a ( that had been dropped threw, in front of the learner, on every unscramble whose subject is a bracket. The tokens are what the learner clicked, so the tokens are what must come back.";
  "The spacing it produces was checked against the unparse it replaces over every question every lesson generates: the two agree everywhere except where the unparse was losing a bracket, and on a trailing newline the unparse added that nothing showed.";
  let pieces = [];
  let previous = null;
  let before = null;
  function add_token(token) {
    let spaced = js_tokens_spaced_is(before, previous, token);
    if (spaced) {
      list_add(pieces, " ");
    }
    list_add(pieces, token);
    before = previous;
    previous = token;
  }
  each(tokens, add_token);
  let code = text_combine_multiple(pieces);
  return code;
}
