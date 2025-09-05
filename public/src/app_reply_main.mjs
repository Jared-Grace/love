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
export function app_reply_main() {
  const root = html_document_body();
  let copied = [];
  let buttons = null;
  function lambda4() {
    list_empty(copied);
    let joined = list_join_newline_2(copied);
    html_text_set(preview, joined);
    each(buttons, html_display_block);
  }
  let component3 = html_button(root, "Reset", lambda4);
  marker("1");
  let choices = app_reply_choices();
  function lambda(choice) {
    let response2 = object_property_get(choice, "response");
    let text3 = object_property_get(choice, "text");
    let component = html_button(root, text3, lambda3);
    async function lambda3() {
      list_add(copied, response2);
      let joined = list_join_newline_2(copied);
      await clipboard_copy(joined);
      html_clear(body);
      each(list, function lambda2(item) {});
      html_text_set(preview, joined);
      html_display_none(component);
    }
    return component;
  }
  buttons = list_map(choices, lambda);
  let preview = html_p(root);
}
