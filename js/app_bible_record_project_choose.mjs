import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_bible_record_project } from "./app_bible_record_project.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { app_bible_record } from "./app_bible_record.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_bible_record_project_choose(on_chosen) {
  "A screen over the page asking for the name of the project the next recordings belong to. Each project keeps its own recording of every passage, so reading the same chapter again later is a new project and never writes over the first one.";
  "The name is kept on this phone, so it is asked once and every recording after it goes into the same project until another is chosen. It is kept in letters, numbers and underscores only, because it becomes a folder name in storage.";
  arguments_assert(arguments, 1);
  let panel = html_body_div();
  html_style_assign(panel, {
    position: "fixed",
    inset: "0",
    background: "white",
    "z-index": "1000",
    padding: "16px",
  });
  html_div_text(panel, "Name this recording project:");
  let input = html_input_text(panel, "for example romans_2026");
  let current = app_bible_record_project();
  if (current) {
    html_value_set(input, current);
  }
  function choose() {
    let typed = html_value_get(input);
    let project = typed
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
    if (equal(project, "")) {
      return;
    }
    let key = text_frozen("project");
    storage_local_set(app_bible_record, key, project);
    html_remove(panel);
    on_chosen(project);
  }
  function cancel() {
    html_remove(panel);
  }
  app_shared_button_wide(panel, "Use this project", choose);
  app_shared_button_wide(panel, "Cancel", cancel);
}
