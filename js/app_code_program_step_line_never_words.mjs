import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_program_line_enclosing } from "./app_code_program_line_enclosing.mjs";
export function app_code_program_step_line_never_words(
  lines,
  trace,
  index,
  pressed,
) {
  arguments_assert(arguments, 4);
  ("Why a pressed line is not the next to run, when it never runs at all: the nearest if around it that runs is false every time it runs. null when the line runs, or when something else keeps it from running. lines is the program's lines, trace the lines it runs in order, index how many have run, and pressed the line pressed");
  ("2026-10-23, the human chose these words. Said whether or not the if has run yet, since the line never runs either way. Not picked: saying only once the if has run, which leaves the press before it with no words");
  function lambda(entry) {
    let r2 = entry.line;
    return r2;
  }
  let runs = trace.map(lambda);
  if (runs.includes(pressed)) {
    return null;
  }
  function lambda2(j) {
    let r3 = runs.includes(j);
    return r3;
  }
  let ran = app_code_program_line_enclosing(lines, pressed).filter(lambda2);
  if (equal(ran.length, 0)) {
    return null;
  }
  let j = ran[0];
  let text = lines[j].trim();
  let b = text.includes("if (");
  if (not(b) || text.startsWith("while") || text.startsWith("for")) {
    return null;
  }
  function lambda3(line, p) {
    let r4 = equal(line, j) && equal(runs[p + 1], j + 1);
    return r4;
  }
  let true_once = runs.some(lambda3);
  if (true_once) {
    return null;
  }
  let r = {
    reason: "never_runs",
    words: [
      "That line never runs, because the ",
      "if",
      " it is inside is false",
    ],
  };
  return r;
}
