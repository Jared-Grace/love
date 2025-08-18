import { js_return_on } from "./js_return_on.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { log } from "./log.mjs";
import { list_last } from "./list_last.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_declaration_single_block_blody } from "./js_declaration_single_block_blody.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_return_name(ast) {
  let body_block = js_declaration_single_block_blody(ast);
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
