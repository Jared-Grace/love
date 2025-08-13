import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_assert } from "./object_property_exists_assert.mjs";
import { list_previous } from "./list_previous.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_of_previous } from "./list_index_of_previous.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { js_stack_last } from "./js_stack_last.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { js_visit_each_async } from "./js_visit_each_async.mjs";
import { each_async } from "./each_async.mjs";
import { list_adder } from "./list_adder.mjs";
import { log } from "./log.mjs";
import { functions_names_includes } from "./functions_names_includes.mjs";
import { js_call_new } from "./js_call_new.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { object_replace } from "./object_replace.mjs";
import { assert } from "./assert.mjs";
export async function js_call_fill(ast) {
  async function lambda(v) {
    let { node, stack } = v;
    let { expression } = node;
    if (js_identifier_is(expression)) {
      let { name } = expression;
      let unaliased = await function_name_unalias(name);
      const valid = functions_names_includes(unaliased);
      if (valid) {
        let { parsed, async_is } = await js_call_new(name, ast);
        object_replace(node, parsed);
        return;
        let block = js_stack_last(stack, "BlockStatement");
        let previous = list_previous(stack, block);
        let property_name = "async";
        object_property_exists_assert(previous, property_name);
        object_property_set(previous, property_name, value);
      }
    }
  }
  await js_visit_type_each_async(ast, "ExpressionStatement", lambda);
}
