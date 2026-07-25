import { app_shared_button } from "./app_shared_button.mjs";
import { window_open } from "./window_open.mjs";
export function html_button_bible_chapter_open(parent, chapter_code, button_text) {
  ("Open the Bible app to a WHOLE CHAPTER in a NEW TAB. bible.html is hash-routed (#c=<chapter_code>; the verse defaults to 1), and the filename is relative so the same link works from both the dev and prod g_verify pages. A DRY sibling of html_button_biblehub_open — one reusable external-open button instead of an inline window.open call.");
  function lambda() {
    window_open("bible.html#c=" + chapter_code);
  }
  let b = app_shared_button(parent, button_text, lambda);
  return b;
}
