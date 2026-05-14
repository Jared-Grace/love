import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_calendar_home(context) {
  let root = html_clear_context(context);
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
  let input_set = null;
  let root = html_mobile_default(context);
  let component2 = app_a_button_wide(root, "Paste and Search", lambda2);
  async function lambda2() {
    let paste = await clipboard_paste();
    input_set(paste);
  }
  let r2 = app_calendar_facebook_url_id();
  let r3 = app_calendar_facebook_conversation_id();
  let r4 = app_calendar_whatsapp_phone();
  const properties = ["whatsapp_name", "facebook_name", r4, r2, r3];
  function lambda6(o) {
    let joined = object_pick_try_values_join_space(o, properties);
    return joined;
  }
  let dictionary = list_to_dictionary_key(filtered, lambda6);
  let contacts_json = properties_get(dictionary);
  function lambda4(b, text) {
    let value2 = property_get(dictionary, text);
  }
  function lambda7(text) {
    let value3 = property_get(dictionary, text);
    log(app_calendar_main.name, {
      value3,
    });
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
