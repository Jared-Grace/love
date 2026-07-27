import { text_replace } from "./text_replace.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_map } from "./list_map.mjs";
import { text_trim } from "./text_trim.mjs";
export function qa_gate_message_names(message) {
  "The gate names out of the one sentence the whole run throws when something went red.";
  "That sentence is read rather than the printed block, because it is the only place both halves of the run meet. The copy answers in the text it printed and this machine answers in hand, and each prints its complaints its own way - the sentence is assembled from both, so it is the only complete list of what went red.";
  let prefix = "qa gate: ";
  let suffix = " failed";
  let opened = text_replace(message, prefix, "");
  let listed = text_replace(opened, suffix, "");
  let parts = text_split_comma(listed);
  let names = list_map(parts, text_trim);
  return names;
}
