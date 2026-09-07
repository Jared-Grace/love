import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_picture_note_key } from "./lyric_video_picture_note_key.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { fn_name } from "./fn_name.mjs";
import { api_read } from "./api_read.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_note_pills_answerable } from "./app_shared_note_pills_answerable.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { path_name } from "./path_name.mjs";
import { lyric_video_picture_note_parts } from "./lyric_video_picture_note_parts.mjs";
import { app_shared_note_box } from "./app_shared_note_box.mjs";
export function lyric_video_review_notes(parent, picture) {
  "$plain parent";
  "$plain picture";
  "The notes already standing against one background picture of a lyric video, and under them a box to add another with one press for the part it is about.";
  "IT IS THE SAME BOX THE DRAWING BENCHES FILE THEIR NOTES IN, so that whoever has reviewed a hymn's pictures already knows how to review a psalm's without being taught twice.";
  "IT IS HANDED THE PICTURE AND WORKS OUT THE KEY ITSELF. Whoever draws this is watching a video and knows which picture is on the screen; asking them for a key as well would be asking them to know how the notes are filed, and there would then be two places that had to agree about it.";
  "THE NOTES ALREADY THERE ARE SHOWN ABOVE THE BOX, because the commonest thing a second watcher does is see again what the first one saw, and a psalm is watched more than once.";
  "IT ASKS THE STORE THROUGH THE API rather than reading the file, because this is drawn in a browser and the notes are on the disk the pictures were drawn on.";
  arguments_assert(arguments, 2);
  let path = property_get(picture, "path");
  let key = lyric_video_picture_note_key(picture);
  let holder = html_div(parent);
  html_style_margin_top(holder, "12px");
  let pills = html_div(holder);
  let status = app_shared_text_quiet(holder, "");
  async function answer(words) {
    let f_done = fn_name("lyric_video_picture_note_done");
    await api_read(f_done, [key, words]);
    await render();
  }
  async function render() {
    let f_read = fn_name("lyric_video_picture_notes");
    let notes = await api_read(f_read, [key]);
    html_clear(pills);
    app_shared_note_pills_answerable(pills, notes, answer);
  }
  function status_set(said) {
    html_text_set(status, said);
  }
  async function filed(field, typed) {
    let f_add = fn_name("lyric_video_picture_note_add");
    await api_read(f_add, [key, field, typed]);
  }
  let bench = {
    status_set,
    status_working: status_set,
    render,
  };
  let subject = path_name(path);
  let names = lyric_video_picture_note_parts();
  app_shared_note_box(holder, bench, subject, names, filed);
  render();
  return holder;
}
