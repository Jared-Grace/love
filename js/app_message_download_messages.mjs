import { list_map_property } from "./list_map_property.mjs";
import { app_message_download } from "./app_message_download.mjs";
export async function app_message_download_messages() {
  let downloads = await app_message_download();
  let messages = list_map_property(downloads, "message");
  return messages;
}
