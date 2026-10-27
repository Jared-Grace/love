import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_program_line_enclosing } from "./app_code_program_line_enclosing.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export function app_code_program_step_line_never_words(lines, trace, pressed) {
  arguments_assert(arguments, 3);
  ("Why a pressed line is not the next to run, when it never runs at all: the nearest { } around it whose head runs is never entered - an if false each time it runs, or an else whose ifs before it are never all false. null when the line runs, or when something else keeps it from running. lines is the program's lines, trace the lines it runs in order, and pressed the line pressed");
  ("2026-10-23, the human chose these words, and asked what happens when the if's name is changed before it runs: so whether an if is true is read from what ran, never from the condition. An if that runs while the first line inside its { } never runs was false each time it ran, whatever its name held before. Said whether or not the if has run yet, since the line never runs either way. Not picked: saying only once the if has run, which leaves the press before it with no words");
  ("A { } whose head never runs is not the cause, so the next one out is asked; a { } entered while the line still never runs was left some other way, so nothing is said");
  ("A line starting with } closes a { } rather than sitting inside it, so the if it closes is not one it is inside");
  function lambda(entry) {
    let r4 = entry.line;
    return r4;
  }
  let runs = trace.map(lambda);
  if (
    runs.includes(pressed) ||
    list_get(lines, pressed).trim().startsWith("}")
  ) {
    return null;
  }
  for (let j of app_code_program_line_enclosing(lines, pressed)) {
    let text = list_get(lines, j).trim();
    let entered = runs.includes(j + 1);
    if (text.startsWith("} else {")) {
      ("the ifs of the chain this else ends, found by walking back along each } to the line whose { it closes");
      let heads = [];
      let k = j;
      while (list_get(lines, k).trim().startsWith("}")) {
        k = app_code_program_line_enclosing(lines, k)[0];
        heads.push(k);
      }
      let b = runs.includes(k);
      if (not(b)) {
        continue;
      }
      if (entered) {
        return null;
      }
      if (equal(heads.length, 1)) {
        let r = {
          reason: "never_runs_else",
          words: [
            "That line never runs, because it is inside an ",
            "else",
            ", and its ",
            "if",
            " is true when it runs",
          ],
        };
        return r;
      }
      let r2 = {
        reason: "never_runs_else_chain",
        words: [
          "That line never runs, because it is inside an ",
          "else",
          ", and each time one of the ",
          "if",
          " lines before it is true",
        ],
      };
      return r2;
    }
    let b2 = text.includes("if (");
    if (not(b2) || text.startsWith("while") || text.startsWith("for")) {
      return null;
    }
    let b3 = runs.includes(j);
    if (not(b3)) {
      continue;
    }
    if (entered) {
      return null;
    }
    let r3 = {
      reason: "never_runs",
      words: [
        "That line never runs, because the ",
        "if",
        " it is inside is false when it runs",
      ],
    };
    return r3;
  }
  return null;
}
