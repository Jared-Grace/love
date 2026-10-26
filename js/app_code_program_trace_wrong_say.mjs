import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_program_trace } from "./app_code_program_trace.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_get } from "./list_get.mjs";
import { text_index_of } from "./text_index_of.mjs";
import { text_index_of_last } from "./text_index_of_last.mjs";
import { text_slice } from "./text_slice.mjs";
import { add } from "./add.mjs";
import { text_to } from "./text_to.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { js_value_code } from "./js_value_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_program_trace_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong output for a program that gives names values or asks an if: the program followed line by line, saying what each name holds as it is given it, what each if's condition comes to and so whether its { } runs, and what each line writes out, as parts that take turns between words and code. null when the program cannot be traced, gives no name a value and asks no if, or traces to anything but the right answer");
  ("2026-10-26: ifs were added because a program of ifs and writing-out alone was left silent, and the only reminder it ever met was the reversed-lines one, when the shuffle happened to offer that pick - which made a lesson's silence differ from run to run");
  ("The working comes from the trace the step-by-step lessons are built on, so this reminder and those lessons follow a program by one rule. The choice pressed is not read: every wrong output is answered by the same working, because following the names is what was missed. Not picked: a sentence per kind of wrong pick, which says why one pick is wrong but leaves the learner to work out the right one; only the lines that change a name, which leaves out the writing-out the question is asking about");
  function trace_get() {
    let trace = app_code_program_trace(question);
    return trace;
  }
  let trace = catch_null(trace_get);
  if (null_is(trace)) {
    return null;
  }
  let parts = [];
  let words = "Remember: follow it one line at a time: ";
  let assigned = [];
  let logged = [];
  function code_add(code) {
    "the words waiting so far, then a piece of code after them, so the parts keep taking turns";
    list_add_multiple(parts, [words, code]);
    words = "";
  }
  let checked = [];
  function then_add() {
    let first =
      list_empty_is(assigned) &&
      list_empty_is(logged) &&
      list_empty_is(checked);
    if (not(first)) {
      words = words + ", then ";
    }
  }
  let lines = text_split_newline(question);
  for (let entry of trace) {
    let actions = property_get(entry, "actions");
    let condition = property_get_or(entry, "condition", null);
    if (null_not_is(condition)) {
      ("an if's line says what its condition comes to and what that means for the { } after it; the condition is read off the line as written, between its first ( and its last ), so a name in it is shown as the learner wrote it");
      let index = property_get(entry, "line");
      let line_text = list_get(lines, index);
      let opened = text_index_of(line_text, "(");
      let closed = text_index_of_last(line_text, ")");
      let from2 = add(opened, 1);
      let condition_text = text_slice(line_text, from2, closed);
      then_add();
      code_add(condition_text);
      words = words + " is ";
      let t = text_to(condition);
      code_add(t);
      let alternate = property_get(entry, "alternate");
      if (condition) {
        words = words + ", so the lines inside its { } run";
      } else if (equal(alternate, "none")) {
        words = words + ", so the lines inside its { } are skipped";
      } else {
        words =
          words +
          ", so the lines inside its { } are skipped and it goes on to the else";
      }
      list_add(checked, condition_text);
    }
    for (let action of actions) {
      let kind = property_get(action, "kind");
      if (equal(kind, "assign")) {
        let value = property_get(action, "value");
        let name = property_get(action, "name");
        then_add();
        code_add(name);
        words = words + " holds ";
        let code2 = js_value_code(value);
        code_add(code2);
        list_add(assigned, name);
      }
      if (equal(kind, "log")) {
        let logged_value = property_get(action, "value");
        let written = text_to(logged_value);
        then_add();
        words = words + "it writes out ";
        code_add(written);
        list_add(logged, written);
      }
    }
  }
  if (list_empty_is(assigned) && list_empty_is(checked)) {
    return null;
  }
  let b2 = equal(words, "");
  if (not(b2)) {
    list_add(parts, words);
  }
  let output = list_join_newline(logged);
  let right = text_to(answer);
  let b = equal(output, right);
  if (not(b)) {
    return null;
  }
  return parts;
}
