import { arguments_assert } from "./arguments_assert.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_word_in } from "./reply_word_in.mjs";
import { reply_phrase_jesus } from "./reply_phrase_jesus.mjs";
import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_phrase_my_friend_in_christ() {
  arguments_assert(arguments, 0);
  ("Hears friend, with my before it or not, and with in Christ after it or not.");
  let my = reply_optional("my");
  let word_in = reply_word_in();
  let phrase_jesus = reply_phrase_jesus();
  let in_christ = reply_sequence_optional([word_in, phrase_jesus]);
  let phrase = reply_sequence([my, "friend", in_christ]);
  return phrase;
}
