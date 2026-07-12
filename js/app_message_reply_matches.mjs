import { reply_messages_matches } from "./reply_messages_matches.mjs";
import { app_message_download_messages } from "./app_message_download_messages.mjs";
import { app_message_reply_choices } from "./app_message_reply_choices.mjs";
export async function app_message_reply_matches() {
  let messages = await app_message_download_messages();
  let start = app_message_reply_choices();
  let result = await reply_messages_matches(messages, start);
  return result;
}
