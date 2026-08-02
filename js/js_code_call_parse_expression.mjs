import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_code_call_parse_expression(f_name) {
  arguments_assert(arguments, 1);
  ("A call on a function of this name, standing as a piece of parsed code and");
  ("holding nothing between its brackets yet.");
  ("Every transform that puts a call where something else stood - a chain of");
  ("questions turned into one named question, an operator turned into the function");
  ("that spells it - starts from an empty call and fills the brackets afterwards.");
  ("Writing the call out as words and reading those words back as code always");
  ("arrive together, and the words in between are never wanted on their own.");
  let code = js_code_call(f_name);
  let expression = js_parse_expression(code);
  return expression;
}
