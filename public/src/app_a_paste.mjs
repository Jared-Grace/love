import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { storage_local_exists_context } from "../../../love/public/src/storage_local_exists_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_paste(choices, a, overlay_close, body) {
  marker("1");
  let context = object_property_get(a, "context");
  let exists = storage_local_exists_context(context, app_a_paste.name);
  if (exists) {
    let value = storage_local_get_context(context, app_a_paste.name);
    list_add(choices, {
      shortcut: "v",
      text: "Paste",
      fn: function lambda() {
        list_add(body, value);
        overlay_close();
      },
    });
  }
}
