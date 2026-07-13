import { html_scroll_top_window } from "./html_scroll_top_window.mjs";
import { app_shared_home_name } from "./app_shared_home_name.mjs";
import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { list_find_property } from "./list_find_property.mjs";
export async function app_shared_refresh(context) {
  let screens = property_get(context, "screens");
  let body = html_document_body();
  html_clear(body);
  let combined = app_shared_home_name(context);
  let screen_name = storage_local_initialize_context(
    context,
    "screen",
    combined,
  );
  let screen = list_find_property(screens, "name", screen_name);
  await screen(context);
  html_scroll_top_window();
}
