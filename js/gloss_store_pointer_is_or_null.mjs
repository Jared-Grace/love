import { gloss_store_urdu_is } from "./gloss_store_urdu_is.mjs";
import { app_en_learn_bible_gloss_urdu_explain_pointer_is } from "./app_en_learn_bible_gloss_urdu_explain_pointer_is.mjs";
export function gloss_store_pointer_is_or_null(fn) {
  "The reader that tells whether an explanation in this gloss store opens by pointing back at a word met earlier, or nothing if nobody has written one for this store yet.";
  "A pointer has to be recognised in the language the explanation is written in, and the stores are written in different languages, so there is no one reader for all of them. A store with no reader is passed over and said so rather than answered for with nought, which would read exactly like a store that had none.";
  "Only the store teaching English to an Urdu reader has one today. The English stores are watched by a different reader that looks for a turn of phrase, and its list of phrases cannot be widened to Urdu: measured over the store, the phrase for ‘which came above’ opens eleven hundred explanations that go on to say fully what the word means here, so a reader judging by phrase would call good writing bad.";
  let urdu = gloss_store_urdu_is(fn);
  if (urdu) {
    let r = app_en_learn_bible_gloss_urdu_explain_pointer_is;
    return r;
  }
  let none = null;
  return none;
}
