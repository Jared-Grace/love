import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { fn_name } from "./fn_name.mjs";
import { api_read } from "./api_read.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_note_pills_answerable } from "./app_shared_note_pills_answerable.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_shared_note_box } from "./app_shared_note_box.mjs";
export function app_shared_notes_review(parent, store, key, subject, names) {
  "$plain parent";
  "$plain store";
  "$plain key";
  "$plain subject";
  "$plain names";
  "The notes already standing against one thing, each with a press to say it has been answered, and under them a box to add another with one press for the part it is about.";
  "★ IT IS ONE PANEL FOR EVERY BENCH WHOSE NOTES NEED NOTHING BUT THE WORDS AND THE PART. A lyric video's picture and a file of a proposed code change are reviewed the same way, so whoever has left a note on one already knows how to leave one on the other without being taught twice. What differs is which store, which thing in it, what the thing is called on the status line, and which parts it has - and those four are all that is handed in.";
  "THE NOTES ALREADY THERE ARE SHOWN ABOVE THE BOX, because the commonest thing a second reviewer does is see again what the first one saw.";
  "IT ASKS THE STORE THROUGH THE API rather than reading the file, because this is drawn in a browser and the notes are on the disk. That is also why the notes arrive after the page does: the thing being reviewed is what is looked at, and waiting on a note list to draw it would be the wrong way round.";
  arguments_assert(arguments, 5);
  let holder = html_div(parent);
  html_style_margin_top(holder, "12px");
  let pills = html_div(holder);
  let status = app_shared_text_quiet(holder, "");
  async function answer(words) {
    let f_done = fn_name("notes_done");
    await api_read(f_done, [store, key, words]);
    await render();
  }
  async function render() {
    let f_read = fn_name("notes_read");
    let notes = await api_read(f_read, [store, key]);
    html_clear(pills);
    app_shared_note_pills_answerable(pills, notes, answer);
  }
  function status_set(said) {
    html_text_set(status, said);
  }
  async function filed(field, typed) {
    let f_add = fn_name("notes_add");
    let entry = {
      field,
      note: typed,
    };
    await api_read(f_add, [store, key, entry]);
  }
  let bench = {
    status_set,
    status_working: status_set,
    render,
  };
  app_shared_note_box(holder, bench, subject, names, filed);
  render();
  return holder;
}
