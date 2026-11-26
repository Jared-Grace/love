import { arguments_assert } from "./arguments_assert.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { app_bible_record_take_or_null } from "./app_bible_record_take_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { app_bible_record_project } from "./app_bible_record_project.mjs";
import { app_bible_record_project_choose } from "./app_bible_record_project_choose.mjs";
import { app_bible_record_inline } from "./app_bible_record_inline.mjs";
export function app_bible_record_home_verses(
  passages,
  entry_for,
  reference,
  entries,
  chapter_code,
  project_label,
) {
  "Draws a recorder under every passage shown, all sharing one chapter record - the chapter's name, one entry per passage, and each recorder's redraw - so a take made under one passage relabels the chapter buttons under all of them. Passages of the chapter not shown here still have their saved takes looked up, so the chapter count and the chapter download know about them too.";
  arguments_assert(arguments, 6);
  let drawn = [];
  for (let item of passages) {
    let value = property_path_get_2(item, "passage", "verse_numbers");
    let item2 = entry_for(value);
    list_add(drawn, item2);
  }
  let chapter = {
    reference,
    entries,
    refreshes: [],
  };
  let list = property_get(chapter, "refreshes");
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
