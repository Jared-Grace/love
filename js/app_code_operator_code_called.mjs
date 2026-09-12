import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_operator_code_called(symbol, inside_code) {
  arguments_assert(arguments, 2);
  ("an operator written as a name with the code it acts on gathered into brackets behind it: Math.floor(14 / 4), and Math.floor(3.5)");
  ("The brackets go on whatever is inside, always, and that is the whole difference from the one-sided spelling with nothing between the two. A value inside keeps them where a gathering would drop them, which is what a learner needs: they pressed the division, and the line that comes back has to still be a line.");
  let wrapped = js_code_wrap_parenthesis(inside_code);
  let code = text_combine(symbol, wrapped);
  return code;
}
