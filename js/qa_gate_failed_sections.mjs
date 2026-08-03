import { text_brace_depth } from "./text_brace_depth.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { text_split_last } from "./text_split_last.mjs";
import { list_first_is } from "./list_first_is.mjs";
import { qa_gate_failed_prefix } from "./qa_gate_failed_prefix.mjs";
import { list_skip } from "./list_skip.mjs";
import { newline } from "./newline.mjs";
import { text_split } from "./text_split.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_between } from "./text_between.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_split_colon } from "./text_split_colon.mjs";
import { list_join } from "./list_join.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
export function qa_gate_failed_sections(output) {
  "Everything each complaining gate printed when it was asked again on its own, read back out of what the run printed, gate by gate";
  "The whole of what it said, not the one sentence it threw. A gate that finds eight faults prints the eight and then throws a count, so the sentence alone carries no name at all - and whoever reads it next is handed a number and left to find the eight by hand. The names were printed the whole time, one line above";
  "The gate's own name is left out, its heading dropped and its complaint taken apart at the colon. Every gate is itself a function of this repo, so a section read whole would name the gate among the things at fault, and point the reader at whoever last edited the gate rather than at whoever wrote the thing it is complaining about";
  "A gate that was quiet when asked again is left out, because it never had anything wrong with it - that is what a file being saved mid-run looks like";
  "A complaint may run over several lines, and it is followed to its end. The gates that measure a list of offenders against a record print nothing at all as they go and carry the whole of what they found in one thrown object, laid out over as many lines as it has names. Ending the section on the line the complaint began on kept the first of those lines and dropped the rest, so those gates read back as having named nobody - and a gate that named nobody cannot be placed, so every one of them held every app. Sixteen were doing exactly that in one recorded run.";
  "How far to keep reading is asked of the braces rather than of the next heading, because the reasons printed under a complaint are not part of it, and out here they follow it directly. Inside the frozen copy they are not printed at all, so reading to the heading would have behaved differently in the two places - the worse kind of difference, since the record is written in one of them and read in the other.";
  let edge = "===";
  let opening = "=== ";
  let closing = " ===";
  let failure = qa_gate_failed_prefix();
  let hush = "QUIET ON THE SECOND ASK  ";
  let separator = newline();
  let lines = text_split(output, separator);
  let sections = [];
  let name = null;
  let said = [];
  let owed = 0;
  function close_section() {
    let whole = list_join(said, separator);
    let section = {
      name: name,
      said: whole,
    };
    list_add(sections, section);
    name = null;
    owed = 0;
  }
  for (let line of lines) {
    let opens = text_starts_with(line, edge);
    let closes = text_ends_with(line, edge);
    let heading = and(opens, closes);
    if (heading) {
      name = text_between(line, opening, closing);
      said = [];
      owed = 0;
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
      let owing = greater_than(owed, 0);
      if (owing) {
        ("still inside the complaint that opened a line or more ago, so this line is part of it and the section stays open until the whole of it has arrived");
        owed = owed + text_brace_depth(line);
        let arrived = less_than_equal(owed, 0);
        if (arrived) {
          close_section();
        }
      }
      continue;
    }
    let after = text_split_last(line, failure);
    let halves = text_split_colon(after);
    let mine = list_first_is(halves, name);
    if (not(mine)) {
      continue;
    }
    let rest = list_skip(halves, 1);
    let complaint = list_join(rest, ":");
    list_add(said, complaint);
    owed = text_brace_depth(complaint);
    let whole_arrived = less_than_equal(owed, 0);
    if (whole_arrived) {
      close_section();
    }
  }
  let cut_off = greater_than(owed, 0);
  if (cut_off) {
    ("the printing stopped part way through a complaint - keep what did arrive, since a gate known to be red with nothing said about it is the worst thing to hand a reader");
    close_section();
  }
  return sections;
}
