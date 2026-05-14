import { app_calendar_download_browser_contacts } from "../../../love/public/src/app_calendar_download_browser_contacts.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { app_calendar_contact } from "../../../love/public/src/app_calendar_contact.mjs";
import { app_a_list_chooser_generic } from "../../../love/public/src/app_a_list_chooser_generic.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { object_pick_try_values_join_space } from "../../../love/public/src/object_pick_try_values_join_space.mjs";
import { app_calendar_whatsapp_phone } from "../../../love/public/src/app_calendar_whatsapp_phone.mjs";
import { app_calendar_facebook_conversation_id } from "../../../love/public/src/app_calendar_facebook_conversation_id.mjs";
import { app_calendar_facebook_url_id } from "../../../love/public/src/app_calendar_facebook_url_id.mjs";
import { clipboard_paste } from "../../../love/public/src/clipboard_paste.mjs";
import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export async function app_calendar_home(context) {
  let root = html_clear_context(context);
  let dictionary = await app_calendar_download_browser_contacts(lambda6);
  let input_set = null;
  html_mobile_default(context);
  let component2 = app_a_button_wide(root, "Paste and Search", lambda2);
  let r2 = app_calendar_facebook_url_id();
  let r3 = app_calendar_facebook_conversation_id();
  let r4 = app_calendar_whatsapp_phone();
  const properties = ["whatsapp_name", "facebook_name", r4, r2, r3];
  function lambda6(o) {
    let joined = object_pick_try_values_join_space(o, properties);
    return joined;
  }
  async function lambda2() {
    let paste = await clipboard_paste();
    input_set(paste);
  }
  let contacts_json = properties_get(dictionary);
  function lambda4(b, text) {
    let value2 = property_get(dictionary, text);
  }
  function lambda7(text) {
    let value3 = property_get(dictionary, text);
    storage_local_set_context(context, "contact_selected", text);
    app_shared_screen_set(context, app_calendar_contact);
  }
  let r = app_a_list_chooser_generic(
    root,
    "contact",
    contacts_json,
    lambda7,
    lambda4,
  );
  input_set = property_get(r, "input_set");
}
