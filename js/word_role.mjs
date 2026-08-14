import { word_role_words } from "./word_role_words.mjs";
export function word_role(root) {
  "The job a root does, where it does one - reason, contrast, denial and the rest - and an empty word where it does none.";
  "$plain root";
  "It is handed a ROOT, not a word as written, because its caller has already rooted everything it holds and rooting twice would be work done for nothing.";
  "An empty word rather than nothing at all, so a caller can compare the answer without first asking whether there was one.";
  let roles = word_role_words();
  let held = roles[root];
  if (held) {
    return held;
  }
  return "";
}
