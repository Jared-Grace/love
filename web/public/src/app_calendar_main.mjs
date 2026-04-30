import { app_calendar_upload } from "../../../love/public/src/app_calendar_upload.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
import { object_adder } from "../../../love/public/src/object_adder.mjs";
import { html_input_placeholder_wide_curried } from "../../../love/public/src/html_input_placeholder_wide_curried.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { property_initialize } from "../../../love/public/src/property_initialize.mjs";
import { app_calendar_download } from "../../../love/public/src/app_calendar_download.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { clipboard_paste } from "../../../love/public/src/clipboard_paste.mjs";
import { html_button_wide } from "../../../love/public/src/html_button_wide.mjs";
import { html_mobile_default_font_size_context } from "../../../love/public/src/html_mobile_default_font_size_context.mjs";
export async function app_calendar_main(context) {
  let data = await app_api_fn({
    fn: app_calendar_download,
  });
  let contacts = property_initialize(data, "contacts", []);
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
  let inputs = list_map(properties, c);
  async function lambda3() {
    function lambda5(oad) {
      function lambda(p, input) {
        let value = html_value_get(input);
        oad(p, value);
      }
      each_pair(properties, inputs, lambda);
    }
    let result = object_adder(lambda5);
    list_add(contacts, result);
    let r2 = await app_api_fn({
      fn: app_calendar_upload,
      args: [data],
    });
  }
  let component = html_button_wide(root, "Add Contact", lambda3);
}
