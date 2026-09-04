import { qa_gates_run_failed_prefix } from "./qa_gates_run_failed_prefix.mjs";
import { qa_gates_run_failed_suffix } from "./qa_gates_run_failed_suffix.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_map } from "./list_map.mjs";
import { text_trim } from "./text_trim.mjs";
export function qa_gate_message_names(message) {
  "The gate names out of the one sentence the whole run throws when something went red.";
  "That sentence is read rather than the printed block, because it is the only place both halves of the run meet. The copy answers in the text it printed and this machine answers in hand, and each prints its complaints its own way - the sentence is assembled from both, so it is the only complete list of what went red.";
  "The words around the list are asked for rather than spelled again here. This reader and the run that builds the sentence are one agreement, and an agreement spelled in both places is one that can be half changed - after which this quietly hands back every name with a word still stuck to it, and nothing anywhere goes red about it.";
  let prefix = qa_gates_run_failed_prefix();
  let suffix = qa_gates_run_failed_suffix();
  let opened = text_replace(message, prefix, "");
  let listed = text_replace(opened, suffix, "");
  let parts = text_split_comma(listed);
  let names = list_map(parts, text_trim);
  return names;
}
