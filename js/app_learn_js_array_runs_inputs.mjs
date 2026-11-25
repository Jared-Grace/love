import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_without } from "./list_without.mjs";
import { boolean_random } from "./boolean_random.mjs";
export function app_learn_js_array_runs_inputs(
  values,
  program_of,
  wrong_programs_of,
) {
  arguments_assert(arguments, 3);
  ("six arrays of sizes 4, 5, 4, 5, 6 and 6 from values, each next item the same as the one before half the time, each tried again until every wrong program writes out something other than the right one - the inputs of the lessons about runs");
  function every_wrong_differs(items) {
    let code = program_of(items);
    let answer = eval_console_log_lines(code);
    let list = wrong_programs_of(items);
    function output_of(wrong) {
      let out = eval_console_log_lines(wrong);
      return out;
    }
    let outputs = list_map(list, output_of);
    let same = list_includes(outputs, answer);
    let n = not(same);
    return n;
  }
  function array_of(size) {
    while (true) {
      let first = list_random_item(values);
      let items2 = [first];
      while (less_than(items2.length, size)) {
        let before = items2[subtract(items2.length, 1)];
        let others = list_without(values, before);
        let next = boolean_random() ? before : list_random_item(others);
        items2.push(next);
      }
      if (every_wrong_differs(items2)) {
        return items2;
      }
    }
  }
  let sizes = [4, 5, 4, 5, 6, 6];
  let arrays = list_map(sizes, array_of);
  return arrays;
}
