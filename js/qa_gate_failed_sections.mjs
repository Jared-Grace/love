import { list_from_index } from "./list_from_index.mjs";
import { newline } from "./newline.mjs";
import { text_split } from "./text_split.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_between } from "./text_between.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_split_colon } from "./text_split_colon.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_join } from "./list_join.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export function qa_gate_failed_sections(output) {
  "Everything each complaining gate printed when it was asked again on its own, read back out of what the run printed, gate by gate";
  "The whole of what it said, not the one sentence it threw. A gate that finds eight faults prints the eight and then throws a count, so the sentence alone carries no name at all - and whoever reads it next is handed a number and left to find the eight by hand. The names were printed the whole time, one line above";
  "The gate's own name is left out, its heading dropped and its complaint taken apart at the colon. Every gate is itself a function of this repo, so a section read whole would name the gate among the things at fault, and point the reader at whoever last edited the gate rather than at whoever wrote the thing it is complaining about";
  "A gate that was quiet when asked again is left out, because it never had anything wrong with it - that is what a file being saved mid-run looks like";
  let edge = "===";
  let opening = "=== ";
  let closing = " ===";
  let failure = "GATE FAILED  ";
  let hush = "QUIET ON THE SECOND ASK  ";
  let separator = newline();
  let lines = text_split(output, separator);
  let sections = [];
  let name = null;
  let said = [];
  for (let line of lines) {
    let opens = text_starts_with(line, edge);
    let closes = text_ends_with(line, edge);
    let heading = and(opens, closes);
    if (heading) {
      name = text_between(line, opening, closing);
      said = [];
      continue;
    }
    let nobody = null_is(name);
    if (nobody) {
      continue;
    }
    let hushed = text_includes(line, hush);
    if (hushed) {
      name = null;
      continue;
    }
    let complained = text_includes(line, failure);
    if (not(complained)) {
      list_add(said, line);
      continue;
    }
    let parts = text_split(line, failure);
    let after = list_last(parts);
    let halves = text_split_colon(after);
    let complaining = list_first(halves);
    let mine = equal(complaining, name);
    if (not(mine)) {
      continue;
    }
    let rest = list_from_index(halves, 1);
    let complaint = list_join(rest, ":");
    list_add(said, complaint);
    let whole = list_join(said, separator);
    let section = {
      name: name,
      said: whole,
    };
    list_add(sections, section);
    name = null;
  }
  return sections;
}
