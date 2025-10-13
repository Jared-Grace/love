import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { app_reply_response_how_r_u } from "../../../love/public/src/app_reply_response_how_r_u.mjs";
import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { string_tokens } from "../../../love/public/src/string_tokens.mjs";
import { object_property_delete_multiple } from "../../../love/public/src/object_property_delete_multiple.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { http_local_text } from "../../../love/public/src/http_local_text.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_message_download } from "../../../love/public/src/app_message_download.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_map } from "./list_map.mjs";
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
  let tokens_matches = string_tokens(lower, o);
  function lambda2(tokens) {
    async function lambda(a) {
      let outputs = object_property_get(a, "outputs");
      let item = app_reply_response_how_r_u();
      list_add(outputs, item);
      object_property_set_exists_not(a, "success", true);
    }
    let fn = reply_sequence(["how", "are", "you"]);
    let r = reply_on_match(fn, lambda);
    marker("1");
    const a = {
      tokens,
      outputs: [],
    };
    r(a);
    return a;
  }
  let mapped2 = list_map(list, lambda2);
  let filtered = list_filter_property(mapped2, "success", true);
  let first2 = list_first(filtered);
  return first2;
}
