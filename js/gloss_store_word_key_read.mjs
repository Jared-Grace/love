import { gloss_store_urdu_is } from "./gloss_store_urdu_is.mjs";
import { word_root } from "./word_root.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function gloss_store_word_key_read(fn) {
  "The reader that keys the words of one gloss store, so that two spellings of one word are met as one rather than as strangers.";
  "THIS IS THE SIBLING OF THE POINTER READER AND IT ANSWERS THE OTHER HALF OF THE SAME QUESTION. That one says whether an explanation points the reader further up; this one says what it would have to find up there to have pointed at something. Both are properties of the store rather than of the reading, because the language an explanation is written in and the language its words are taught in are settled once per store and never per chapter.";
  "The Cebuano gloss decided this before the Urdu one met it, and decided it the same way: words are matched on their root rather than on their spelling, because an explanation says both this word stands again in verse fifteen and this word's root gave the word in verse fourteen, and only the root answers both. Matching spellings calls every one of the second kind wrong.";
  "Measured on 2026-09-24, every one of the thirteen pointers the Urdu store was said to have left dangling pointed at another form of its own word - army at armies, saves at saved, woes at woe, touches at touched - and thirteen of thirteen meet once the root is asked for instead of the spelling. There were never thirteen missing explanations; there was one reader asking after the wrong thing.";
  "The store that teaches English gets the English rooting, because the words it keys are the English ones being taught rather than the Urdu they are explained in. Every other store keeps exactly what it had, a fold of capitals and nothing more, so nothing that was green moves.";
  let urdu = gloss_store_urdu_is(fn);
  if (urdu) {
    let rooted = word_root;
    return rooted;
  }
  let folded = text_lower_to;
  return folded;
}
