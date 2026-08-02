import { text_combine_3 } from "./text_combine_3.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_property_expression(object_name, property_name) {
  arguments_assert(arguments, 2);
  ("One named thing read out of another named thing - two names and nothing that");
  ("has to be worked out.");
  ("Both halves are read as plain names first and refused if they turn out to be");
  ("anything more, which is what lets everything built on this keep a standing");
  ("approval: joining two names can only ever say the one thing, while joining two");
  ("written lines could say anything at all.");
  ("This is the shape a value takes when it is already in scope but only as part");
  ("of something larger - a record being looped over, an answer with several");
  ("fields - and until it existed such a value could be reached only by writing a");
  ("line, which is the one shape no standing approval covers.");
  js_identifier_expression(object_name);
  js_identifier_expression(property_name);
  let text = text_combine_3(object_name, ".", property_name);
  let expression = js_parse_expression(text);
  return expression;
}
