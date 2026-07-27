import { text_slice_from } from "./text_slice_from.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function diff_line_kind(line) {
  "What one changed line of a difference is made of: an import, a written-out comment, or actual code";
  "The three are worth telling apart because only one of them is a gap. Imports are already written by the canonicalizing pass, and a comment in this repo is a bare piece of text standing on its own line, which no transform was ever going to compose. What is left is the code, and that is where a missing command would have helped";
  let without_sign = text_slice_from(line, 1);
  let bare = text_trim(without_sign);
  let brought_in = text_starts_with(bare, "import ");
  if (brought_in) {
    return "import";
  }
  let written = text_starts_with(bare, '"');
  if (written) {
    return "comment";
  }
  let wrapped = text_starts_with(bare, '("');
  if (wrapped) {
    return "comment";
  }
  return "code";
}
