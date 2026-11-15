import { english_words_lookup } from "./english_words_lookup.mjs";
import { reply_non_english_stretches } from "./reply_non_english_stretches.mjs";
export async function reply_non_english_stretches_of(message) {
  "$plain message";
  "The stretches of one message written in some other language, read against this machine's word list.";
  let lookup = await english_words_lookup();
  let stretches = reply_non_english_stretches(message, lookup);
  return stretches;
}
