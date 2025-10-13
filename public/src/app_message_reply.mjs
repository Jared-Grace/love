import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { string_tokens } from "../../../love/public/src/string_tokens.mjs";
import { object_property_delete_multiple } from "../../../love/public/src/object_property_delete_multiple.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { http_local_text } from "../../../love/public/src/http_local_text.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_message_download } from "../../../love/public/src/app_message_download.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_message_reply() {
  let downloads = await app_message_download();
  let mapped = list_map_property(downloads, "message");
  let first = list_first(mapped);
  let lower = string_lower_to(first);
  let text = await http_local_text(
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json",
  );
  let o = json_from(text);
  let excludes = ["h", "w", "e", "wa", "ey", "ar", "ware", "re"];
  object_property_delete_multiple(o, excludes);
  let properties = object_properties(o);
  let tokens_matches = string_tokens(lower, o);
  let fn = reply_sequence(sequence);
  return tokens_matches;
  marker("1");
}
