import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_gate_hint_nodes(f_name) {
  "Every part of one function's body that lands in a slot called hint, handed back as the nodes themselves so what sits inside them can be told apart from what does not. Read-only.";
  "A hint is the one place a complaint may name something that is not at fault: the reader that scrapes a failure for function names drops it before it looks. So the whole question of whether a gate leaks is which side of a hint each name it spells falls on, and this answers the easy half of that - where the hints are.";
  "Two shapes count and they are the same shape seen twice. A record written with a hint field is one; an argument handed to a parameter the called function calls hint is the other. Neither is looked up in a list written here - the field is read off the record and the parameter off the called function, so a new way of taking a hint is found by being called hint.";
  let nodes = [];
  let properties = await function_ast_list_type_nodes(f_name, "Property");
  for (let p of properties) {
    let key = property_get(p, "key");
    let named = property_get(key, "name");
    if (named === "hint") {
      let value = property_get(p, "value");
      list_add(nodes, value);
    }
  }
  let calls = await function_ast_list_type_nodes(f_name, "CallExpression");
  for (let call of calls) {
    let callee = property_get(call, "callee");
    let called = property_get(callee, "name");
    async function lambda() {
      let names = await function_params_names(called);
      return names;
    }
    let params = await catch_null_async(lambda);
    if (params === null) {
      continue;
    }
    let index = list_index_of(params, "hint");
    if (index === -1) {
      continue;
    }
    let args = property_get(call, "arguments");
    let arg = args[index];
    if (arg === undefined) {
      continue;
    }
    list_add(nodes, arg);
  }
  return nodes;
}
