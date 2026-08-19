import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_tally } from "./list_tally.mjs";
export function gloss_findings_edits_tally(findings) {
  "How many findings stand at each distance from the word the source writes - one entry per number of edits, counting the findings that far away.";
  "The counts are the measurement every one of these readings is after. A finding on its own says nothing about whether an explanation is wrong: one edit is very often two sources spelling a word differently, and five is a different word altogether. Only the counts separate the two, and they say it over every finding rather than over the few anybody had time to read.";
  "Three readings asked for this and each carried its own line of it, one of them handing its way of reading a finding out through its answer for the next one to use. A reader taken apart and passed around is a reader that can be given the wrong list.";
  arguments_assert(arguments, 1);
  let distances = list_map_property(findings, "edits");
  let counted = list_tally(distances);
  return counted;
}
