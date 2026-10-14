import { text_replace } from "./text_replace.mjs";
import { reply_choices_glory } from "./reply_choices_glory.mjs";
import { reply_choices_glory_name } from "./reply_choices_glory_name.mjs";
import { text_emojis_jewish } from "./text_emojis_jewish.mjs";
export function text_reply_jewish(text) {
  "A reply as it is sent to a Jewish reader: the glory line gives glory to the name of God, and the Christian emojis are swapped for Jewish ones.";
  "The glory line is swapped first, because it holds a cross the emoji swap would otherwise change and leave it no longer matching.";
  let from2 = reply_choices_glory();
  let to = reply_choices_glory_name();
  let glory = text_replace(text, from2, to);
  let v = text_emojis_jewish(glory);
  return v;
}
