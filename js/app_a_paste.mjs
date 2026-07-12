import { list_insert } from "./list_insert.mjs";
import { storage_local_remove_context } from "./storage_local_remove_context.mjs";
import { app_a_function_on_change } from "./app_a_function_on_change.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { storage_local_exists_context } from "./storage_local_exists_context.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_a_paste(
  choices,
  a,
  overlay_result,
  body_list,
  index,
  text_suffix,
) {
  let context = property_get(a, "context");
  let exists = storage_local_exists_context(context, app_a_paste.name);
  if (exists) {
    let value = storage_local_get_context(context, app_a_paste.name);
    list_add(choices, {
      shortcut: "v",
      text: text_combine("Paste ", text_suffix),
      fn: async function lambda() {
        list_insert(body_list, index, value);
        await app_a_function_on_change(a, overlay_result);
      },
    });
    storage_local_remove_context(context, app_a_paste.name);
  }
}
