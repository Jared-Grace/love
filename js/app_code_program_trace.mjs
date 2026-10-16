import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { app_code_program_trace_statement } from "./app_code_program_trace_statement.mjs";
import { app_code_program_trace_line } from "./app_code_program_trace_line.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_program_trace(code) {
  arguments_assert(arguments, 1);
  ("every line of a program in the order the computer runs it, each with what running it does, in order: a name declared, an expression evaluated, a value assigned to a name, a value logged to the console. A line is done once its last thing is done. Asked for by the human 2026-10-13, so a learner can do every step of the running themselves before being asked what a program logs.");
  ("A line is the line a statement begins on, and an else if's line is the one its own if begins on. Not picked: counting a line holding only } or } else { as one that runs, since nothing on it is worked out; the computer goes from an if's line straight to the first line of the { ... } it picks.");
  ("A value written out is used as it stands, with nothing to evaluate; a name is evaluated by looking up the value it holds. Anything else stops rather than guessing, so a program this does not answer for is refused where it arrives.");
  let ast = js_parse(code);
  let values = {};
  let trace = [];
  function statements_run(statements) {
    for (let statement of statements) {
      statement_run(statement);
    }
  }
  function statement_run(node) {
    "one statement run, its lines added to the trace in the order they run: its own line once what it does is done, then the lines of any { ... } it picks";
    "an expression line begins where its expression does, so the line added for it is the one its expression is on";
    let actions = [];
    let run = app_code_program_trace_statement(node, actions, code, values);
    let line = app_code_program_trace_line(node, code);
    let entry = {
      line,
      actions,
    };
    list_add(trace, entry);
    let type = property_get(node, "type");
    if (equal(type, "IfStatement")) {
      ("an if's line also says what its condition came to, since a condition written out as true or false is not evaluated and so is in none of its actions; a guide saying why the next line runs reads it here");
      let value = property_get(run, "condition");
      property_set(entry, "condition", value);
      let value2 = property_get(run, "alternate");
      property_set(entry, "alternate", value2);
    }
    let next = property_get(run, "next");
    statements_run(next);
  }
  let value7 = property_get(ast, "body");
  statements_run(value7);
  return trace;
}
