import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_couplet_gloss } from "./song_image_couplet_gloss.mjs";
import { song_image_row_picture_columns } from "./song_image_row_picture_columns.mjs";
import { song_image_text_quiet_line } from "./song_image_text_quiet_line.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { song_image_couplet_lines } from "./song_image_couplet_lines.mjs";
import { song_image_audit_note } from "./song_image_audit_note.mjs";
export function song_image_audit_row(parent, couplet) {
  "one couplet on the audit page: its picture beside its two lines, with what the words rest on and what the picture rests on written underneath one another";
  "the picture and the words sit side by side because the question the page exists to answer is whether they say the same thing, and that is a question nobody can hold in their head across a scroll";
  "the band itself is not built here. Every page of the hymn sets a drawing beside a column of writing, and the one that draws that shape holds the rule, the gap and the picture's width so the pages cannot disagree about them.";
  let key = song_image_couplet_key(couplet.n);
  let gloss = song_image_couplet_gloss(couplet.n);
  let columns = song_image_row_picture_columns(parent, key, gloss.kept);
  let symbol = song_image_text_quiet_line(columns.left);
  html_style_margin_top(symbol, "10px");
  html_style_line_height(symbol, "1.5");
  html_text_set(symbol, couplet.symbol);
  let head = song_image_text_quiet_line(columns.right);
  let numbers = "verse " + couplet.verse + " · couplet " + couplet.n;
  let drawn = " · drawing " + key;
  html_text_set(head, numbers + drawn);
  song_image_couplet_lines(columns.right, couplet);
  song_image_audit_note(
    columns.right,
    "the words",
    gloss.lyric_ref,
    gloss.lyric_explain,
  );
  song_image_audit_note(
    columns.right,
    "the picture",
    couplet.symbol_ref,
    gloss.symbol_explain,
  );
  let r = columns.row;
  return r;
}
