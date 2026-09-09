import { text_split } from "./text_split.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_includes_any } from "./text_includes_any.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join } from "./list_join.mjs";
export function gloss_explain_claim_sentences_stripped(
  explain,
  claims,
  sentence_end,
) {
  "One word explanation with every whole sentence of it that makes one of these claims taken out, and every other sentence left exactly as it was written.";
  "$plain explain";
  "the explanation is prose a reader reads. It is text to look at and nothing that runs.";
  "$plain sentence_end";
  "the mark is whatever ends a sentence in the language the explanation is written in, which is not the full stop in every script.";
  "A whole sentence goes rather than the matched words, because a claim is made by a sentence. Cutting the words out of the middle of one leaves a reader with the wreckage of a sentence that still reads as though it were saying something.";
  "An explanation making no such claim comes back exactly as itself, which is what lets this be asked of every word of a chapter rather than only of the ones somebody has already picked out. That holds because an empty piece is dropped and then one is put back, so a text already ending in the mark ends in it again.";
  "An explanation that is nothing but the claim comes back untouched instead of empty. A word with no explanation at all is a worse thing to leave behind than a word with a wrong one, and which of the two to write is a judgement, not something to be decided by a fall-through here.";
  let pieces = text_split(explain, sentence_end);
  let kept = [];
  for (let piece of pieces) {
    let sentence = text_trim(piece);
    let claimed = text_includes_any(sentence, claims);
    let keep = not(claimed);
    if (keep) {
      let blank = equal(sentence, "");
      let content = not(blank);
      if (content) {
        list_add(kept, piece);
      }
    }
  }
  let none = list_empty_is(kept);
  if (none) {
    return explain;
  }
  let last = "";
  list_add(kept, last);
  let stripped = list_join(kept, sentence_end);
  return stripped;
}
