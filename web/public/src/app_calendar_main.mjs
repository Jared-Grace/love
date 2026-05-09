import { json_to } from "../../../love/public/src/json_to.mjs";
import { object_pick_try } from "../../../love/public/src/object_pick_try.mjs";
import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_value_set } from "../../../love/public/src/html_value_set.mjs";
import { html_input_placeholder_wide } from "../../../love/public/src/html_input_placeholder_wide.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { html_pre_text } from "../../../love/public/src/html_pre_text.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { list_unique_is_assert } from "../../../love/public/src/list_unique_is_assert.mjs";
import { object_values } from "../../../love/public/src/object_values.mjs";
import { app_calendar_upload } from "../../../love/public/src/app_calendar_upload.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
import { object_adder } from "../../../love/public/src/object_adder.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_calendar_download } from "../../../love/public/src/app_calendar_download.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { clipboard_paste } from "../../../love/public/src/clipboard_paste.mjs";
import { html_button_wide } from "../../../love/public/src/html_button_wide.mjs";
import { html_mobile_default_font_size_context } from "../../../love/public/src/html_mobile_default_font_size_context.mjs";
import { app_a_list_chooser_generic } from "../../../love/public/src/app_a_list_chooser_generic.mjs";
export async function app_calendar_main(context) {
  let data = await app_api_fn({
    fn: app_calendar_download,
  });
  let contacts = app_calendar_contacts_initialize(data);
  let root = html_mobile_default_font_size_context(context);
  let component2 = html_button_wide(
    root,
    "Paste and Search Facebook Messages URL or WhatsApp number",
    lambda2,
  );
  let input = html_input_placeholder_wide(root, "Search term");
  async function lambda2() {
    let paste = await clipboard_paste();
    html_value_set(input, paste);
  }
  const properties_name = ["whatsapp_name", "facebook_name"];
  function lambda6(o) {
    let picked = object_pick_try(o, properties_name);
    let json2 = json_to(object);
    return json2;
  }
  let dictionary = list_to_dictionary_key(contacts, lambda6);
  let contacts_json = properties_get(dictionary);
  function lambda4(b, text) {
    let value2 = property_get(dictionary, text);
  }
  let r = app_a_list_chooser_generic(
    root,
    "contact",
    contacts_json,
    noop,
    lambda4,
  );
  async function lambda3() {
    function lambda5(oad) {
      function lambda(p, input) {
        let value = html_value_get(input);
        oad(p, value);
      }
      each_pair(properties_name, inputs, lambda);
    }
    let result = object_adder(lambda5);
    list_add(contacts, result);
    let mapped = list_map(contacts, object_values);
    list_unique_is_assert(mapped);
    let r2 = await app_api_fn({
      fn: app_calendar_upload,
      args: [data],
    });
  }
  let component = html_button_wide(root, "Add Contact", lambda3);
  let json = json_format_to(contacts);
  let pre = html_pre_text(root, json);
}
