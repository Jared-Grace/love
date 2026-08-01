import { property_path_get_2 } from "./property_path_get_2.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_find } from "./list_find.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_stored_get } from "./app_shared_screen_stored_get.mjs";
export async function app_shared_flow(context, screens, before_or_after, find) {
  let current = app_shared_screen_stored_get(context);
  text_is_assert_json(current, {
    hint: "the current screen should be set in storage before the flow can move — was a screen chosen for this context yet?",
    context,
    current,
  });
  function lambda(item2) {
    let self = property_path_get_2(item2, "fn", "name");
    let eq = equal(self, current);
    return eq;
  }
  let only = list_find(screens, lambda);
  let index = list_index_of(screens, only);
  let ba = before_or_after(screens, index);
  function lambda4(item) {
    let exists = property_exists(item, "skip");
    if (not(exists)) {
      return true;
    }
    let skip = property_get(item, "skip");
    let a = skip();
    let n = not(a);
    return n;
  }
  let filtered = list_filter(ba, lambda4);
  let first = find(filtered);
  let name = property_get(first, "fn");
  await app_shared_screen_set(context, name);
}
