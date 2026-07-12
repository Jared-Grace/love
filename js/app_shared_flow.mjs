import { text_is_assert } from "./text_is_assert.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_find } from "./list_find.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
export function app_shared_flow(context, screens, before_or_after, find) {
  let current = storage_local_get_context(context, "screen");
  text_is_assert(current);
  function lambda(item2) {
    let fn = property_get(item2, "fn");
    let self = property_get(fn, "name");
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
  app_shared_screen_set(context, name);
}
