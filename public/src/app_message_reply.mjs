import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_message_download } from "../../../love/public/src/app_message_download.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_message_reply() {
  let downloads = await app_message_download();
  let mapped = list_map_property(downloads, "message");
  marker("1");
}
