import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { string_index_of_last } from "../../../karate_code/public/src/string_index_of_last.mjs";
import { each_range_from } from "../../../love/public/src/each_range_from.mjs";
import { string_slice } from "../../../love/public/src/string_slice.mjs";
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
  let result = await http_local_text(
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json",
  );
  let o = json_from(result);
  let properties = object_properties(o);
  let index_last = string_index_of_last(lower);
  let index_left = 0;
  function lambda3(index_right) {
    let sliced = string_slice(lower, index_left, index_right);
    let exists = object_property_exists(o, sliced);
    if (false) {
    }
  }
  each_range_from(index_left, index_last, lambda3);
  marker("1");
  return o;
}
