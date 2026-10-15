import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { json_to } from "./json_to.mjs";
export function app_reply_verses_prepared_key(
  verse_count,
  jewish,
  languages_chosen,
) {
  "Names what a set of verses fetched ahead of time was fetched for - how many, which faith, which languages - so it is only handed to a press asking for exactly that.";
  arguments_assert(arguments, 3);
  let property_name = language_code_key();
  let codes = list_map_property(languages_chosen, property_name);
  let key = json_to([verse_count, jewish, codes]);
  return key;
}
