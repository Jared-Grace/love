import { words_unjoined } from "./words_unjoined.mjs";
import { text_roots_unjoined_tails } from "./text_roots_unjoined_tails.mjs";
export async function words_unjoined_tails() {
  "The endings the New Testament and the sermons are actually missing each other on, commonest first.";
  "This is the one to read before writing down a new word ending. It answers with a tail, a count and a handful of the words, which is everything a decision needs and nothing it does not.";
  let unjoined = await words_unjoined();
  let tails = text_roots_unjoined_tails(unjoined);
  return tails;
}
