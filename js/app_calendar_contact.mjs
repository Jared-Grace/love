import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { app_calendar_paste_convert } from "./app_calendar_paste_convert.mjs";
import { clipboard_paste } from "./clipboard_paste.mjs";
import { app_calendar_id_properties } from "./app_calendar_id_properties.mjs";
import { object_pick_try_single_value } from "./object_pick_try_single_value.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_replace_button_home_text } from "./app_replace_button_home_text.mjs";
import { app_a_button_wide } from "./app_a_button_wide.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { json_to } from "./json_to.mjs";
import { app_calendar_download_browser_contacts } from "./app_calendar_download_browser_contacts.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_calendar_home } from "./app_calendar_home.mjs";
export async function app_calendar_contact(context) {
  let root = html_clear_context(context);
  async function lambda2() {
    await app_shared_screen_set(context, app_calendar_home);
  }
  let text = app_replace_button_home_text();
  let component = app_a_button_wide(root, text, lambda2);
  let dictionary = await app_calendar_download_browser_contacts();
  let contact_selected = storage_local_get_context(context, "contact_selected");
  log(app_calendar_contact.name, {
    contact_selected,
  });
  let contact = property_get(dictionary, contact_selected);
  let json = json_to(contact);
  let p = html_p_text(root, json);
  let id_properties = app_calendar_id_properties();
  let id = object_pick_try_single_value(contact, id_properties);
  async function lambda3() {
    let paste = await clipboard_paste();
    let country = error();
    let r = app_calendar_paste_convert(paste, country);
    let duration = property_get(r, "duration");
    let start = property_get(r, "start");
    log(app_calendar_contact.name, typeof start);
    log(app_calendar_contact.name, {
      r,
    });
  }
  let component2 = app_a_button_wide(
    root,
    "Meeting add Outlook paste",
    lambda3,
  );
}
