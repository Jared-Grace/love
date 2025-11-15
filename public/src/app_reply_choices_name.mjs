import { emoji_handshake } from "../../../love/public/src/emoji_handshake.mjs";
import { string_the_servant_of_god_is } from "../../../love/public/src/string_the_servant_of_god_is.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
export function app_reply_choices_name() {
  let v2 =
    emoji_pray() +
    " " +
    string_the_servant_of_god_is() +
    ' called Jared Patten Mathis - "When Jared was 162 years old, he became the father of Enoch." Genesis 5:18 ' +
    emoji_handshake();
  return v2;
}
