import { assert_json } from "./assert_json.mjs";
import { js_literal_boolean_is } from "./js_literal_boolean_is.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_expression_boolean(word) {
  "A plain yes or no, read as the value it says, and refused if it turns out to be anything more than one of those two words.";
  "The refusal is the whole reason the two verbs above it can be handed a standing approval. The word is read as code and then checked to be nothing but true or false, so a call dressed as an argument is caught here rather than written into a file, and the path stays approvable once instead of every time.";
  let expression = js_parse_expression(word);
  let b = js_literal_boolean_is(expression);
  let v = {
    hint: "this argument has to be written out as true or false and nothing else - would you like one of those two words?",
    word,
  };
  assert_json(b, v);
  return expression;
}
