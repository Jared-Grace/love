import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_program_trace_while } from "./app_code_program_trace_while.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function app_code_program_trace_for(node, actions, code, values) {
  arguments_assert(arguments, 4);
  ("a for line run: its condition worked out as a while's is, since a ForStatement keeps its condition and its { ... } where a WhileStatement does. When the condition is true, what runs next is the { ... }, then the code after the second ; if there is any, then the for again");
  ("2026-11-04, at the human's asking, so a for can be taught one piece at a time: the code after the second ; is run as a statement of its own, so everything already said about a statement written n += 3 holds for it too. Not picked: a second way of running it here, which could come to disagree with the first");
  let run = app_code_program_trace_while(node, actions, code, values);
  let update = property_get(node, "update");
  let next = property_get(run, "next");
  if (null_is(update) || list_empty_is(next)) {
    return run;
  }
  let statement = {
    type: "ExpressionStatement",
    expression: update,
    start: property_get(update, "start"),
    end: property_get(update, "end"),
    for_update: true,
  };
  let block = property_get(node, "body");
  let body = property_get(block, "body");
  let r = {
    condition: property_get(run, "condition"),
    alternate: property_get(run, "alternate"),
    next: [...body, statement, node],
  };
  return r;
}
