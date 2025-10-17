import { app_message_download_messages } from "../../../love/public/src/app_message_download_messages.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_message_reply_choices } from "../../../love/public/src/app_message_reply_choices.mjs";
import { reply_messages_matches_not } from "../../../love/public/src/reply_messages_matches_not.mjs";
export async function app_message_reply_matches() {
  marker("1");
  let messages = await app_message_download_messages();
  let start = app_message_reply_choices();
  let result = await reply_messages_matches_not(messages, start);
  return result;
}
