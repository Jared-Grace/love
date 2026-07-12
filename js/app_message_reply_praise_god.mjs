import { reply_sequence_outputs } from "./reply_sequence_outputs.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_word_god } from "./reply_word_god.mjs";
import { app_reply_choices_praise } from "./app_reply_choices_praise.mjs";
import { prayer_end } from "./prayer_end.mjs";
export function app_message_reply_praise_god() {
  let v = prayer_end();
  let v2 = app_reply_choices_praise();
  let god = reply_word_god();
  let fn11 = reply_optional("i");
  let fn10 = reply_sequence_outputs(["prai", fn11, "se", god], [v2, v]);
  return fn10;
}
