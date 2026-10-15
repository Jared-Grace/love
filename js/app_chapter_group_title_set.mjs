import { app_chapter_group_chapter_label } from "./app_chapter_group_chapter_label.mjs";
import { app_shared_title } from "./app_shared_title.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_title_set } from "./html_title_set.mjs";
export function app_chapter_group_title_set(chapter_code) {
  "$plain chapter_code";
  "Names the browser tab after the chapter being divided, and then the app - Psalm 69 - Chapter Groups - so a row of tabs, or a phone's list of them, says which chapter each one is before it says what it is.";
  "The app's part is asked for afresh each time rather than kept from the title the page opened with, so moving to another chapter without loading the page again replaces the chapter rather than putting a second one in front of the first.";
  let chapter = app_chapter_group_chapter_label(chapter_code);
  let app = app_shared_title("chapter_group");
  let title = text_combine_multiple([chapter, " - ", app]);
  html_title_set(title);
}
