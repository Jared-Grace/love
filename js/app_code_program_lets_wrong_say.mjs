import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { not } from "./not.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { catch_null } from "./catch_null.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_slice } from "./list_slice.mjs";
import { text_size } from "./text_size.mjs";
import { text_slice } from "./text_slice.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
import { text_index_of_last } from "./text_index_of_last.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { js_value_code } from "./js_value_code.mjs";
import { list_first } from "./list_first.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { subtract } from "./subtract.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_program_lets_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong output for a program of let lines and console.log lines: each let line's right side and the value it comes to, so what its name holds, then what is written out, as parts that take turns between words and code. null for a program holding any other line, one that cannot be run, or one whose output is not the right answer");
  ("2026-10-26: for programs the line-by-line trace refuses, such as those that call Math; that trace is the stepper the step-by-step lessons are built on, so it is left as it is and these programs are run instead, one more line each time, to read what each name holds. Not picked: working out each right side operator by operator, which the trace does for the programs it can follow; the value of a right side is enough to find which line was misread");
  let code = text_to(question);
  let right = text_to(answer);
  let lines = text_split_newline(code);
  let lets = "let ";
  let between = " = ";
  let log_start = "console.log(";
  let parts = [];
  let words = "Remember: follow it one line at a time: ";
  let first = true;
  function code_add(piece) {
    list_add_multiple(parts, [words, piece]);
    words = "";
  }
  function then_add() {
    if (not(first)) {
      words = words + ", then ";
    }
    first = false;
  }
  function run(program) {
    function get() {
      let logged = eval_console_log_to_list(program);
      return logged;
    }
    let logs = catch_null(get);
    return logs;
  }
  function written(args) {
    let list = list_map(args, text_to);
    let w = list_join_newline(list);
    return w;
  }
  let index = 0;
  let lets_seen = 0;
  let names = [];
  for (let raw of lines) {
    let line = text_trim(raw);
    index = index + 1;
    let list2 = list_slice(lines, 0, index);
    let before = list_join_newline(list2);
    let to = text_size(log_start);
    let left = text_slice(line, 0, to);
    if (equal(left, log_start)) {
      let logged = run(before);
      if (null_is(logged) || list_empty_is(logged)) {
        return null;
      }
      let args = list_last(logged);
      let from2 = text_size(log_start);
      let to2 = text_index_of_last(line, ")");
      let message = text_slice(line, from2, to2);
      let inside = text_trim(message);
      then_add();
      if (
        list_size_1(args) &&
        list_includes_not(names, inside) &&
        not(equal(inside, js_value_code(list_first(args))))
      ) {
        code_add(inside);
        words = words + " is ";
        let value2 = list_first(args);
        let code2 = js_value_code(value2);
        code_add(code2);
        words = words + ", so ";
      }
      words = words + "it writes out ";
      let v = written(args);
      code_add(v);
      continue;
    }
    let at = text_index_of_try(line, between);
    let size = text_size(line);
    let to3 = text_size(lets);
    let left2 = text_slice(line, 0, to3);
    let b = equal(left2, lets);
    if (
      not(b) ||
      equal(at, -1) ||
      not(equal(text_slice(line, subtract(size, 1), size), ";"))
    ) {
      return null;
    }
    let from3 = text_size(lets);
    let message2 = text_slice(line, from3, at);
    let name = text_trim(message2);
    let to4 = subtract(size, 1);
    let message3 = text_slice(line, at + text_size(between), to4);
    let side = text_trim(message3);
    let logs = run(before + "\nconsole.log(" + name + ");");
    if (null_is(logs) || list_empty_is(logs)) {
      return null;
    }
    let list3 = list_last(logs);
    let value = list_last(list3);
    let value_code = js_value_code(value);
    lets_seen = lets_seen + 1;
    list_add(names, name);
    then_add();
    let b2 = equal(side, value_code);
    if (not(b2)) {
      code_add(side);
      words = words + " is ";
      code_add(value_code);
      words = words + ", so ";
    }
    code_add(name);
    words = words + " holds ";
    code_add(value_code);
  }
  if (equal(lets_seen, 0)) {
    return null;
  }
  let all = run(code);
  if (
    null_is(all) ||
    not(equal(list_join_newline(list_map(all, written)), right))
  ) {
    return null;
  }
  let b3 = equal(words, "");
  if (not(b3)) {
    list_add(parts, words);
  }
  return parts;
}
