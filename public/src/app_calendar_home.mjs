import { app_calendar_contact } from "../../../love/public/src/app_calendar_contact.mjs";
import { app_calendar_upload } from "../../../love/public/src/app_calendar_upload.mjs";
import { list_unique_is_assert } from "../../../love/public/src/list_unique_is_assert.mjs";
import { object_values } from "../../../love/public/src/object_values.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_adder } from "../../../love/public/src/object_adder.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { app_a_list_chooser_generic } from "../../../love/public/src/app_a_list_chooser_generic.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { object_pick_try_values_join_space } from "../../../love/public/src/object_pick_try_values_join_space.mjs";
import { app_calendar_whatsapp_phone } from "../../../love/public/src/app_calendar_whatsapp_phone.mjs";
import { app_calendar_facebook_conversation_id } from "../../../love/public/src/app_calendar_facebook_conversation_id.mjs";
import { app_calendar_facebook_url_id } from "../../../love/public/src/app_calendar_facebook_url_id.mjs";
import { clipboard_paste } from "../../../love/public/src/clipboard_paste.mjs";
import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { list_filter_property_exclude_if_exists } from "../../../love/public/src/list_filter_property_exclude_if_exists.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { app_calendar_download } from "../../../love/public/src/app_calendar_download.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export async function app_calendar_home(context) {
  let root = html_clear_context(context);
  let data = await app_api_fn({
    fn: app_calendar_download,
  });
  let contacts = app_calendar_contacts_initialize(data);
  log(app_calendar_home.name, {
    contacts,
  });
  let filtered = list_filter_property_exclude_if_exists(
    contacts,
    "unavailable",
    true,
  );
  let input_set = null;
  html_mobile_default(context);
  let component2 = app_a_button_wide(root, "Paste and Search", lambda2);
  let r2 = app_calendar_facebook_url_id();
  let r3 = app_calendar_facebook_conversation_id();
  let r4 = app_calendar_whatsapp_phone();
  const properties = ["whatsapp_name", "facebook_name", r4, r2, r3];
  function lambda6(o) {
    let joined = object_pick_try_values_join_space(o, properties);
    return joined;
  }
  let dictionary = list_to_dictionary_key(filtered, lambda6);
  async function lambda2() {
    let paste = await clipboard_paste();
    input_set(paste);
  }
  let contacts_json = properties_get(dictionary);
  function lambda4(b, text) {
    let value2 = property_get(dictionary, text);
  }
  function lambda7(text) {
    let value3 = property_get(dictionary, text);
    log(app_calendar_home.name, {
      value3,
    });
    app_calendar_contact(context2);
  }
  let r = app_a_list_chooser_generic(
    root,
    "contact",
    contacts_json,
    lambda7,
    lambda4,
  );
  input_set = property_get(r, "input_set");
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
}
