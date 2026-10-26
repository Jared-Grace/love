import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_code_program_trace_declare } from "./app_code_program_trace_declare.mjs";
import { app_code_program_trace_assign } from "./app_code_program_trace_assign.mjs";
import { app_code_program_trace_update } from "./app_code_program_trace_update.mjs";
import { app_code_program_trace_log } from "./app_code_program_trace_log.mjs";
import { app_code_program_trace_if } from "./app_code_program_trace_if.mjs";
import { app_code_program_trace_while } from "./app_code_program_trace_while.mjs";
import { error } from "./error.mjs";
export function app_code_program_trace_statement(node, actions, code, values) {
  arguments_assert(arguments, 4);
  ("one statement's own line run, what running it does added to actions, answering the statements that run next because of it: an if's picked { ... }, and nothing for any other line. An if also answers what its condition came to and what stands after its { ... }");
  let type = property_get(node, "type");
  if (equal(type, "VariableDeclaration")) {
    app_code_program_trace_declare(node, actions, code, values);
    let r = {
      next: [],
    };
    return r;
  }
  if (equal(type, "ExpressionStatement")) {
    let expression = property_get(node, "expression");
    let left_type = property_get(expression, "type");
    if (equal(left_type, "AssignmentExpression")) {
      app_code_program_trace_assign(expression, actions, code, values);
    } else if (equal(left_type, "UpdateExpression")) {
      app_code_program_trace_update(expression, actions, code, values);
    } else {
      app_code_program_trace_log(expression, actions, code, values);
    }
    let r2 = {
      next: [],
    };
    return r2;
  }
  if (equal(type, "IfStatement")) {
    let run = app_code_program_trace_if(node, actions, code, values);
    return run;
  }
  if (equal(type, "WhileStatement")) {
    let run2 = app_code_program_trace_while(node, actions, code, values);
    return run2;
  }
  error({
    message: "this kind of statement is not run here",
    code,
    type,
  });
}
