import { app_calendar_contact_names_normalize } from "./app_calendar_contact_names_normalize.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_calendar_id_properties } from "./app_calendar_id_properties.mjs";
import { app_calendar_facebook_conversation_id } from "./app_calendar_facebook_conversation_id.mjs";
import { object_pick_try } from "./object_pick_try.mjs";
import { log_keep } from "./log_keep.mjs";
import { list_find_property_try_or_null_curried } from "./list_find_property_try_or_null_curried.mjs";
import { list_single } from "./list_single.mjs";
import { object_merge_match } from "./object_merge_match.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_multiple_not_is_assert } from "./list_multiple_not_is_assert.mjs";
import { object_values_map_list_unique } from "./object_values_map_list_unique.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { app_calendar_contacts_initialize } from "./app_calendar_contacts_initialize.mjs";
import { list_add } from "./list_add.mjs";
export function app_calendar_contact_add(data, item) {
  app_calendar_contact_names_normalize(item);
  let id_properties = app_calendar_id_properties();
  let r = app_calendar_facebook_conversation_id();
  let properties_unique_across_all = list_concat(
    ["facebook_conversation_url", r],
    id_properties,
  );
  let picked = object_pick_try(item, properties_unique_across_all);
  let contacts = app_calendar_contacts_initialize(data);
  let c = list_find_property_try_or_null_curried(contacts);
  function lambda(value, key) {
    let existing = c(key, value);
    return existing;
  }
  let unique = object_values_map_list_unique(picked, lambda);
  let list = list_filter_null_not_is(unique);
  list_multiple_not_is_assert(list);
  let s = list_size_1(list);
  if (s) {
    let only = list_single(list);
    object_merge_match(only, item);
  } else {
    list_add(contacts, item);
    log_keep(app_calendar_contact_add.name, {
      item,
      added: true,
    });
  }
}
