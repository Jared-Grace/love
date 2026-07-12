import { noop } from "./noop.mjs";
import { app_calendar_download_browser_contacts } from "./app_calendar_download_browser_contacts.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { app_calendar_contact } from "./app_calendar_contact.mjs";
import { app_a_list_chooser_generic } from "./app_a_list_chooser_generic.mjs";
import { property_get } from "./property_get.mjs";
import { properties_get } from "./properties_get.mjs";
import { clipboard_paste } from "./clipboard_paste.mjs";
import { app_a_button_wide } from "./app_a_button_wide.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
export async function app_calendar_home(context) {
  let root = html_clear_context(context);
  let dictionary = await app_calendar_download_browser_contacts();
  let input_set = null;
  let component = app_a_button_wide(root, "Paste and Search", lambda2);
  async function lambda2() {
    let paste = await clipboard_paste();
    input_set(paste);
  }
  let contacts_json = properties_get(dictionary);
  async function lambda7(text) {
    storage_local_set_context(context, "contact_selected", text);
    await app_shared_screen_set(context, app_calendar_contact);
  }
  let r = app_a_list_chooser_generic(
    root,
    "contact",
    contacts_json,
    lambda7,
    noop,
  );
  input_set = property_get(r, "input_set");
}
