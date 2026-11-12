import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null } from "./catch_null.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { null_is } from "./null_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function app_learn_js_backwards_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("the reminder every backwards quiz says when a wrong program is picked: the program is run, and what it writes out is set beside what was asked for. Asked for by the human 2026-11-12, after a student picked console.log(a.length - 1) for the last item and was told nothing");
  ("Null when there is nothing honest to say: the choice does not run, it writes out what was asked for, or either side runs to more than one line, which the reminder's one line of parts cannot show");
  function lambda() {
    let text = eval_console_log_lines(choice);
    return text;
  }
  let out = catch_null(lambda);
  if (null_is(out)) {
    return null;
  }
  if (equal(out, question)) {
    return null;
  }
  if (text_includes(question, "\n")) {
    return null;
  }
  if (text_includes(out, "\n")) {
    return null;
  }
  if (text_empty_is(out)) {
    let r = ["This writes out nothing, not ", question, ""];
    return r;
  }
  let r2 = ["This writes out ", out, ", not ", question, ""];
  return r2;
}
