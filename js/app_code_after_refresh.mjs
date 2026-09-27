import { app_code_hash_write } from "./app_code_hash_write.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { app_shared_color_page_complete } from "./app_shared_color_page_complete.mjs";
import { html_style_background_color_set_or_remove } from "./html_style_background_color_set_or_remove.mjs";
import { app_shared_screen_asking_is } from "./app_shared_screen_asking_is.mjs";
import { app_shared_footer_column_context } from "./app_shared_footer_column_context.mjs";
export function app_code_after_refresh(context) {
  "runs after each screen draws: keep the url in step with where you are, and end the page with its footer (re-added every render because navigating clears the page).";
  "a screen that asks before doing something offers two answers and nothing else, so it is the one screen this app does not end with the footer";
  app_code_hash_write(context);
  ("the page stands on green while what it shows is finished - a finished lesson, or the home list once every lesson and review is done - and on nothing of its own otherwise. The note is taken as it is read, so a screen that is not finished never inherits the last one's green");
  let shown = property_get_or_null(context, "page_complete_shown");
  property_set(context, "page_complete_shown", null);
  let green = equal(shown, true);
  let body = html_document_body();
  let color = app_shared_color_page_complete();
  html_style_background_color_set_or_remove(green, body, color);
  let asking = app_shared_screen_asking_is(context);
  if (asking) {
    return;
  }
  app_shared_footer_column_context(context);
}
