import { text_split_newline } from "./text_split_newline.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function js_code_loops_guarded(code) {
  "The same program, except that every while line counts its runs and stops the program with an error once the runs pass a thousand, so a program run only to see what it logs always ends.";
  "Asked for by the line-order quiz, which runs every order of a program's lines: an order putting a while's closing brace straight after it leaves a loop that never changes what it asks, and the page froze, measured 2026-10-09 on the first while lesson.";
  "A THOUSAND IS FAR PAST ANY PROGRAM A LESSON ASKS ABOUT, whose loops run a handful of times, so the guard stops only an order that would never end.";
  "Only a line starting with while and ending with an open brace is guarded, which is the one shape the lessons write a while in.";
  let lines = text_split_newline(code);
  let keyword = js_keyword_while();
  function line_guarded(line) {
    let trimmed = text_trim(line);
    if (text_starts_with(trimmed, keyword) && text_ends_with(trimmed, "{")) {
      let guarded =
        line +
        ' loop_steps += 1; if (loop_steps > 1000) { throw new Error("loop_steps"); }';
      return guarded;
    }
    return line;
  }
  let mapped = list_map(lines, line_guarded);
  let counted = list_concat(["let loop_steps = 0;"], mapped);
  let joined = list_join_newline(counted);
  return joined;
}
