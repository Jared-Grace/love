import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_filter_null_not_is } from "../../../love/public/src/list_filter_null_not_is.mjs";
import { list_find_property_or_null_curried } from "../../../love/public/src/list_find_property_or_null_curried.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_calendar_contact_add(data, item) {
  let contacts = app_calendar_contacts_initialize(data);
  let c = list_find_property_or_null_curried(contacts);
  function lambda(value, key) {
    let existing = c(key, value);
    return existing;
  }
  let mapped = object_values_map(item, lambda);
  let unique = list_unique(list);
  let filtered2 = list_filter_null_not_is(mapped2);
  list_add(contacts, {
    facebook_conversation_id,
    facebook_url_id,
  });
}
