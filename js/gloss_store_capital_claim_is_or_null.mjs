import { gloss_store_urdu_is } from "./gloss_store_urdu_is.mjs";
import { app_en_learn_bible_gloss_urdu_explain_capital_claim_is } from "./app_en_learn_bible_gloss_urdu_explain_capital_claim_is.mjs";
export function gloss_store_capital_claim_is_or_null(fn) {
  "The reader that tells whether an explanation in this gloss store asserts the word in front of the reader is written with a capital letter, or nothing if nobody has written one for this store yet.";
  "Such a claim has to be recognised in the language the explanation is written in, so there is no one reader for every store. A store with no reader is passed over and said so rather than answered for with nought, which would read exactly like a store nobody had ever written a false claim in.";
  "Only the store teaching English to an Urdu reader has one today. The other two explain the words of a Bible in its own language, where the reader is not being taught which English words wear a capital, so the claim this looks for is not one those stores would make.";
  let urdu = gloss_store_urdu_is(fn);
  if (urdu) {
    let r = app_en_learn_bible_gloss_urdu_explain_capital_claim_is;
    return r;
  }
  let none = null;
  return none;
}
