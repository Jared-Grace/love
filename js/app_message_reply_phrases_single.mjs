import { reply_choice } from "./reply_choice.mjs";
import { app_message_reply_trust } from "./app_message_reply_trust.mjs";
import { app_message_reply_god } from "./app_message_reply_god.mjs";
import { app_message_reply_jesus } from "./app_message_reply_jesus.mjs";
export function app_message_reply_phrases_single() {
  let fn2 = app_message_reply_jesus();
  let fn7 = app_message_reply_god();
  let fn26 = app_message_reply_trust();
  let phrases_single = reply_choice([fn2, fn7, fn26]);
  return phrases_single;
}
