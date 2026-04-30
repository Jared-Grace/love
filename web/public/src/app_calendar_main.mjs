import { html_input_placeholder_wide } from "../../../love/public/src/html_input_placeholder_wide.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { html_input_placeholder_wide_curried } from "../../../love/public/src/html_input_placeholder_wide_curried.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { property_initialize } from "../../../love/public/src/property_initialize.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_calendar_download } from "../../../love/public/src/app_calendar_download.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { clipboard_paste } from "../../../love/public/src/clipboard_paste.mjs";
import { html_button_wide } from "../../../love/public/src/html_button_wide.mjs";
import { html_mobile_default_font_size_context } from "../../../love/public/src/html_mobile_default_font_size_context.mjs";
export async function app_calendar_main(context) {
  let r = await app_api_fn({
    fn: app_calendar_download,
  });
  let contacts = property_initialize(r, "contacts", []);
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
  let properties = [
    "Facebook Name",
    "Facebook Messages URL",
    "WhatsApp Name",
    "WhatsApp number",
  ];
  let c = html_input_placeholder_wide_curried(root);
  function lambda4(p) {
    html_input_placeholder_wide(root, p);
  }
  let mapped = list_map(properties, lambda4);
  function lambda3() {
    function lambda(p) {}
    let dictionary = list_to_dictionary_value(properties, lambda);
    list_add(contacts, item);
  }
  let component = html_button_wide(root, text, lambda3);
}
