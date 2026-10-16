import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { app_code_program_trace_declare } from "./app_code_program_trace_declare.mjs";
import { app_code_program_trace_assign } from "./app_code_program_trace_assign.mjs";
import { app_code_program_trace_update } from "./app_code_program_trace_update.mjs";
import { app_code_program_trace_log } from "./app_code_program_trace_log.mjs";
import { app_code_program_trace_if } from "./app_code_program_trace_if.mjs";
import { property_set } from "./property_set.mjs";
import { error } from "./error.mjs";
export function app_code_program_trace(code) {
  arguments_assert(arguments, 1);
  ("every line of a program in the order the computer runs it, each with what running it does, in order: a name declared, an expression evaluated, a value assigned to a name, a value logged to the console. A line is done once its last thing is done. Asked for by the human 2026-10-13, so a learner can do every step of the running themselves before being asked what a program logs.");
  ("A line is the line a statement begins on, and an else if's line is the one its own if begins on. Not picked: counting a line holding only } or } else { as one that runs, since nothing on it is worked out; the computer goes from an if's line straight to the first line of the { ... } it picks.");
  ("A value written out is used as it stands, with nothing to evaluate; a name is evaluated by looking up the value it holds. Anything else stops rather than guessing, so a program this does not answer for is refused where it arrives.");
  let ast = js_parse(code);
  let values = {};
  let trace = [];
  function line_of(node) {
    "which line of the program a node begins on, counting from 0";
    let start = property_get(node, "start");
    let before = text_slice(code, 0, start);
    let lines = text_split_newline(before);
    let left = list_size(lines);
    let index = subtract(left, 1);
    return index;
  }
  function line_add(node, actions) {
    let line = line_of(node);
    let entry = {
      line,
      actions,
    };
    list_add(trace, entry);
    return entry;
  }
  function statements_run(statements) {
    for (let statement of statements) {
      statement_run(statement);
    }
  }
  function statement_run(node) {
    "one statement run, its lines added to the trace in the order they run";
    let type = property_get(node, "type");
    let actions = [];
    if (equal(type, "VariableDeclaration")) {
      app_code_program_trace_declare(node, actions, code, values);
      line_add(node, actions);
      return;
    }
    if (equal(type, "ExpressionStatement")) {
      let expression = property_get(node, "expression");
      let left_type = property_get(expression, "type");
      ("an expression line begins where its expression does, so the line added for it is the one its expression is on");
      if (equal(left_type, "AssignmentExpression")) {
        app_code_program_trace_assign(expression, actions, code, values);
      } else if (equal(left_type, "UpdateExpression")) {
        app_code_program_trace_update(expression, actions, code, values);
      } else {
        app_code_program_trace_log(expression, actions, code, values);
      }
      line_add(node, actions);
      return;
    }
    if (equal(type, "IfStatement")) {
      let run = app_code_program_trace_if(node, actions, code, values);
      let entry2 = line_add(node, actions);
      ("an if's line also says what its condition came to, since a condition written out as true or false is not evaluated and so is in none of its actions; a guide saying why the next line runs reads it here");
      let value = property_get(run, "condition");
      property_set(entry2, "condition", value);
      let value2 = property_get(run, "alternate");
      property_set(entry2, "alternate", value2);
      let value3 = property_get(run, "next");
      statements_run(value3);
      return;
    }
    error({
      message: "this kind of statement is not run here",
      code,
      type,
    });
  }
  let value7 = property_get(ast, "body");
  statements_run(value7);
  return trace;
}
