import { list_add } from "../../../love/public/src/list_add.mjs";
import { reply_last } from "../../../love/public/src/reply_last.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_message_reply_choices } from "../../../love/public/src/app_message_reply_choices.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
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
  let messages = list_map_property(downloads, "message");
  let text = await http_local_text(
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json",
  );
  let dictionary = json_from(text);
  let excludes = ["h", "w", "e", "wa", "ey", "ar", "ware", "re"];
  object_property_delete_multiple(dictionary, excludes);
  let includes = [];
  function lambda(message) {
    let input = string_lower_to(message);
    let tokens_matches = string_tokens(input, dictionary);
    let last = reply_last();
    function lambda3(tokens) {
      list_add(tokens, last);
    }
    each(tokens_matches, lambda3);
    let result = {
      input,
      success: false,
    };
    function lambda2(tokens) {
      let r = app_message_reply_choices();
      marker("1");
      const a = {
        tokens,
        outputs: [],
      };
      object_merge(a, result);
      r(a);
      return a;
    }
    let mapped2 = list_map(tokens_matches, lambda2);
    let filtered = list_filter_property(mapped2, "success", true);
    let ne = list_empty_not_is(filtered);
    if (ne) {
      result = list_first(filtered);
    }
    return result;
  }
  let mapped = list_map(messages, lambda);
  let filtered2 = list_filter_property(mapped, "success", false);
  log(mapped);
}
