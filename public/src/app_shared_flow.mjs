import { string_is_assert } from "../../../love/public/src/string_is_assert.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
export function app_shared_flow(context, screens, before_or_after, find) {
  let current = storage_local_get_context(context, "screen");
  string_is_assert(current);
  function lambda(item2) {
    let fn2 = object_property_get(item2, "fn");
    let self = object_property_get(fn2, "name");
    let eq2 = equal(self, current);
    return eq2;
  }
  let only2 = list_find(screens, lambda);
  let index = list_index_of(screens, only2);
  let ba = before_or_after(screens, index);
  function lambda4(item) {
    let exists = object_property_exists(item, "skip");
    if (not(exists)) {
      let v3 = true;
      return v3;
    }
    let skip = object_property_get(item, "skip");
    let a = skip();
    let n = not(a);
    return n;
  }
  let filtered = list_filter(ba, lambda4);
  let first = find(filtered);
  let name2 = object_property_get(first, "fn");
  app_generic_screen_set(context, name2);
}
