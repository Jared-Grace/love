import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function qa_gate_call_hint_arguments_positional(
  args,
  params,
  hinted,
  hint_arguments,
) {
  arguments_assert(arguments, 4);
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
}
