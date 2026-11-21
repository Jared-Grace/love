import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_home_inner } from "./app_shared_bible_home_inner.mjs";
import { app_bible_sermons_download } from "./app_bible_sermons_download.mjs";
import { app_bible_record } from "./app_bible_record.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_title_verse_set } from "./app_shared_bible_title_verse_set.mjs";
import { app_bible_record_project } from "./app_bible_record_project.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_bible_record_project_choose } from "./app_bible_record_project_choose.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { app_bible_record_camera } from "./app_bible_record_camera.mjs";
export async function app_bible_record_home(context) {
  "The chapter chooser the sermons app uses, with a record button under each passage and, in the top bar, which project the recordings go into. Nothing is recorded until a project is chosen, so the first button asks for one and then opens the camera.";
  "Recording a passage again inside the same project replaces the earlier take, so the button stays under every passage whether or not it has been recorded.";
  arguments_assert(arguments, 1);
  let r = await app_shared_bible_home_inner(
    context,
    app_bible_sermons_download,
    app_bible_record,
  );
  let passages = property_get(r, "passages");
  let chapter_code = property_get(r, "chapter_code");
  let screen = property_get(r, "r");
  await app_shared_bible_title_verse_set(screen);
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
  for (let item of passages) {
    let passage = property_get(item, "passage");
    let verses = property_get(item, "verses");
    let p = list_last_property(verses, "p");
    let verse_numbers = property_get(passage, "verse_numbers");
    async function camera() {
      project_label();
      await app_bible_record_camera(chapter_code, verse_numbers);
    }
    async function record() {
      if (app_bible_record_project()) {
        await camera();
        return;
      }
      app_bible_record_project_choose(camera);
    }
    app_shared_button_wide(p, "Record this passage", record);
  }
}
