import { emoji_handshake } from "../../../love/public/src/emoji_handshake.mjs";
import { text_the_servant_of_god_is_first_upper } from "../../../love/public/src/text_the_servant_of_god_is_first_upper.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_reply_choices_name() {
  let t = text_combine_multiple([
    emoji_pray(),
    " ",
    text_the_servant_of_god_is_first_upper(),
    ' called Jared Patten Mathis - "When Jared was 162 years old, he became the father of Enoch." Genesis 5:18 ',
    emoji_handshake(),
  ]);
  return t;
}
