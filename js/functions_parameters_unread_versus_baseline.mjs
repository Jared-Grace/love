import { entries_versus_baseline } from "./entries_versus_baseline.mjs";
export function functions_parameters_unread_versus_baseline(offenders, known) {
  "what changed since the baseline was written. added is a parameter nothing reads that the repo did not carry then - the gate refuses it. stale is one the baseline still lists that has since been read or removed - the ratchet's other tooth, because an entry left behind after a cleanup lets the same dead parameter come back unnoticed.";
  "one list of names hangs off each function, so only the name of that list is said here and every other part of reading a ratchet each way round is shared.";
  let fields = ["unread"];
  let change = entries_versus_baseline(offenders, known, fields);
  return change;
}
