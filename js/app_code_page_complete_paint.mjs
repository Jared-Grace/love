import { html_document_root } from "./html_document_root.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { app_shared_color_page_complete } from "./app_shared_color_page_complete.mjs";
import { html_style_background_color_set_or_remove } from "./html_style_background_color_set_or_remove.mjs";
export function app_code_page_complete_paint(context) {
  arguments_assert(arguments, 1);
  ("the page stands on green while what it shows is finished - a finished lesson, or the home list once every lesson and review is done - and on nothing of its own otherwise. The note is taken as it is read, so a screen that is not finished never inherits the last one's green");
  let shown = property_get_or_null(context, "page_complete_shown");
  property_set(context, "page_complete_shown", null);
  let green = equal(shown, true);
  let body = html_document_body();
  let color = app_shared_color_page_complete();
  html_style_background_color_set_or_remove(green, body, color);
  ("the outermost layer of the page is painted too, because the first thing on a screen has a margin above it that pushes the body down, and the gap it leaves shows the outermost layer's own pale colour - a white bar across the top of a finished lesson, seen by the human 2026-10-03. Taking away that margin was the other choice, and it would move every screen's top bar");
  let page = html_document_root();
  html_style_background_color_set_or_remove(green, page, color);
}
