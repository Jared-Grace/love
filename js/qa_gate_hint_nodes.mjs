import { list_includes } from "./list_includes.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { function_ast_list_type_nodes } from "./function_ast_list_type_nodes.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { qa_gate_names_hinted } from "./qa_gate_names_hinted.mjs";
export async function qa_gate_hint_nodes(f_name, remembered, depth) {
  "Every part of one function's body that lands in a slot called hint, handed back as the nodes themselves so what sits inside them can be told apart from what does not. Read-only.";
  "A hint is the one place a complaint may name something that is not at fault: the reader that scrapes a failure for function names drops it before it looks. So the whole question of whether a gate leaks is which side of a hint each name it spells falls on, and this answers the easy half of that - where the hints are.";
  "Two shapes count and they are the same shape seen twice. A record written with a hint field is one; an argument handed to a parameter the called function puts in a hint is the other. Neither is looked up in a list written here - the field is read off the record and the parameter off the called function.";
  "That second shape has to be asked of the called function rather than of its parameter's name, because a gate that hands its whole complaint to a shared runner spells the repair command into an argument the runner calls something else entirely, and the runner is the one that puts it under a hint. Judged by the name at the door, every such gate read as leaking - and they are the ones doing it right.";
  "How far to follow that is handed in rather than decided here, because it is the cost, and the answer stops changing after two or three steps: a gate, the runner it calls, and the runner that one delegates to.";
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
  let deeper_is = greater_than(depth, 0);
  let calls = await function_ast_list_type_nodes(f_name, "CallExpression");
  for (let call of calls) {
    let callee = property_get(call, "callee");
    let called = js_identifier_name_try(callee);
    async function lambda() {
      let names = await function_params_names(called);
      return names;
    }
    let params = await catch_null_async(lambda);
    if (equal(params, null)) {
      continue;
    }
    let hinted = ["hint"];
    if (deeper_is) {
      async function lambda2() {
        let inner = await qa_gate_names_hinted(called, remembered, depth - 1);
        return inner;
      }
      let inner2 = await catch_null_async(lambda2);
      if (equal(inner2, null)) {
        inner2 = [];
      }
      for (let name of inner2) {
        list_add(hinted, name);
      }
    }
    let args = property_get(call, "arguments");
    let index = 0;
    for (let param of params) {
      let hinting_is = list_includes(hinted, param);
      let arg = args[index];
      index = index + 1;
      if (equal(hinting_is, false)) {
        continue;
      }
      if (equal(arg, undefined)) {
        continue;
      }
      list_add(nodes, arg);
    }
  }
  return nodes;
}
