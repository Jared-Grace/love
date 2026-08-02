import { js_prose_statement } from "./js_prose_statement.mjs";
import { js_selects_statement_add_generic } from "./js_selects_statement_add_generic.mjs";
export function js_selects_prose_add_generic(
  ast,
  selects,
  sentence,
  index_delta,
) {
  "Writes one sentence of an account beside a chosen line in the block that line sits in";
  "Until this an account could only be written at the top of a block so a line explaining one step in the middle of a function was a hand edit every time";
  "The written value stays inside this family so the two commands standing on it carry only an address and a sentence";
  ("The sentence becomes a real statement here rather than a stripped comment which is why it survives the round trip");
  let statement = js_prose_statement(sentence);
  js_selects_statement_add_generic(ast, selects, statement, index_delta);
}
