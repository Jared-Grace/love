import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_learn_js_program_trace_declare } from "./app_learn_js_program_trace_declare.mjs";
import { app_learn_js_program_trace_assign } from "./app_learn_js_program_trace_assign.mjs";
import { app_learn_js_program_trace_update } from "./app_learn_js_program_trace_update.mjs";
import { app_learn_js_program_trace_push_is } from "./app_learn_js_program_trace_push_is.mjs";
import { app_learn_js_program_trace_push } from "./app_learn_js_program_trace_push.mjs";
import { app_learn_js_program_trace_log } from "./app_learn_js_program_trace_log.mjs";
import { app_learn_js_program_trace_if } from "./app_learn_js_program_trace_if.mjs";
import { app_learn_js_program_trace_while } from "./app_learn_js_program_trace_while.mjs";
import { null_is } from "./null_is.mjs";
import { app_learn_js_program_trace_for } from "./app_learn_js_program_trace_for.mjs";
import { error } from "./error.mjs";
export function app_learn_js_program_trace_statement(
  node,
  actions,
  code,
  values,
) {
  arguments_assert(arguments, 4);
  ("one statement's own line run, what running it does added to actions, answering the statements that run next because of it: an if's picked { ... }, and nothing for any other line. An if also answers what its condition came to and what stands after its { ... }");
  let type = property_get(node, "type");
  if (equal(type, "VariableDeclaration")) {
    app_learn_js_program_trace_declare(node, actions, code, values);
    let r = {
      next: [],
    };
    return r;
  }
  if (equal(type, "ExpressionStatement")) {
    let expression = property_get(node, "expression");
    let left_type = property_get(expression, "type");
    if (equal(left_type, "AssignmentExpression")) {
      app_learn_js_program_trace_assign(expression, actions, code, values);
    } else if (equal(left_type, "UpdateExpression")) {
      app_learn_js_program_trace_update(expression, actions, code, values);
    } else if (app_learn_js_program_trace_push_is(expression)) {
      app_learn_js_program_trace_push(expression, actions, code, values);
    } else {
      app_learn_js_program_trace_log(expression, actions, code, values);
    }
    let r2 = {
      next: [],
    };
    return r2;
  }
  if (equal(type, "IfStatement")) {
    let run = app_learn_js_program_trace_if(node, actions, code, values);
    return run;
  }
  if (equal(type, "WhileStatement")) {
    let run2 = app_learn_js_program_trace_while(node, actions, code, values);
    return run2;
  }
  ("2026-11-01, for the first for lesson: a for holding only its condition, as for (; n < 9;) does, runs as a while does, and a ForStatement keeps its condition and its { ... } where a WhileStatement does, so the while's own run is used. A for with a start does not reach here, since the trace runs its start by itself first and hands over the same for with no start");
  let start_none =
    equal(type, "ForStatement") && null_is(property_get(node, "init"));
  if (start_none) {
    let run3 = app_learn_js_program_trace_for(node, actions, code, values);
    return run3;
  }
  error({
    message: "this kind of statement is not run here",
    code,
    type,
  });
}
