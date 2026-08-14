import { arguments_assert } from "./arguments_assert.mjs";
export function bible_sentence_gaps_tally_empty() {
  "A counting of how far sentences carried on with nothing counted into it yet.";
  "Nothing counted is not the same as nothing to count, so the numbers start at zero and the tally at no distances rather than at null. A caller that adds nothing to this gets an honest empty answer instead of one that has to be checked before it can be read.";
  arguments_assert(arguments, 0);
  let tallied = {
    counted: 0,
    tally: {},
    unread: 0,
    unfinished: 0,
  };
  return tallied;
}
