import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_remove_last_single } from "../../../love/public/src/list_remove_last_single.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
export function app_code_batch_item_get(parent, lesson, on_batch_item) {
  let batch = property_get(lesson, "batch");
  let remaining = [];
  let container = app_code_container_light_blue(parent);
  let refresh = function lambda() {
    let e = list_empty_is(remaining);
    if (e) {
      let items = batch();
      list_add_multiple(remaining, items);
      list_shuffle(remaining);
    }
    html_clear(container);
    let b = list_remove_last_single(remaining);
    on_batch_item(container, b, refresh);
  };
  refresh();
  return refresh;
}
