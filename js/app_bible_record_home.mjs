import { app_bible_record_home_verses } from "./app_bible_record_home_verses.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
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
import { app_shared_bible_folder_first } from "./app_shared_bible_folder_first.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
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
  let bible_folder = app_shared_bible_folder_first();
  let books = await ebible_version_books_browser(bible_folder);
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    [],
  );
  ("EVERY PASSAGE OF THE CHAPTER, NOT ONLY THE ONE ON SCREEN (human 2026-11-24: Psalm 2 said 1 of 1 though other passages had been recorded): the page draws only the passage picked, so the list is built from the chapter's whole split, and the takes of passages not drawn are looked up quietly here, while the drawn one's recorder looks up its own.");
  let downloaded = await app_bible_record_passages_download(chapter_code);
  let all_passages = property_get(downloaded, "passages");
  function lambda(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    let e = {
      verse_numbers,
      blob: null,
    };
    return e;
  }
  let entries = list_map(all_passages, lambda);
  function entry_for(verse_numbers) {
    let wanted = list_join_comma(verse_numbers);
    function same(e) {
      let joined = property_list_join_comma(e, "verse_numbers");
      let eq = equal(joined, wanted);
      return eq;
    }
    let found = list_filter(entries, same);
    if (list_empty_is(found)) {
      let e = {
        verse_numbers,
        blob: null,
      };
      list_add(entries, e);
      return e;
    }
    let first = list_first(found);
    return first;
  }
  app_bible_record_home_verses(
    passages,
    entry_for,
    reference,
    entries,
    chapter_code,
    project_label,
  );
}
