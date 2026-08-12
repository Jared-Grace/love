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
  let index = 0;
  for (let param of params) {
    let arg = args[index];
    index = index + 1;
    let hinting_is = list_includes(hinted, param);
    if (equal(hinting_is, false)) {
      continue;
    }
    if (equal(arg, undefined)) {
      continue;
    }
    list_add(hint_arguments, arg);
  }
  return hint_arguments;
}
