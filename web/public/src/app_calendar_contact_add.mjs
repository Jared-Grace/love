import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_find_property_or_null } from "../../../love/public/src/list_find_property_or_null.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_calendar_contact_add(data, item) {
  let contacts = app_calendar_contacts_initialize(data);
  let properties = ["facebook_conversation_id", "facebook_url_id"];
  function lambda(property) {
    let exists = property_exists(item, property);
    if (exists) {
      let existing = list_find_property_or_null(
        contacts,
        property,
        facebook_conversation_id,
      );
    }
  }
  each(properties, lambda);
  list_add(contacts, {
    facebook_conversation_id,
    facebook_url_id,
  });
}
