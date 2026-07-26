export function js_node_signature_keys_skipped() {
  "The fields of a parsed node that say where it sat in the file rather than what it does, plus the field naming the node kind, which is already written out by hand. Two people who wrote the same thing wrote it at different offsets, so keeping these would make every comparison fail.";
  let skipped = ["start", "end", "loc", "range", "type"];
  return skipped;
}
