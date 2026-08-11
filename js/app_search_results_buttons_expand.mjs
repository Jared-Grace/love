import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function app_search_results_buttons_expand(buttons) {
  arguments_assert(arguments, 1);
  ("open a whole list of verse buttons at once - expanding one chapter, one book or the entire page all come down to this, so it is said once here");
  async function lambda9(b) {
    let click2 = property_get(b, "click");
    await catch_null_async(click2);
    let bible_texts2 = property_get(b, "bible_texts");
    return bible_texts2;
  }
  let waited = await list_map_unordered_async(buttons, lambda9);
  return waited;
}
