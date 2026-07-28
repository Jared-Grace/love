import { entries_fields_difference } from "./entries_fields_difference.mjs";
export function unbound_entries_difference(entries, others) {
  "the unbound names each entry has that the entry for the same function in others does not. A function whose names all appear in others drops out, so what comes back is only the change. A function missing from others read no unbound name there, which is not the same as a lookup having failed, so it counts as an empty list rather than an absence.";
  "one list on the entry rather than two, which is the only way this differs from the shadowing ratchet, so the comparison itself is shared and only the name of the list is said here.";
  let fields = ["unbound"];
  let changed = entries_fields_difference(entries, others, fields);
  return changed;
}
