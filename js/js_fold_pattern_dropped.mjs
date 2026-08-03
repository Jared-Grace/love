import { js_statement_arguments_assert_is } from "./js_statement_arguments_assert_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { js_signature_has_callee } from "./js_signature_has_callee.mjs";
import { js_statement_work_is } from "./js_statement_work_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function js_fold_pattern_dropped(x_ast) {
  arguments_assert(arguments, 1);
  ("Every line of real work in x's body that the fold's pattern leaves out, so that folding a run of statements into a call to x would quietly add this work to it.");
  ("The pattern the fold matches on is not x's body - it is x's body with every statement that is not a call-declaration filtered away. A line binding a list, a loop that fills it, a condition: none of those carry a callee, so none of them reach the pattern. What is left still reads them, and the match then claims those few lines are the whole of what x does.");
  ("Nothing in the fold noticed. The equivalence check compares the pattern against the block it matched - the filtered thing against the filtered thing - so it is blind to what the filter took out by construction. Measured 2026-08-03: two functions were destroyed this way, each having a carefully built list dropped on the floor because the two lines that read it matched a sweep that builds its own.");
  ("Prose, a marker, and the line counting the arguments are left out on purpose. Those are ceremony rather than work, which is the same reason the pattern filter drops them, and a body is not made partial by carrying them.");
  let x_statements = js_flo_body(x_ast);
  let body_statements = list_take_less_1(x_statements);
  let dropped = [];
  for (let statement of body_statements) {
    let signature = js_atomic_statement_signature(statement);
    let kept_is = js_signature_has_callee(signature);
    if (kept_is) {
      continue;
    }
    let work_is = js_statement_work_is(statement);
    if (not(work_is)) {
      continue;
    }
    let guard_is = js_statement_arguments_assert_is(statement);
    if (guard_is) {
      continue;
    }
    let code = js_unparse(statement);
    list_add(dropped, code);
  }
  return dropped;
}
