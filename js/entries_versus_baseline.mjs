import { arguments_assert } from "./arguments_assert.mjs";
import { entries_fields_difference } from "./entries_fields_difference.mjs";
export function entries_versus_baseline(offenders, known, fields) {
  arguments_assert(arguments, 3);
  ("What changed since the baseline was written, for a ratchet that keeps a list of");
  ("names per function rather than a flat list of names.");
  ("added is what the repo offends with now and did not then - the gate refuses it.");
  ("stale is what the baseline still lists but no longer happens, the ratchet's other");
  ("tooth, because an entry left behind after a cleanup lets the same name come back");
  ("unnoticed.");
  ("The two directions are the same comparison read each way round, so a gate that");
  ("wrote them out separately could grow one tooth and not the other. The only thing");
  ("that differs between one such ratchet and the next is which lists on the entry to");
  ("compare, so that is what is asked for here and nothing else is.");
  let added = entries_fields_difference(offenders, known, fields);
  let stale = entries_fields_difference(known, offenders, fields);
  let change = {
    added,
    stale,
  };
  return change;
}
