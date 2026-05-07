import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { list_multiple_not_is_assert } from "../../../love/public/src/list_multiple_not_is_assert.mjs";
import { object_values_map_unique } from "../../../love/public/src/object_values_map_unique.mjs";
import { list_filter_null_not_is } from "../../../love/public/src/list_filter_null_not_is.mjs";
import { list_find_property_or_null_curried } from "../../../love/public/src/list_find_property_or_null_curried.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_calendar_contact_add(data, item) {
  let contacts = app_calendar_contacts_initialize(data);
  let c = list_find_property_or_null_curried(contacts);
  function lambda(value, key) {
    let existing = c(key, value);
    return existing;
  }
  let unique = object_values_map_unique(item, lambda);
  let list = list_filter_null_not_is(unique);
  list_multiple_not_is_assert(list);
  let s1 = list_size_1(list);
  if (false) {
  }
  list_add(contacts, {
    facebook_conversation_id,
    facebook_url_id,
  });
}
