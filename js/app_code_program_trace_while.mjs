import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_program_trace_value } from "./app_code_program_trace_value.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_program_trace_while(node, actions, code, values) {
  arguments_assert(arguments, 4);
  ("a while line run: its condition worked out, with any evaluating it took added to actions, answering what the condition came to, that what stands after its { ... } is the loop itself, and the statements that run next");
  ("2026-10-26: when the condition is true, next is the { ... } and then the while again, so its line is checked once more after every pass, the way the computer goes back to it; when false, nothing, and the program goes on after the }. Not picked: unrolling the passes here, which would need a count this cannot know before running them");
  let test = property_get(node, "test");
  let condition = app_code_program_trace_value(test, actions, code, values);
  let next = [];
  if (condition) {
    let block = property_get(node, "body");
    let body = property_get(block, "body");
    next = list_concat(body, [node]);
  }
  let r = {
    condition,
    alternate: "loop",
    next,
  };
  return r;
}
