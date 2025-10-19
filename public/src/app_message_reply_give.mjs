import { reply_sequence_output } from "../../../love/public/src/reply_sequence_output.mjs";
import { reply_word_to } from "../../../love/public/src/reply_word_to.mjs";
import { reply_phrase_you } from "../../../love/public/src/reply_phrase_you.mjs";
import { app_reply_choices_give } from "../../../love/public/src/app_reply_choices_give.mjs";
import { reply_phrase_according_to_gods_will } from "../../../love/public/src/reply_phrase_according_to_gods_will.mjs";
import { reply_word_us } from "../../../love/public/src/reply_word_us.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { reply_optional } from "../../../love/public/src/reply_optional.mjs";
import { reply_word_in } from "../../../love/public/src/reply_word_in.mjs";
import { reply_phrase_i_am } from "../../../love/public/src/reply_phrase_i_am.mjs";
export function app_message_reply_give() {
  let iam = reply_phrase_i_am();
  let n = reply_word_in();
  let o_ing = reply_optional("ing");
  let requesting = reply_sequence(["request", o_ing]);
  const us2 = reply_word_us();
  let o_us = reply_optional(us2);
  let according_to_gods_will2 = reply_phrase_according_to_gods_will();
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
      according_to_gods_will2,
    ],
    item,
  );
  return give;
}
