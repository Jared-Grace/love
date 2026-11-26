import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { app_learn_js_program_trace_line } from "./app_learn_js_program_trace_line.mjs";
import { equal } from "./equal.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { error } from "./error.mjs";
import { app_learn_js_program_trace_for_start_split_or_null } from "./app_learn_js_program_trace_for_start_split_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_learn_js_program_trace_statement } from "./app_learn_js_program_trace_statement.mjs";
import { app_learn_js_program_trace_statement_piece } from "./app_learn_js_program_trace_statement_piece.mjs";
import { text_slice } from "./text_slice.mjs";
import { list_last_or_null } from "./list_last_or_null.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_get } from "./list_get.mjs";
export function app_learn_js_program_trace(code) {
  arguments_assert(arguments, 1);
  ("every line of a program in the order the computer runs it, each with what running it does, in order: a name declared, an expression evaluated, a value assigned to a name, a value logged to the console. A line is done once its last thing is done. Asked for by the human 2026-10-13, so a learner can do every step of the running themselves before being asked what a program logs.");
  ("A line is the line a statement begins on, and an else if's line is the one its own if begins on. Not picked: counting a line holding only } or } else { as one that runs, since nothing on it is worked out; the computer goes from an if's line straight to the first line of the { ... } it picks.");
  ("A value written out is used as it stands, with nothing to evaluate; a name is evaluated by looking up the value it holds. Anything else stops rather than guessing, so a program this does not answer for is refused where it arrives.");
  let ast = js_parse(code);
  let values = {};
  let trace = [];
  ("2026-11-14, at the human's asking, for the break lesson: a loop goes round by running itself again as the last of the lines its { ... } hands on, so one loop is many runs, each inside the one before. A break stops every run still going until it reaches the first run of the loop it stands in, and the program goes on from there. loops holds the loops running now, innermost last; breaking says a break is on its way out");
  let loops = [];
  let breaking = false;
  ("2026-11-26, at the human's asking, for the function lessons: a function line run is a step of its own, declaring the function, and its body is not run there, so the program goes on below its }. A line calling a function declared above is a step that calls it; the function's own line comes next, where its parameters will be given their values, then its body, then the program goes on after the call. functions holds each function declared so far, by its name. Only a function with no parameters, called alone on its line, is followed so far; anything else stops");
  let functions = {};
  function function_called_or_null(node) {
    "the function a line calls alone on its line, when it is one declared above; null for any other line";
    let left = property_get(node, "type");
    if (not_equal(left, "ExpressionStatement")) {
      return null;
    }
    let expression = property_get(node, "expression");
    let left2 = property_get(expression, "type");
    if (not_equal(left2, "CallExpression")) {
      return null;
    }
    let callee = property_get(expression, "callee");
    let left3 = property_get(callee, "type");
    if (not_equal(left3, "Identifier")) {
      return null;
    }
    let called_name = property_get(callee, "name");
    let b2 = property_exists(functions, called_name);
    if (not(b2)) {
      return null;
    }
    let args = property_get(expression, "arguments");
    list_size_assert(args, 0);
    let declared = property_get(functions, called_name);
    return declared;
  }
  function function_statement_run(node) {
    "a function line declared, or a function called and its body run; false for any other line";
    let type = property_get(node, "type");
    let line = app_learn_js_program_trace_line(node, code);
    if (equal(type, "FunctionDeclaration")) {
      let args2 = property_get(node, "params");
      list_size_assert(args2, 0);
      let declared_name = property_path_get_2(node, "id", "name");
      property_set(functions, declared_name, node);
      list_add(trace, {
        line,
        actions: [
          {
            kind: "define",
            name: declared_name,
          },
        ],
      });
      return true;
    }
    let called = function_called_or_null(node);
    if (null_is(called)) {
      return false;
    }
    let called_name = property_path_get_2(called, "id", "name");
    list_add(trace, {
      line,
      actions: [
        {
          kind: "call_function",
          name: called_name,
        },
      ],
    });
    let function_line = app_learn_js_program_trace_line(called, code);
    let left4 = property_get(called, "end");
    let end_line = app_learn_js_program_trace_line(
      {
        start: subtract(left4, 1),
      },
      code,
    );
    list_add(trace, {
      line: function_line,
      actions: [],
      enter: called_name,
      end_line,
    });
    let body = property_path_get_2(called, "body", "body");
    statements_run(body);
    let after = list_size(trace);
    property_set(returns, after, called_name);
    return true;
  }
  ("returns: the index in the trace of the first line run after a function's body is done, by the function's name, so that line can say the computer came back from the call");
  let returns = {};
  function statements_run(statements) {
    for (let statement of statements) {
      if (breaking) {
        return;
      }
      statement_run(statement);
    }
  }
  function statement_run(node) {
    "one statement run, its lines added to the trace in the order they run: its own line once what it does is done, then the lines of any { ... } it picks";
    "an expression line begins where its expression does, so the line added for it is the one its expression is on";
    "2026-10-26: a while can run forever, so a program whose run grows past this many lines is refused rather than followed without end; no lesson's loop comes near it";
    let lines_most = 10000;
    let b = list_size(trace);
    if (less_than(lines_most, b)) {
      error({
        message: "this program runs too many lines to follow",
        code,
      });
    }
    if (function_statement_run(node)) {
      return;
    }
    let split = app_learn_js_program_trace_for_start_split_or_null(node);
    if (null_not_is(split)) {
      statements_run(split);
      return;
    }
    let actions = [];
    let run = app_learn_js_program_trace_statement(node, actions, code, values);
    let line = app_learn_js_program_trace_line(node, code);
    let entry = {
      line,
      actions,
    };
    let piece = app_learn_js_program_trace_statement_piece(node, code);
    if (null_not_is(piece)) {
      property_set(entry, "piece", piece);
    }
    list_add(trace, entry);
    let type = property_get(node, "type");
    if (
      equal(type, "IfStatement") ||
      equal(type, "WhileStatement") ||
      equal(type, "ForStatement")
    ) {
      ("an if's line also says what its condition came to, since a condition written out as true or false is not evaluated and so is in none of its actions; a guide saying why the next line runs reads it here");
      let value = property_get(run, "condition");
      property_set(entry, "condition", value);
      let value2 = property_get(run, "alternate");
      property_set(entry, "alternate", value2);
      ("2026-11-04: the condition as written, read off the statement, so what is said about it holds for a for too, whose ( ) hold more than its condition");
      let test = property_get(node, "test");
      let test_from = property_get(test, "start");
      let test_to = property_get(test, "end");
      let condition_text = text_slice(code, test_from, test_to);
      property_set(entry, "condition_text", condition_text);
    }
    if (equal(type, "BreakStatement")) {
      property_set(entry, "break", true);
      breaking = true;
      return;
    }
    let loop_is = equal(type, "WhileStatement") || equal(type, "ForStatement");
    let loop_first = loop_is && not_equal(list_last_or_null(loops), node);
    if (loop_first) {
      list_add(loops, node);
    }
    let next = property_get(run, "next");
    statements_run(next);
    if (loop_first) {
      list_pop(loops);
      breaking = false;
    }
  }
  let value7 = property_get(ast, "body");
  statements_run(value7);
  for (let k = 0; less_than(k, list_size(trace)); k++) {
    if (property_exists(returns, k)) {
      let returned_from = property_get(returns, k);
      let object = list_get(trace, k);
      property_set(object, "after_call", returned_from);
    }
  }
  return trace;
}
