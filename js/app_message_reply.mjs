import { app_message_download_messages } from "./app_message_download_messages.mjs";
import { app_message_reply_choices } from "./app_message_reply_choices.mjs";
import { reply_messages_matches_not } from "./reply_messages_matches_not.mjs";
export async function app_message_reply() {
  let messages = await app_message_download_messages();
  let start = app_message_reply_choices();
  let result = await reply_messages_matches_not(messages, start);
  return result;
}
