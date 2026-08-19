import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { js_node_statements_work } from "./js_node_statements_work.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function js_statements_work_deep(statements) {
  arguments_assert(arguments, 1);
  ("Every line of work in a run of lines, at every depth - the prose left out, the marks left out, and the blocks that only hold other lines left out.");
  ("The reading beside it answers for one piece of code, and a run of lines is not one piece: it is a stretch of a body with no node of its own standing over it. Asking each line in turn and putting the answers together is what lets the same scale reach a run.");
  ("Nothing is counted twice. The lines handed in stand side by side in a body, so none of them holds another, and each line's own walk stays inside itself.");
  ("This is the scale a function is judged too big by, which is the whole reason for reaching it from here. A reading over the top level alone answers one for a loop holding twenty lines, so a run measured that way can look like a third of a body while holding very nearly all of it. Measured on 2026-08-19, that is how a cut moving fifty of a function's fifty-five lines came to be offered as one leaving four behind, and taking it moved every line and made nothing shorter.");
  let deep = [];
  function statements_note(statement) {
    let inner = js_node_statements_work(statement);
    list_add_multiple(deep, inner);
  }
  each(statements, statements_note);
  return deep;
}
