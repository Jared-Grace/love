import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { not } from "./not.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_array_expression_elements } from "./js_array_expression_elements.mjs";
import { js_call_empty } from "./js_call_empty.mjs";
import { js_call_argument_add } from "./js_call_argument_add.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function js_text_combine_multiple_normalize(ast) {
  function collect(la) {
    js_visit_calls_named_nodes(ast, text_combine_multiple.name, la);
  }
  let nodes = list_adder(collect);
  let changed = false;
  function lambda(node) {
    let args = js_call_arguments_get(node);
    let single = list_size_1(args);
    if (not(single)) {
      return;
    }
    let array = list_first(args);
    let ae = js_node_type_is(array, "ArrayExpression");
    if (not(ae)) {
      return;
    }
    let elements = js_array_expression_elements(array);
    let size = list_size(elements);
    if (size === 1) {
      let only = list_first(elements);
      object_replace(node, only);
      changed = true;
    }
    if (size === 2) {
      let call = js_call_empty(text_combine.name);
      let left = list_first(elements);
      let right = list_last(elements);
      js_call_argument_add(call, left);
      js_call_argument_add(call, right);
      object_replace(node, call);
      changed = true;
    }
  }
  each(nodes, lambda);
  if (changed) {
    await js_imports_missing_add_all(ast);
  }
}
