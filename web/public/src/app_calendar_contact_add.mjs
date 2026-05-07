import { list_find } from "../../../love/public/src/list_find.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_calendar_contact_add(
  data,
  facebook_conversation_id,
  facebook_url_id,
) {
  function lambda(item) {}
  let found = list_find(list, lambda);
  let contacts = app_calendar_contacts_initialize(data);
  list_add(contacts, {
    facebook_conversation_id,
    facebook_url_id,
  });
}
