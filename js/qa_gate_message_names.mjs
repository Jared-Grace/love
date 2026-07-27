export function qa_gate_message_names(message) {
  "The gate names out of the one sentence the whole run throws when something went red.";
  "That sentence is read rather than the printed block, because it is the only place both halves of the run meet. The copy answers in text it printed and this machine answers in hand, and each prints its complaints its own way - the sentence is assembled from both, so it is the only complete list of what went red.";
  let prefix = "qa gate: ";
  let suffix = " failed";
  let after = text_after(message, prefix);
  let listed = text_before(after, suffix);
  let names = text_split_comma_space(listed);
  return names;
}
