import { equal } from "./equal.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { qa_gate_call_hint_arguments } from "./qa_gate_call_hint_arguments.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function qa_gate_hint_nodes(f_name, remembered, depth) {
  "Every part of one function's body that lands in a hint, handed back as the nodes themselves so what sits inside them can be told apart from what does not. Read-only.";
  "A hint is the one place a complaint may name something that is not at fault: the reader that scrapes a failure for function names drops it before it looks. So the whole question of whether a gate leaks is which side of a hint each name it spells falls on, and this answers the easy half of that - where the hints are.";
  "Two shapes count and they are the same shape seen twice. A record written with a hint field is one, and it is read off the record here; an argument the called function puts in a hint is the other, and that one has to be asked of the called function, which is a job of its own.";
  let nodes = [];
  let properties = await function_ast_list_type_nodes(f_name, "Property");
  for (let p of properties) {
    let key = property_get(p, "key");
    let named = js_identifier_name_try(key);
    if (equal(named, "hint")) {
      let value = property_get(p, "value");
      list_add(nodes, value);
    }
  }
  let calls = await function_ast_list_type_nodes(f_name, "CallExpression");
  for (let call of calls) {
    let hint_arguments = await qa_gate_call_hint_arguments(
      call,
      remembered,
      depth,
    );
    list_add_multiple(nodes, hint_arguments);
  }
  return nodes;
}
