import { reply_sequence_output } from "./reply_sequence_output.mjs";
import { reply_word_to } from "./reply_word_to.mjs";
import { reply_phrase_you } from "./reply_phrase_you.mjs";
import { app_reply_choices_give } from "./app_reply_choices_give.mjs";
import { reply_phrase_according_to_gods_will } from "./reply_phrase_according_to_gods_will.mjs";
import { reply_word_us } from "./reply_word_us.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_word_in } from "./reply_word_in.mjs";
import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
export function app_message_reply_give() {
  let iam = reply_phrase_i_am();
  let n = reply_word_in();
  let o_ing = reply_optional("ing");
  let requesting = reply_sequence(["request", o_ing]);
  let us = reply_word_us();
  let o_us = reply_optional(us);
  let according_to_gods_will = reply_phrase_according_to_gods_will();
  let item = app_reply_choices_give();
  let you = reply_phrase_you();
  let to = reply_word_to();
  let give = reply_sequence_output(
    [
      iam,
      requesting,
      you,
      to,
      "support",
      o_us,
      n,
      "ministry",
      according_to_gods_will,
    ],
    item,
  );
  return give;
}
