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
  let bible = kjv();
  let properties = object_properties(bible);
  let reference = list_random_item(properties);
  let verse = object_property_get(bible, reference);
  const root = html_document_body();
  let copied = [];
  let buttons = null;
  let preview = null;
  let chosens = [];
  function lambda4() {
    reference = list_random_item(properties);
    verse = object_property_get(bible, reference);
    list_empty(copied);
    preview_refresh();
    chosens = [];
    buttons_refresh();
  }
  let component3 = html_button(root, "Reset", lambda4);
  let component2 = html_button(root, "Copy", preview_refresh);
  marker("1");
  let choices = app_reply_choices();
  function buttons_refresh() {
    each(buttons, html_display_block);
    function lambda2(item) {
      let includes = list_includes(chosens, item);
      if (includes) {
        html_display_block(item);
      }
    }
    each(list, lambda2);
  }
  function lambda(choice) {
    let response2 = object_property_get(choice, "response");
    let text3 = object_property_get(choice, "text");
    let component = html_button(root, text3, lambda3);
    async function lambda3() {
      list_add(copied, response2);
      await preview_refresh();
      list_add(chosens, component);
      html_display_none(component);
    }
    return component;
  }
  buttons = list_map(choices, lambda);
  preview = html_p(root);
  preview_refresh();
  async function preview_refresh() {
    let concated = list_concat(copied, reference + " " + verse);
    let joined = list_join_newline_2(concated);
    html_clear(preview);
    html_p_text_multiple(preview, concated);
    html_text_set(preview, joined);
    await clipboard_copy(joined);
  }
}
