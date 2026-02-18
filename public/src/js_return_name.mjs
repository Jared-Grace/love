import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_return_on } from "../../../love/public/src/js_return_on.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { js_function_declaration_single_block_body } from "../../../love/public/src/js_function_declaration_single_block_body.mjs";
export function js_return_name(ast) {
  let body_block = js_function_declaration_single_block_body(ast);
  let return_name = null;
  if (list_empty_not_is(body_block)) {
    let last = list_last(body_block);
    js_return_on(last, identifier_if, identifier_not);
  }
  function identifier_not() {
    return_name = "result";
  }
  function identifier_if(argument) {
    let name_argument = property_get(argument, "name");
    return_name = name_argument;
  }
  return return_name;
}
