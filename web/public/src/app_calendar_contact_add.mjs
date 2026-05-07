import { list_find_property_or_null_curried } from "../../../love/public/src/list_find_property_or_null_curried.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
import { list_find_property_or_null } from "../../../love/public/src/list_find_property_or_null.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_calendar_contact_add(data, item) {
  let contacts = app_calendar_contacts_initialize(data);
  let properties = ["facebook_conversation_id", "facebook_url_id"];
  let c = list_find_property_or_null_curried(list);
  function lambda(value, key) {
    let existing = list_find_property_or_null(contacts, key, value);
    return existing;
  }
  object_values_map(properties, lambda);
  list_add(contacts, {
    facebook_conversation_id,
    facebook_url_id,
  });
}
