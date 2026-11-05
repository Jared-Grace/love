import { reply_optional } from "./reply_optional.mjs";
import { reply_phrase_you } from "./reply_phrase_you.mjs";
import { reply_word_to } from "./reply_word_to.mjs";
import { reply_phrase_my_dear_brother } from "./reply_phrase_my_dear_brother.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { prayer_according_to_desire } from "./prayer_according_to_desire.mjs";
import { prayer_blessing_expand } from "./prayer_blessing_expand.mjs";
import { reply_on_match_output_multiple } from "./reply_on_match_output_multiple.mjs";
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
  let line = prayer_according_to_desire();
  let v = prayer_blessing_expand();
  let lines = [line, v];
  let answered = reply_on_match_output_multiple(asked, lines);
  return answered;
}
