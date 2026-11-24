import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_home_inner } from "./app_shared_bible_home_inner.mjs";
import { app_bible_record_passages_download } from "./app_bible_record_passages_download.mjs";
import { app_bible_record } from "./app_bible_record.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_title_verse_set } from "./app_shared_bible_title_verse_set.mjs";
import { null_is } from "./null_is.mjs";
import { app_bible_record_project } from "./app_bible_record_project.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_bible_record_project_choose } from "./app_bible_record_project_choose.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { list_map } from "./list_map.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { app_bible_record_inline } from "./app_bible_record_inline.mjs";
export async function app_bible_record_home(context) {
  "The chapter chooser the sermons app uses, with a recorder under each passage, in place rather than on a screen of its own, and, in the top bar, which project the recordings go into. Nothing is recorded until a project is chosen, so the first button asks for one and then opens the camera.";
  "Recording a passage again inside the same project replaces the earlier take, so the button stays under every passage whether or not it has been recorded.";
  arguments_assert(arguments, 1);
  let r = await app_shared_bible_home_inner(
    context,
    app_bible_record_passages_download,
    app_bible_record,
  );
  let passages = property_get(r, "passages");
  let chapter_code = property_get(r, "chapter_code");
  let screen = property_get(r, "r");
  await app_shared_bible_title_verse_set(screen);
  ("NO SCREEN, NOTHING TO ADD TO: the shared chooser hands back nothing when it has already answered the page another way - a reference in the address shown directly, or the address put right and the page redrawn - and then there is no top bar to put the project button in (human 2026-11-23: the page crashed reading the bar of nothing).");
  if (null_is(screen)) {
    return;
  }
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
  let bible_folder = ebible_folder_english();
  let books = await ebible_version_books_browser(bible_folder);
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    [],
  );
  function lambda(item) {
    let passage = property_get(item, "passage");
    let verse_numbers = property_get(passage, "verse_numbers");
    let e = {
      verse_numbers,
      blob: null,
    };
    return e;
  }
  let entries = list_map(passages, lambda);
  let chapter = {
    reference,
    entries,
    refreshes: [],
  };
  for (let item of passages) {
    let passage = property_get(item, "passage");
    let verses = property_get(item, "verses");
    let p = list_last_property(verses, "p");
    let verse_numbers = property_get(passage, "verse_numbers");
    let entry = list_find_property(entries, "verse_numbers", verse_numbers);
    function project_ensure(then) {
      function chosen() {
        project_label();
        then();
      }
      if (app_bible_record_project()) {
        chosen();
        return;
      }
      app_bible_record_project_choose(chosen);
    }
    app_bible_record_inline(
      p,
      chapter_code,
      verse_numbers,
      project_ensure,
      chapter,
      entry,
    );
  }
}
