import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_project } from "./app_bible_record_project.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_bible_record_project_choose } from "./app_bible_record_project_choose.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_bible_record_home_entry_for } from "./app_bible_record_home_entry_for.mjs";
export async function app_bible_record_home_reference(screen, chapter_code) {
  arguments_assert(arguments, 2);
  let project_button = null;
  function project_label() {
    let project = app_bible_record_project();
    let label = project
      ? "Project: " + project + " (change)"
      : "Choose a project";
    html_text_set(project_button, label);
  }
  function project_change() {
    app_bible_record_project_choose(project_label);
  }
  let bar = property_get(screen, "bar");
  project_button = app_shared_button_wide(bar, "", project_change);
  project_label();
  ("ONE LIST OF TAKES FOR THE WHOLE CHAPTER, filled in before any recorder is drawn, so every recorder can tell from the first whether the chapter's takes are complete (human 2026-11-24: download the chapter's takes as one video).");
  let r2 = await app_bible_record_home_entry_for(chapter_code);
  let entry_for = property_get(r2, "entry_for");
  let entries = property_get(r2, "entries");
  let reference = property_get(r2, "reference");
  let r = {
    project_label,
    entry_for,
    entries,
    reference,
  };
  return r;
}
