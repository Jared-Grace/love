import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_shared_bar_content_root_sticky } from "./app_shared_bar_content_root_sticky.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_button_back_to_reader } from "./app_shared_bible_button_back_to_reader.mjs";
export async function app_shared_bible_screen_content(context) {
  "the opening every bible screen away from the reader shares - a cleared context, a bar that stays at the top holding the way back to the reader, and the scrolling body under it holding the shared reading column";
  "the way back sat in the body, as its first item. A book list is long, so the moment the reader scrolled to look for a book the way out scrolled off the top with it, and going back meant scrolling all the way up first. It belongs in the bar for the same reason the reader's own book and chapter buttons do - a place to leave from that is always where you left it";
  "the bar is the sticky kind, not the twin that gives the body its own scrolling box: the book list is searched by typing, and the twin's own note says why a box like that loses what is typed on a phone";
  "bar and body are both made fresh here and the padding goes on them, never on the persistent context root - the reason is written where the padding is done";
  let root = html_clear_context(context);
  let frame = app_shared_bar_content_root_sticky(root);
  let bar = property_get(frame, "bar");
  let content = property_get(frame, "content");
  app_shared_content_column_pad(bar);
  app_shared_content_column_pad(content);
  await app_shared_bible_button_back_to_reader(bar, context);
  let r = {
    root,
    bar,
    content,
  };
  return r;
}
