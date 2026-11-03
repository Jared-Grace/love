import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_lesson_statement_min_max_mixed_decoys(
  question,
  answer,
) {
  arguments_assert(arguments, 2);
  ("the wrong answers when a program joins two ranges with Math.min and Math.max: what it writes out with the min line using max, with the max line using min, and with both the other way round");
  ("Every one holds only the numbers on the screen. Filled from the other questions they held other numbers, so the one answer made only of numbers on the screen was right nearly every time and could be picked without reading the program. Measured 2026-11-03 on Join two overlapping meetings: 88 in 100 against 25 by chance.");
  ("Each is the mistake the lesson is about, which of the two to use, and each is what a real program writes out, so none is a made-up number. When one range holds the other a mixed-up program can write out the right answer, so that one is taken out; the quiz fills the gap from the other questions.");
  ("Not picked: one more or one fewer than a right number, because a number not on the screen is what let the right answer be spotted.");
  let min_name = "Math.min";
  let max_name = "Math.max";
  function line_turned(line) {
    "one line of the program with its min and max the other way round";
    if (text_includes(line, min_name)) {
      let to_max = text_replace(line, min_name, max_name);
      return to_max;
    }
    let to_min = text_replace(line, max_name, min_name);
    return to_min;
  }
  let lines = text_split_newline(question);
  let lines_turned = list_map(lines, line_turned);
  let replaced = text_replace(question, min_name, max_name);
  let replaced2 = text_replace(question, max_name, min_name);
  let joined = list_join_newline(lines_turned);
  let programs = [replaced, replaced2, joined];
  let written = list_map(programs, eval_console_log_lines);
  let wrong = list_without(written, answer);
  let once = list_unique(wrong);
  return once;
}
