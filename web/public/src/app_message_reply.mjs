import { marker } from "../../../love/public/src/marker.mjs";
import { app_message_reply_choices } from "../../../love/public/src/app_message_reply_choices.mjs";
import { reply_messages_matches_not } from "../../../love/public/src/reply_messages_matches_not.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_message_download } from "../../../love/public/src/app_message_download.mjs";
export async function app_message_reply() {
  marker("1");
  let downloads = await app_message_download();
  let messages = list_map_property(downloads, "message");
  let start = app_message_reply_choices();
  let result = reply_messages_matches_not(messages, start);
  return result;
}
