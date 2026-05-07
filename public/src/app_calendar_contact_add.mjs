import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_calendar_contact_add(
  contacts,
  facebook_conversation_id,
  facebook_url_id,
) {
  list_add(contacts, {
    facebook_conversation_id,
    facebook_url_id,
  });
}
