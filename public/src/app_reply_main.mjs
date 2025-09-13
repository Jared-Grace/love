import { log } from "./log.mjs";
import { json_from } from "./json_from.mjs";
import { buffer_string_to } from "./buffer_string_to.mjs";
import { ebible_index_upload_name } from "./ebible_index_upload_name.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { not } from "./not.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { string_lower_to } from "./string_lower_to.mjs";
import { html_on_keydown } from "./html_on_keydown.mjs";
import { string_letters_only } from "./string_letters_only.mjs";
import { object_property_set_exists_not } from "./object_property_set_exists_not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { object_properties } from "./object_properties.mjs";
import { kjv } from "./kjv.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_reply_choices } from "./app_reply_choices.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
import { list_empty } from "./list_empty.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { list_add } from "./list_add.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_p } from "./html_p.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button } from "./html_button.mjs";
import { marker } from "./marker.mjs";
export async function app_reply_main() {
  if (false) {
    let bible_folder = ebible_folder_english();
    let file_name = ebible_index_upload_name();
    let destination = ebible_firebase_upload_path(bible_folder, file_name);
    let s = buffer_string_to(buffer);
    let index = json_from(s);
    log(message);
  }
  let bible = kjv();
  let properties = object_properties(bible);
  let reference = list_random_item(properties);
  let verse = object_property_get(bible, reference);
  const root = html_document_body();
  let copied = [];
  let buttons = null;
  let preview = null;
  let chosens = [];
  let typed = "";
  function lambda6(event) {
    let key = object_property_get(event, "key");
    typed += key;
    buttons_refresh();
  }
  html_on_keydown(root, lambda6);
  function lambda4() {
    reference = list_random_item(properties);
    verse = object_property_get(bible, reference);
    list_empty(copied);
    preview_refresh();
    chosens = [];
    typed = "";
    buttons_refresh();
  }
  let component3 = html_button(root, "Reset", lambda4);
  let component2 = html_button(root, "Copy", preview_refresh);
  marker("1");
  let choices = app_reply_choices();
  function buttons_refresh() {
    function lambda2(item) {
      let text2 = object_property_get(item, "text");
      let letters = string_letters_only(text2);
      let lower = string_lower_to(letters);
      let sw = string_starts_with(lower, typed);
      let includes = list_includes(chosens, item);
      if (includes || not(sw)) {
        html_display_none(item);
      } else {
        html_display_block(item);
      }
    }
    each(buttons, lambda2);
  }
  function lambda(choice) {
    let response2 = object_property_get(choice, "response");
    let text = object_property_get(choice, "text");
    let component = html_button(root, text, lambda3);
    object_property_set_exists_not(component, "text", text);
    async function lambda3() {
      list_add(copied, response2);
      await preview_refresh();
      list_add(chosens, component);
      typed = "";
      buttons_refresh();
    }
    return component;
  }
  buttons = list_map(choices, lambda);
  preview = html_p(root);
  preview_refresh();
  buttons_refresh();
  async function preview_refresh() {
    let concated = list_concat(copied, reference + " " + verse);
    let joined = list_join_newline_2(concated);
    html_clear(preview);
    html_p_text_multiple(preview, concated);
    html_text_set(preview, joined);
    await clipboard_copy(joined);
  }
}
