import { list_size } from "./list_size.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { qa_gate_names_hinted } from "./qa_gate_names_hinted.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_gate_call_hint_arguments(call, remembered, depth) {
  "The arguments of one call that the called function puts in a hint, so a caller can tell which of the things it wrote there were safe to write. Read-only.";
  "The plain case is a parameter the callee simply calls hint. The case that matters is the other one: a gate handing its whole complaint to a shared runner spells the repair command into an argument the runner calls something else, and the runner is what puts it under a hint. Judged by the name at the door, every such gate reads as leaking - and they are the ones doing it right.";
  "So the callee is asked instead of its parameter list being read for a word, and how far to keep asking is handed in, because that is the cost.";
  "A FUNCTION THAT TAKES ITS ROW GATHERED INTO A RECORD HAS AS MANY NAMES AS THE ROW HAD AND IS HANDED ONE THING, SO COUNTING ALONG THE ARGUMENTS PUTS EVERY NAME BUT THE FIRST AGAINST NOTHING AND THE FIRST AGAINST THE WHOLE RECORD. Read that way a name reached a hint only if it happened to be written first, and the rest were called leaks; the gate that found this passed on exactly that accident. So position is used only where the two counts agree, which for every other call in this repo they do, and a record is matched the way the language itself matches one - by the name over each value.";
  let callee = property_get(call, "callee");
  let called = js_identifier_name_try(callee);
  async function lambda() {
    let names = await function_params_names(called);
    return names;
  }
  let params = await catch_null_async(lambda);
  let hint_arguments = [];
  if (equal(params, null)) {
    return hint_arguments;
  }
  let hinted = ["hint"];
  let deeper_is = greater_than(depth, 0);
  if (deeper_is) {
    async function lambda2() {
      let shallower = subtract(depth, 1);
      let inner = await qa_gate_names_hinted(called, remembered, shallower);
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
  let left = list_size(args);
  let right = list_size(params);
  let aligned_is = equal(left, right);
  if (aligned_is) {
    let index = 0;
    for (let param of params) {
      let arg = args[index];
      index = index + 1;
      let hinting_is = list_includes(hinted, param);
      if (equal(hinting_is, false)) {
        continue;
      }
      list_add(hint_arguments, arg);
    }
  }
  for (let arg2 of args) {
    let properties = js_list_type_nodes(arg2, "Property");
    for (let property_node of properties) {
      let key_node = property_get(property_node, "key");
      let key_named = js_identifier_name_try(key_node);
      let hinting_by_name_is = list_includes(hinted, key_named);
      if (equal(hinting_by_name_is, false)) {
        continue;
      }
      let value_node = property_get(property_node, "value");
      list_add(hint_arguments, value_node);
    }
  }
  return hint_arguments;
}
