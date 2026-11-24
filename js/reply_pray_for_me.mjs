import { reply_on_match_prayer_blessings } from "./reply_on_match_prayer_blessings.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_phrase_you } from "./reply_phrase_you.mjs";
import { reply_word_to } from "./reply_word_to.mjs";
import { reply_phrase_my_dear_brother } from "./reply_phrase_my_dear_brother.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_pray_for_me() {
  let o_and = reply_optional("and");
  let you = reply_phrase_you();
  let to = reply_word_to();
  let dear = reply_phrase_my_dear_brother();
  let asked = reply_sequence([
    o_and,
    "i",
    "ask",
    you,
    to,
    "pray",
    "for",
    "me",
    dear,
  ]);
  let answered = reply_on_match_prayer_blessings(asked);
  return answered;
}
