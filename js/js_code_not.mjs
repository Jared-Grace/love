import { fn_name } from "./fn_name.mjs";
import { js_code_prefix } from "./js_code_prefix.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
export function js_code_not(code) {
  ("the code !x - the given code with a not in front of it. The twin of ",
    fn_name("js_code_negation"),
    ", which is the same shape with a minus and so could not carry this one as well.");
  ("Four lessons in the code app were each spelling this out of ",
    fn_name("js_code_prefix"),
    " and a symbol read off the bang operator, which is three lines apiece to say one thing.");
  let symbol = js_operator_bang_symbol();
  let prefixed = js_code_prefix(symbol, code);
  return prefixed;
}
