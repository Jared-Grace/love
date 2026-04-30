import { property_initialize } from "../../../love/public/src/property_initialize.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_calendar_download } from "../../../love/public/src/app_calendar_download.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { html_input_placeholder_wide } from "../../../love/public/src/html_input_placeholder_wide.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { clipboard_paste } from "../../../love/public/src/clipboard_paste.mjs";
import { html_button_wide } from "../../../love/public/src/html_button_wide.mjs";
import { html_mobile_default_font_size_context } from "../../../love/public/src/html_mobile_default_font_size_context.mjs";
export async function app_calendar_main(context) {
  let r = await app_api_fn({
    fn: app_calendar_download,
  });
  let value = property_initialize(object, property_name, value_initial);
  log(app_calendar_main.name, {
    r,
  });
  let root = html_mobile_default_font_size_context(context);
  let component2 = html_button_wide(
    root,
    "Paste and Search Facebook Messages URL or WhatsApp number",
    lambda2,
  );
  let p = html_p(root);
  async function lambda2() {
    let paste = await clipboard_paste();
    html_text_set(p, paste);
  }
  html_input_placeholder_wide(root, "Facebook Name");
  html_input_placeholder_wide(root, "Facebook Messages URL");
  html_input_placeholder_wide(root, "WhatsApp Name");
  html_input_placeholder_wide(root, "WhatsApp number");
}
