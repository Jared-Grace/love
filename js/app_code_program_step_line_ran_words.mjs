import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_program_line_in_loop_is } from "./app_code_program_line_in_loop_is.mjs";
export function app_code_program_step_line_ran_words(
  lines,
  trace,
  index,
  pressed,
) {
  arguments_assert(arguments, 4);
  ("Why a pressed line is not the next to run, told by when it runs: before now, or after now. null when it never runs, or when neither can be said. lines is the program's lines, trace the lines it runs in order, index how many have run, and pressed the line pressed");
  ("2026-10-23, the human's words, with has already ran said as has already run. Already run is said only outside a while or a for, since a line in one may run again; runs later is said only where no line returns or continues, which the human named as where it holds");
  function lambda(entry) {
    let r3 = entry.line;
    return r3;
  }
  let ran = trace.slice(0, index).map(lambda);
  function lambda2(entry) {
    let r4 = entry.line;
    return r4;
  }
  let later = trace.slice(index + 1).map(lambda2);
  if (
    ran.includes(pressed) &&
    not(app_code_program_line_in_loop_is(lines, pressed))
  ) {
    let r = {
      reason: "ran_already",
      words: ["That line has already run. Please choose the next line"],
    };
    return r;
  }
  function lambda3(line) {
    let v = line.trim();
    let r5 = /^(return|continue)\b/.test(v);
    return r5;
  }
  let jumps = lines.some(lambda3);
  if (later.includes(pressed) && not(jumps)) {
    let r2 = {
      reason: "runs_later",
      words: ["That line runs later, but not now. Please choose the next line"],
    };
    return r2;
  }
  return null;
}
