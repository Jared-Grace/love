import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { assert_json } from "./assert_json.mjs";
export function js_identifier_expression(identifier_name) {
  "A plain name, read as the thing a name stands for, and refused if it turns";
  "out to be anything more than a name.";
  "This refusal is the whole reason the family above it can be handed a standing";
  "approval. An argument holding source text covers everything the text could";
  "say, so no approval can be given once and trusted after; an argument that has";
  "to be one bare name says exactly one thing, and checking it here is what makes";
  "that true rather than hoped for.";
  let expression = js_parse_expression(identifier_name);
  let plain_is = js_identifier_is(expression);
  assert_json(plain_is, {
    hint: "this argument has to be a single plain name, not something to work out — would you like to pass a name that is already in scope?",
    identifier_name,
  });
  return expression;
}
