import { arguments_assert } from "./arguments_assert.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_size } from "./list_size.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function app_learn_js_backwards_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("the reminder every backwards quiz says when a wrong program is picked: the program is run, and what it writes out is set beside what was asked for. Asked for by the human 2026-11-12, after a student picked console.log(a.length - 1) for the last item and was told nothing");
  ("Null when there is nothing honest to say: the choice does not run, or it writes out what was asked for");
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
  ("2026-11-15, at the human's asking, after a student chose between a log inside a loop's if and a log after the loop, and asked what the difference was: output of more than one line is said too, its lines joined by commas with how many there are, so a log run five times reads 7, 7, 7, 7, 7 (5 lines), not 7. One line reads as it did. Not picked: a sentence about where the log sits, which a lesson would have to author for each shape; what it writes out is true of every wrong program");
  function shown(text) {
    let lines = text_split_newline(text);
    let size = list_size(lines);
    if (equal(size, 1)) {
      let r3 = {
        code: text,
        count: "",
      };
      return r3;
    }
    let r4 = {
      code: lines.join(", "),
      count: " (" + size + " lines)",
    };
    return r4;
  }
  let asked = shown(question);
  if (text_empty_is(out)) {
    let r = ["This writes out nothing, not ", asked.code, asked.count];
    return r;
  }
  let got = shown(out);
  let r2 = [
    "This writes out ",
    got.code,
    got.count + ", not ",
    asked.code,
    asked.count,
  ];
  return r2;
}
