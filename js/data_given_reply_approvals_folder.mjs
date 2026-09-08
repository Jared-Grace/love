import { data_given_folder } from "./data_given_folder.mjs";
import { path_join } from "./path_join.mjs";
export function data_given_reply_approvals_folder() {
  "Where the verdicts a reviewer has left on the reply-rules bench are kept - one file for each file they have passed.";
  "It sits in the given half rather than the found half because these records are read to decide something, and the thing they decide is whether a change may be applied at all. The found half is kept for what a run reported and is never consulted afterwards, so a record somebody acts on does not belong there whoever wrote it.";
  "Said once here and joined onto rather than spelled out at each place that wants it, for the same reason every other room in here is said once: a room spelled in several places moves without every spelling following it, and a spelling nobody reads on the way past is just a piece of text that happens to be wrong.";
  let given = data_given_folder();
  let v = path_join([given, "reply_approvals"]);
  return v;
}
