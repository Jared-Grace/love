import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { app_calendar_download_browser_contacts } from "../../../love/public/src/app_calendar_download_browser_contacts.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export async function app_calendar_contact(context) {
  let root = html_clear_context(context);
  let dictionary = await app_calendar_download_browser_contacts();
  let json = json_to(object);
  let p = html_p_text(root2, text);
}
