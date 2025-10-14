import { app_message_reply_choices } from "../../../love/public/src/app_message_reply_choices.mjs";
import { reply_messages } from "../../../love/public/src/reply_messages.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_message_download } from "../../../love/public/src/app_message_download.mjs";
export async function app_message_reply() {
  let downloads = await app_message_download();
  let messages = list_map_property(downloads, "message");
  messages = ["howareyou"];
  let start = app_message_reply_choices();
  let result = await reply_messages(messages);
  log(result);
}
