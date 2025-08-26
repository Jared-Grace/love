import { js_return_on } from "./js_return_on.mjs";
import { list_last } from "./list_last.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_declaration_single_block_body } from "./js_declaration_single_block_body.mjs";
export function js_return_name(ast) {
  let body_block = js_declaration_single_block_body(ast);
  let return_name = null;
  if (list_empty_not_is(body_block)) {
    let last = list_last(body_block);
    js_return_on(last, identifier_if, identifier_not);
  }
  function identifier_not() {
    return_name = "result";
  }
  function identifier_if(argument) {
    let { name: name_argument } = argument;
    return_name = name_argument;
  }
  return return_name;
}
