import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { js_return_identifier_name } from "../../../love/public/src/js_return_identifier_name.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_return_on_async } from "../../../love/public/src/js_return_on_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
import { js_node_atomize } from "../../../love/public/src/js_node_atomize.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
export async function js_return_atomize(ast) {
  let existing = js_identifiers_names(ast);
  let rs = js_list_type(ast, "ReturnStatement");
  async function lambda(v) {
    let node = property_get(v, "node");
    await js_return_on_async(node, noop, identifier_not);
    async function identifier_not(argument) {
      if (argument === null) {
        return;
      }
      if (false) {
      }
      let v = js_visit_match(ast, argument);
      let variable_name = js_return_identifier_name();
      await js_node_atomize(existing, v, variable_name);
    }
  }
  await each_async(rs, lambda);
  return;
  if (js_node_type_is(node, "ReturnStatement")) {
    let argument2 = property_get(node, "argument2");
    if (js_node_type_is(argument2, "Identifier")) {
      await noop(argument2);
    } else {
      await identifier_not(argument2);
    }
  }
  async function identifier_not(argument) {
    if (argument === null) {
      return;
    }
    if (false) {
    }
    let v = js_visit_match(ast, argument);
    let variable_name = js_return_identifier_name();
    await js_node_atomize(existing, v, variable_name);
  }
}
