import { json_to } from "./json_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_offenders_names_candidates_cases } from "./gloss_offenders_names_candidates_cases.mjs";
import { gloss_offenders_names_candidates } from "./gloss_offenders_names_candidates.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_offenders_names_candidates_gate_run() {
  "Reads the hand-written findings dump and fails if the sheet of name candidates comes back changed in any column.";
  "The sheet is what a person marks the proper names off, and the two columns on it carry different weight - proven, where the app's own sentence says the word is a name, and merely capitalised, which is a word to look at. A change that quietly moved a row from the second to the first would hand somebody a verdict where they were promised a candidate, and nothing else in the repo would notice.";
  "The whole row is compared and not just the counts, because the spellings and the chapters are what makes a row answerable at all. A count with no chapter behind it cannot be checked by the person reading it.";
  arguments_assert(arguments, 0);
  let written = gloss_offenders_names_candidates_cases();
  let offenders = written.offenders;
  let wanted = written.wanted;
  let read = gloss_offenders_names_candidates(offenders);
  let defects = [];
  let size = wanted.length;
  let counted = read.length;
  let miscounted = json_equal_not(counted, size);
  if (miscounted) {
    defects.push({
      wanted_rows: size,
      read_rows: counted,
    });
    console.log(
      "names candidates  wanted " + size + " rows  read " + counted + " rows",
    );
  }
  let i = 0;
  while (less_than(i, size)) {
    let one = wanted[i];
    let row = read[i];
    let wrong = json_equal_not(row, one);
    if (wrong) {
      defects.push({
        wanted: one,
        read: row,
      });
      console.log(
        "names candidates  row " +
          i +
          "  wanted " +
          one.word +
          " sightings " +
          one.sightings +
          " declared " +
          one.declared +
          "  read " +
          json_to(row),
      );
    }
    i = i + 1;
  }
  let count = defects.length;
  console.log("names candidates defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss offenders names candidates gate: " +
        count +
        " rows wrong - the sheet of proper names is being gathered, ranked or marked differently than the corpus says",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
