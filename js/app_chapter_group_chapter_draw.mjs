import { arguments_assert } from "./arguments_assert.mjs";
import { app_chapter_group_path } from "./app_chapter_group_path.mjs";
import { app_chapter_group_top_draw } from "./app_chapter_group_top_draw.mjs";
import { html_div } from "./html_div.mjs";
import { app_chapter_group_texts_fill } from "./app_chapter_group_texts_fill.mjs";
import { app_chapter_group_splits_load } from "./app_chapter_group_splits_load.mjs";
import { not } from "./not.mjs";
import { app_chapter_group_status_show } from "./app_chapter_group_status_show.mjs";
import { app_chapter_group_scroll_keep } from "./app_chapter_group_scroll_keep.mjs";
import { html_scroll_body_top_kept } from "./html_scroll_body_top_kept.mjs";
import { app_chapter_group_groups_draw } from "./app_chapter_group_groups_draw.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_without } from "./list_without.mjs";
import { app_chapter_group_splits_save } from "./app_chapter_group_splits_save.mjs";
import { app_shared_unsent_sync } from "./app_shared_unsent_sync.mjs";
export async function app_chapter_group_chapter_draw({
  app_name,
  folder_code,
  on_change,
  entries,
  content,
  chapter_code,
}) {
  "$plain app_name";
  "$plain folder_code";
  "$plain entries";
  "$plain content";
  "$plain chapter_code";
  "Everything the grouping adds to a chapter once its verses are drawn: the folder, a save button and a line saying whether the division has been sent at the top; every group in a box of its own, with a heading at its top and a button that copies its words and one that copies its name; under the last verse of every group but the last, a button that joins it to the next; and on a chosen verse that does not already begin a group, a button that begins one there.";
  "A division is only the verses that begin a group after the first. Beginning a group at a verse adds that verse, joining takes away the verse the next group began at, and a chapter never divided is all one group.";
  "Every change is kept on this device and sent at once, with nothing to press; the save button does the same again, for somebody who wants to be sure, and for after the internet comes back.";
  "A change draws only the boxes, headings and buttons again and moves the verses into them, never drawing a verse again, so the chapter does not move under the reader's finger.";
  "The copy is the group's verses in the language being read, one after another with the line breaks and stepping the printing gives them where those can be had, respelled for singing.";
  arguments_assert(arguments, 1);
  let path = app_chapter_group_path(folder_code, chapter_code);
  let status = app_chapter_group_top_draw(
    content,
    folder_code,
    on_change,
    save,
  );
  ("The boxes live in one place made before anything else is added under the verses, so drawing them again never moves them past what comes after.");
  let groups_place = html_div(content);
  ("The chapter is drawn as one group at once, before storage or the words have answered, so nothing on the page is waiting to be pressed while it cannot work; the division asked for arrives a moment later and the headings are drawn again.");
  let texts = {};
  let splits = [];
  let touched = false;
  refresh();
  await app_chapter_group_texts_fill(texts, chapter_code);
  ("A division made while storage was still being asked is the newer one, so then what storage answers is let go.");
  let loaded = await app_chapter_group_splits_load(app_name, path);
  if (not(touched)) {
    splits = loaded;
    refresh();
  }
  await app_chapter_group_status_show(status, path);
  app_chapter_group_scroll_keep(path);
  function refresh() {
    "Emptying the boxes makes the page short for a moment and the browser answers by going to the top, so how far down the reader was is read first and given back after.";
    html_scroll_body_top_kept(drawn);
  }
  function drawn() {
    app_chapter_group_groups_draw({
      groups_place,
      entries,
      splits,
      chapter_code,
      texts,
      on_split,
      on_join,
    });
  }
  async function on_split(number) {
    splits = list_concat(splits, [number]);
    await changed();
  }
  async function on_join(number_next) {
    splits = list_without(splits, number_next);
    await changed();
  }
  async function save() {
    await app_chapter_group_splits_save(app_name, path, splits);
    await app_chapter_group_status_show(status, path);
    await app_shared_unsent_sync();
    await app_chapter_group_status_show(status, path);
  }
  async function changed() {
    touched = true;
    refresh();
    await save();
  }
}
