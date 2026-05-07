import { list_find_property_or_null } from "../../../love/public/src/list_find_property_or_null.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_calendar_contact_add(
  data,
  facebook_conversation_id,
  facebook_url_id,
) {
  let contacts = app_calendar_contacts_initialize(data);
  let r = list_find_property_or_null(
    contacts,
    "facebook_conversation_id",
    facebook_conversation_id,
  );
  list_add(contacts, {
    facebook_conversation_id,
    facebook_url_id,
  });
}
