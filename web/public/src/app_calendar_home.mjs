import { noop } from "../../../love/public/src/noop.mjs";
import { app_calendar_download_browser_contacts } from "../../../love/public/src/app_calendar_download_browser_contacts.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { app_calendar_contact } from "../../../love/public/src/app_calendar_contact.mjs";
import { app_a_list_chooser_generic } from "../../../love/public/src/app_a_list_chooser_generic.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { clipboard_paste } from "../../../love/public/src/clipboard_paste.mjs";
import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export async function app_calendar_home(context) {
  let root = html_clear_context(context);
  let dictionary = await app_calendar_download_browser_contacts();
  let input_set = null;
  let component = app_a_button_wide(root, "Paste and Search", lambda);
  async function lambda() {
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
