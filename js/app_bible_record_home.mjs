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
import { html_p_text } from "./html_p_text.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_bible_record_take_or_null } from "./app_bible_record_take_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_last_property } from "./list_last_property.mjs";
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
      let list2 = property_get(e, "verse_numbers");
      let joined = list_join_comma(list2);
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
  let drawn = [];
  for (let item of passages) {
    let passage = property_get(item, "passage");
    let value2 = property_get(passage, "verse_numbers");
    let item2 = entry_for(value2);
    list_add(drawn, item2);
  }
  let chapter = {
    reference,
    entries,
    refreshes: [],
  };
  ("HOW MANY PASSAGES HAVE A VIDEO is said in the top bar, and kept up as takes come and go (human 2026-11-24: every passage of Psalm 1 had a video but no chapter download showed): the same count the chapter download is offered by, shown, so a count that is wrong can be seen rather than guessed at.");
  let count_line = html_p_text(bar, "");
  function count_show() {
    function has(e) {
      let value = property_get(e, "blob");
      let nn = null_not_is(value);
      return nn;
    }
    let taken = list_filter(entries, has);
    let size = list_size(taken);
    let v = String(size);
    let size2 = list_size(entries);
    let v2 = String(size2);
    let label = text_combine_multiple([
      v,
      " of ",
      v2,
      " passages have a video",
    ]);
    html_text_set(count_line, label);
  }
  let list = property_get(chapter, "refreshes");
  list_add(list, count_show);
  count_show();
  async function take_load(e) {
    let verse_numbers2 = property_get(e, "verse_numbers");
    let found = await app_bible_record_take_or_null(
      chapter_code,
      verse_numbers2,
    );
    if (null_is(found)) {
      return;
    }
    property_set(e, "blob", found);
    for (let each_refresh of list) {
      each_refresh();
    }
  }
  for (let e of entries) {
    if (list_includes_not(drawn, e)) {
      take_load(e);
    }
  }
  for (let item of passages) {
    let passage = property_get(item, "passage");
    let verses = property_get(item, "verses");
    let p = list_last_property(verses, "p");
    let verse_numbers = property_get(passage, "verse_numbers");
    let entry = entry_for(verse_numbers);
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
