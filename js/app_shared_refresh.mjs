import { html_scroll_top_window } from "./html_scroll_top_window.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { list_find_property } from "./list_find_property.mjs";
export async function app_shared_refresh(context) {
  let screens = property_get(context, "screens");
  let app_fn = property_get(context, "app_fn");
  let body = html_document_body();
  html_clear(body);
  let value = property_get(app_fn, "name");
  let combined = function_name_combine(value, "home");
  let screen_name = storage_local_initialize_context(
    context,
    "screen",
    combined,
  );
  let screen = list_find_property(screens, "name", screen_name);
  await screen(context);
  html_scroll_top_window();
}
