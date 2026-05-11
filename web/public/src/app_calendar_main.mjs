import { object_pick_try_values } from "../../../love/public/src/object_pick_try_values.mjs";
import { app_calendar_whatsapp_phone } from "../../../love/public/src/app_calendar_whatsapp_phone.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { app_calendar_facebook_conversation_id } from "../../../love/public/src/app_calendar_facebook_conversation_id.mjs";
import { app_calendar_facebook_url_id } from "../../../love/public/src/app_calendar_facebook_url_id.mjs";
import { object_pick_try_single_value } from "../../../love/public/src/object_pick_try_single_value.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_filter_property_exclude_if_exists } from "../../../love/public/src/list_filter_property_exclude_if_exists.mjs";
import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_value_set } from "../../../love/public/src/html_value_set.mjs";
import { html_input_placeholder_wide } from "../../../love/public/src/html_input_placeholder_wide.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
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
  log(app_calendar_main.name, {
    contacts,
  });
  let filtered = list_filter_property_exclude_if_exists(
    contacts,
    "unavailable",
    true,
  );
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
    let value = object_pick_try_single_value(o, properties_name);
    let r22 = app_calendar_facebook_url_id();
    let r3 = app_calendar_facebook_conversation_id();
    let r4 = app_calendar_whatsapp_phone();
    const properties = ["whatsapp_name", "facebook_name", r4, r22, r3];
    let v = object_pick_try_values(o, properties);
    let joined = list_join_space(v);
    return joined;
  }
  let dictionary = list_to_dictionary_key(filtered, lambda6);
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
}
