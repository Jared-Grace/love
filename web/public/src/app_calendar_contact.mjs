import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { app_calendar_download_browser_contacts } from "../../../love/public/src/app_calendar_download_browser_contacts.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export async function app_calendar_contact(context) {
  let root = html_clear_context(context);
  function lambda2() {}
  let component = app_a_button_wide(parent, text, lambda2);
  let dictionary = await app_calendar_download_browser_contacts();
  let json = json_to(dictionary);
  let p = html_p_text(root, json);
}
