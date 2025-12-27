import { string_pad } from "../../../love/public/src/string_pad.mjs";
import { function_name_extension } from "../../../love/public/src/function_name_extension.mjs";
import { list_filter_ends_with } from "../../../love/public/src/list_filter_ends_with.mjs";
import { app_a_file_system_initialize } from "../../../love/public/src/app_a_file_system_initialize.mjs";
import { function_path_to_name } from "../../../love/public/src/function_path_to_name.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_a_indexeddb_path_key } from "../../../love/public/src/app_a_indexeddb_path_key.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
import { app_a_file_system_store } from "../../../love/public/src/app_a_file_system_store.mjs";
import { indexeddb_get_all } from "../../../love/public/src/indexeddb_get_all.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { html_on_enter_lambda } from "../../../love/public/src/html_on_enter_lambda.mjs";
import { app_a_on_keydown_add } from "../../../love/public/src/app_a_on_keydown_add.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { app_a_input } from "../../../love/public/src/app_a_input.mjs";
import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { app_a_function_select } from "../../../love/public/src/app_a_function_select.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_sort_string_alpha_size } from "../../../love/public/src/list_sort_string_alpha_size.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_on_input } from "../../../love/public/src/html_on_input.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export async function app_a_home(context) {
  let filtered = null;
  function on_enter() {
    let first = list_first(filtered);
    f_name_select(first);
  }
  let on_keydown = html_on_enter_lambda(on_enter);
  let on_keydowns = app_a_on_keydown_add(context, on_keydown);
  log({
    on_keydowns,
  });
  await app_a_file_system_initialize();
  let store = app_a_file_system_store();
  let all = await indexeddb_get_all(app_a_indexeddb_initialize, store);
  let property_name = app_a_indexeddb_path_key();
  let mapped = list_map_property(all, property_name);
  let suffix = function_name_extension();
  let filtered3 = list_filter_ends_with(mapped, suffix);
  log(mapped);
  let f_names = list_map(filtered3, function_path_to_name);
  function lambda5(item) {
    let padded = string_pad(padding, "/");
    return padded;
  }
  let mapped2 = list_map(list, lambda5);
  let body = html_document_body();
  let input = app_a_input(body);
  let f_names_div = html_div(body);
  function lambda4() {
    let value = html_value_get(input);
    function lambda2(f_name) {
      let v3 = match(value, f_name);
      return v3;
    }
    filtered = list_filter(f_names, lambda2);
    refresh();
    function match(s, target) {
      const escaped = s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
      let v2 = escaped.split("").join(".*");
      const regex = new RegExp(v2);
      let v = regex.test(target);
      return v;
    }
  }
  html_on_input(input, lambda4);
  filtered = f_names;
  refresh();
  function refresh() {
    html_clear(f_names_div);
    list_sort_string_alpha_size(filtered);
    function lambda(f_name) {
      async function lambda3() {
        f_name_select(f_name);
      }
      app_a_button_wide(f_names_div, f_name, lambda3);
    }
    each(filtered, lambda);
  }
  html_focus(input);
  function f_name_select(f_name) {
    list_remove(on_keydowns, on_keydown);
    app_a_function_select(context, f_name);
  }
}
