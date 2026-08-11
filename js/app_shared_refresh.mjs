import { property_set } from "./property_set.mjs";
import { html_scroll_top_window } from "./html_scroll_top_window.mjs";
import { app_shared_home_name_context } from "./app_shared_home_name_context.mjs";
import { app_shared_screen_stored_initialize } from "./app_shared_screen_stored_initialize.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function app_shared_refresh(context) {
  let screens = property_get(context, "screens");
  let body = html_document_body();
  html_clear(body);
  let combined = app_shared_home_name_context(context);
  let screen_name = app_shared_screen_stored_initialize(context, combined);
  let screen = list_find_property(screens, "name", screen_name);
  await screen(context);
  let after_refresh = property_get_or_null(context, "after_refresh");
  let has_after = null_not_is(after_refresh);
  if (has_after) {
    after_refresh(context);
  }
  let scroll_handled = property_get_or_null(context, "scroll_handled");
  property_set(context, "scroll_handled", null);
  let handled = null_not_is(scroll_handled);
  if (handled) {
    return;
  }
  html_scroll_top_window();
}
