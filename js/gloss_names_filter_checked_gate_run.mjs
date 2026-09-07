import { json_to } from "./json_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_names_filter_checked_cases } from "./gloss_names_filter_checked_cases.mjs";
import { gloss_names_filter_checked } from "./gloss_names_filter_checked.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_names_filter_checked_gate_run() {
  "Fails if the check on the queue's name filter puts a row on the wrong side, in either direction.";
  "The corpus disagrees with itself on purpose - one word the filter took and the sentences prove, one it took and no sentence proves, one it left that the sentences prove. A join written the wrong way round answers the first of those correctly and gets the other two backwards, and the totals it prints look ordinary either way. Checking the words themselves rather than the counts is what makes that visible.";
  "The words are compared and not the whole rows, because the rows carry the chapters and the standing explanations, and those belong to the sweep that gathered them rather than to this split.";
  arguments_assert(arguments, 0);
  let written = gloss_names_filter_checked_cases();
  let offenders = written.offenders;
  let names_taken = written.names_taken;
  let wanted = written.wanted;
  let checked = gloss_names_filter_checked(offenders, names_taken);
  function row_word(row) {
    let word = property_get(row, "word");
    return word;
  }
  let list = property_get(checked, "proven");
  let list2 = property_get(checked, "unproven");
  let list3 = property_get(checked, "missed");
  let read = {
    taken_total: property_get(checked, "taken_total"),
    declared_total: property_get(checked, "declared_total"),
    proven_total: property_get(checked, "proven_total"),
    unproven_total: property_get(checked, "unproven_total"),
    missed_total: property_get(checked, "missed_total"),
    proven_words: list_map(list, row_word),
    unproven_words: list_map(list2, row_word),
    missed_words: list_map(list3, row_word),
  };
  let defects = [];
  let wrong = json_equal_not(read, wanted);
  if (wrong) {
    defects.push({
      wanted,
      read,
    });
    console.log(
      "names filter checked  wanted " +
        json_to(wanted) +
        "  read " +
        json_to(read),
    );
  }
  let count = defects.length;
  console.log("names filter checked defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss names filter checked gate: the split of the queue's dropped names is wrong - a name the writing proves is being counted as resting on the vocabulary test alone, or the other way about",
    );
  }
  let r = {
    checked: 1,
    defects: 0,
  };
  return r;
}
