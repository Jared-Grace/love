import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_code_font } from "./app_shared_color_code_font.mjs";
import { app_shared_color_gray } from "./app_shared_color_gray.mjs";
import { app_code_note_name_mark_opacity } from "./app_code_note_name_mark_opacity.mjs";
import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
import { range_from } from "./range_from.mjs";
import { js_comments_get } from "./js_comments_get.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_note_names_marked } from "./app_code_note_names_marked.mjs";
import { app_code_note_marks } from "./app_code_note_marks.mjs";
import { app_code_note_name_color_or_null } from "./app_code_note_name_color_or_null.mjs";
import { add } from "./add.mjs";
import { app_code_note_name_spans } from "./app_code_note_name_spans.mjs";
export function app_code_note_styles(code) {
  arguments_assert(arguments, 1);
  ("one colour and one strength for every single character of a program, in the order the characters stand, so that whoever draws it never has to decide anything");
  ("EVERY CHARACTER IS ANSWERED SEPARATELY, because the things being said overlap. A note is dim; a mark inside that note is dimmer still; the name between the two marks is coloured; and the same name out in the code is coloured too, where nothing around it is dim at all. Written as ranges those four would have to be cut against each other, and the last one written would quietly win. Written a character at a time they simply lie on top of one another in the order they are laid down, which is the order they are written here.");
  ("Laid down weakest first: the code, then the notes over it, then the marks, then the names. So a name inside a note ends up coloured and a bracket around it ends up faded, whatever else was true of that character before.");
  ("A program is a few hundred characters long, so answering each one costs nothing worth measuring, and it is the shape that can be reasoned about rather than tested.");
  let white = app_shared_color_code_font();
  let dim = app_shared_color_gray();
  let full = "1";
  let faded = app_code_note_name_mark_opacity();
  let size = text_size(code);
  let last_of_code = subtract(size, 1);
  let styles = [];
  for (let index of range_from(0, last_of_code)) {
    styles.push([white, full]);
  }
  let comments = js_comments_get(code);
  for (let comment of comments) {
    let start = property_get(comment, "start");
    let end = property_get(comment, "end");
    let last = subtract(end, 1);
    for (let index of range_from(start, last)) {
      styles[index] = [dim, full];
    }
  }
  let names = app_code_note_names_marked(code);
  let marks = app_code_note_marks(code);
  for (let mark of marks) {
    let name = mark[0];
    let mark_from = mark[1];
    let mark_to = mark[2];
    let mark_last = subtract(mark_to, 1);
    styles[mark_from] = [dim, faded];
    styles[mark_last] = [dim, faded];
    let color = app_code_note_name_color_or_null(names, name);
    if (color) {
      let name_from = add(mark_from, 1);
      let name_last = subtract(mark_last, 1);
      for (let index of range_from(name_from, name_last)) {
        styles[index] = [color, full];
      }
    }
  }
  let spans = app_code_note_name_spans(code, names);
  for (let span of spans) {
    let span_last = subtract(span[1], 1);
    for (let index of range_from(span[0], span_last)) {
      styles[index] = [span[2], full];
    }
  }
  return styles;
}
