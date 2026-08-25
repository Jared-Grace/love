import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { text_slice } from "./text_slice.mjs";
export function texts_start_shared(texts) {
  "The longest run of letters that every one of some texts begins with, or nothing when they share no beginning at all.";
  "A family shows itself here. Names picked out of one corner of a repo all carry that corner's own word at the front, and that word is longer than whatever was asked for. Held up against what was asked for, it tells a whole answer apart from one family that merely happens to answer.";
  arguments_assert(arguments, 1);
  let empty = list_empty_is(texts);
  if (empty) {
    let nothing = "";
    return nothing;
  }
  let shared = list_first(texts);
  for (let text of texts) {
    while (text_starts_with_not(text, shared)) {
      shared = text_slice(shared, 0, -1);
    }
  }
  return shared;
}
