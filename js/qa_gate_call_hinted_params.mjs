import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { qa_gate_names_hinted } from "./qa_gate_names_hinted.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_gate_call_hinted_params(depth, called, remembered) {
  arguments_assert(arguments, 3);
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
  return hinted;
}
