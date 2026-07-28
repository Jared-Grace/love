import { entries_fields_difference } from "./entries_fields_difference.mjs";
export function shadowing_entries_difference(entries, others) {
  "the hidden names each entry has that the entry for the same function in others does not, rule by rule. A function whose names all appear in others drops out, so what comes back is only the change.";
  "the two rules are two lists on the same entry, which is the shape every per-function ratchet keeps, so the comparison itself is shared and only the names of the lists are said here.";
  let fields = ["shadows_outer", "shadows_function"];
  let difference = entries_fields_difference(entries, others, fields);
  return difference;
}
