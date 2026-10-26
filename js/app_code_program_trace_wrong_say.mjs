import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_program_trace } from "./app_code_program_trace.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { js_value_code } from "./js_value_code.mjs";
import { list_add } from "./list_add.mjs";
import { text_to } from "./text_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_program_trace_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong output for a program that gives names values: the program followed line by line, saying what each name holds as it is given it and what each line writes out, as parts that take turns between words and code. null when the program cannot be traced, gives no name a value, or traces to anything but the right answer");
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
  function then_add() {
    let first = list_empty_is(assigned) && list_empty_is(logged);
    if (not(first)) {
      words = words + ", then ";
    }
  }
  for (let entry of trace) {
    let actions = property_get(entry, "actions");
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
  if (list_empty_is(assigned)) {
    return null;
  }
  let output = list_join_newline(logged);
  let right = text_to(answer);
  let b = equal(output, right);
  if (not(b)) {
    return null;
  }
  return parts;
}
