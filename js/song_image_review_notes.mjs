import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { song_image_text_quiet_line } from "./song_image_text_quiet_line.mjs";
import { fn_name } from "./fn_name.mjs";
import { api_read } from "./api_read.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_note_pills } from "./app_shared_note_pills.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { song_image_review_note_parts } from "./song_image_review_note_parts.mjs";
import { app_shared_note_box } from "./app_shared_note_box.mjs";
export function song_image_review_notes(parent, key) {
  "The notes already standing against one couplet's drawing, and under them a box to add another with one press for the part it is about.";
  "IT IS THE SAME BOX THE ARCS BENCH FILES ITS NOTES IN, and that is worth more than the lines it saves. A reviewer who has filed a note against a turn of somebody's arc already knows that the box refuses to file empty, that the press is the part and never the typing, and that the line underneath says whether it landed. Two boxes that behaved almost the same would have to be learnt twice and would drift apart on the third change.";
  "THE NOTES ALREADY THERE ARE SHOWN ABOVE THE BOX, because the commonest thing a second reader does is file again what the first one already filed.";
  "IT ASKS THE STORE THROUGH THE API rather than reading the file, because this is drawn in a browser and the store is on the disk the pictures were drawn on. That is also why the notes arrive after the page does: the picture is the thing being looked at and waiting on a note list to draw it would be the wrong way round.";
  "the notes stand under the picture rather than over it, unlike the arcs bench where they sit above the box and under the turn. A turn is words and its notes are words, so a note above the box reads on from the thing it is about; a picture is not read at all, it is looked at, and a paragraph of notes between the words and the drawing would push the drawing off the screen the words are on.";
  arguments_assert(arguments, 2);
  let holder = html_div(parent);
  html_style_margin_top(holder, "12px");
  let pills = html_div(holder);
  let status = song_image_text_quiet_line(holder);
  async function render() {
    let f_name = fn_name("song_image_notes");
    let notes = await api_read(f_name, [key]);
    html_clear(pills);
    song_image_review_note_pills(pills, key, notes, render);
  }
  function status_set(said) {
    html_text_set(status, said);
  }
  async function filed(field, typed) {
    let f_name = fn_name("song_image_note_add");
    await api_read(f_name, [key, field, typed]);
  }
  let bench = {
    status_set,
    status_working: status_set,
    render,
  };
  let v = String(key);
  let subject = text_combine_multiple(["couplet ", v]);
  let names = song_image_review_note_parts();
  app_shared_note_box(holder, bench, subject, names, filed);
  render();
  return holder;
}
