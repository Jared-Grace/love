import { html_span } from "./html_span.mjs";
import { app_shared_bar_content } from "./app_shared_bar_content.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { app_shared_content_center_padding_gap } from "./app_shared_content_center_padding_gap.mjs";
import { app_shared_column_max_width } from "./app_shared_column_max_width.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
import { app_supper_versions } from "./app_supper_versions.mjs";
import { app_shared_gear_versions_text } from "./app_shared_gear_versions_text.mjs";
import { app_supper_folders_get } from "./app_supper_folders_get.mjs";
import { app_supper_verses_render } from "./app_supper_verses_render.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_supper_home_generic(context) {
  let frame = app_shared_bar_content(context);
  let content = property_get(frame, "content");
  let column = app_shared_column_max_width();
  ("a narrower edge than the other screens keep, because everything on this one already sits inside a card that has its own edge - the ordinary gap outside it read as a second margin around the first");
  let gap = app_shared_spaced_small_gap();
  app_shared_content_center_padding_gap(content, column, gap);
  let bar = property_get(frame, "bar");
  html_centered(bar);
  ("the gear says what it opens, the way every other gear in these apps does - a bare picture left the one control on this screen unnamed, and the reader had to press it to find out");
  ("the passage arrows sit in the bar on either side of the versions gear, so the reader moves between passages without scrolling back down past the card");
  let previous = html_span(bar);
  let text = app_shared_gear_versions_text();
  app_shared_screen_set_button(bar, context, app_supper_versions, text);
  let next = html_span(bar);
  let folders = app_supper_folders_get(context);
  let empty = list_empty_is(folders);
  if (empty) {
    return;
  }
  await app_supper_verses_render(content, folders, previous, next);
}
