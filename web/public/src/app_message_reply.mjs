import { string_chunk } from "../../../love/public/src/string_chunk.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { http_local_text } from "../../../love/public/src/http_local_text.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_message_download } from "../../../love/public/src/app_message_download.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { string_size } from "./string_size.mjs";
export async function app_message_reply() {
  let downloads = await app_message_download();
  let mapped = list_map_property(downloads, "message");
  let first = list_first(mapped);
  let lower = string_lower_to(first);
  let result = await http_local_text(
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json",
  );
  let o = json_from(result);
  let properties = object_properties(o);
  let index_last = string_size(lower);
  let index_left = 0;
  string_chunk(lower, o, index_last);
  marker("1");
}
