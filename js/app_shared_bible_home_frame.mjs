import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bar_content } from "./app_shared_bar_content.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { html_centered } from "./html_centered.mjs";
export function app_shared_bible_home_frame(context, bar_extra) {
  arguments_assert(arguments, 2);
  let frame = app_shared_bar_content(context);
  let content = property_get(frame, "content");
  app_shared_content_column_pad(content);
  let bar = property_get(frame, "bar");
  html_centered(bar);
  bar_extra(bar);
  let r = {
    content,
    bar,
  };
  return r;
}
