import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_insert } from "./html_insert.mjs";
import { html_centered } from "./html_centered.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_chapter_group_top_draw(
  content,
  folder_code,
  on_change,
  save,
) {
  "$plain content";
  "$plain folder_code";
  "What stands above the chapter: a button naming the folder, which changes it; a save button; and a line saying whether the division has been sent, which is handed back so it can be written to.";
  arguments_assert(arguments, 4);
  let top = html_div(content);
  html_insert(content, top, 0);
  html_centered(top);
  function on_folder() {
    on_change(folder_code);
  }
  let label = text_combine_multiple(["✏️ 📁 ", folder_code]);
  app_shared_button_wide(top, label, on_folder);
  app_shared_button_wide(top, "💾 Save", save);
  let status = html_p_text(top, "");
  return status;
}
