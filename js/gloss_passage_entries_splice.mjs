import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
export function gloss_passage_entries_splice(passage, at, remove, written) {
  "Put a run of hand-written explanations into one passage at the place given, taking out however many were standing there, and answer with the count before and after.";
  "This is the way an explanation that was never written gets written, and the way one that drifted onto the wrong word gets replaced. Removing none is an insertion; writing none is a deletion; doing both at once swaps a run for another run.";
  let entries = gloss_passage_entries(passage);
  let before = list_size(entries);
  let head = list_slice(entries, 0, at);
  let past = add(at, remove);
  let tail = list_slice(entries, past, before);
  let spliced = list_concat_multiple([head, written, tail]);
  let value = json_format_to(spliced);
  property_set(passage, "generated", value);
  let after = list_size(spliced);
  let r = {
    before,
    after,
  };
  return r;
}
