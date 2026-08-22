import { song_image_audit_picture } from "./song_image_audit_picture.mjs";
import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { song_image_row_wrapping } from "./song_image_row_wrapping.mjs";
import { song_image_text_quiet_line } from "./song_image_text_quiet_line.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_couplet_gloss } from "./song_image_couplet_gloss.mjs";
import { song_image_audit_note } from "./song_image_audit_note.mjs";
export function song_image_audit_row(parent, couplet) {
  "one couplet on the audit page: its picture beside its two lines, with what the words rest on and what the picture rests on written underneath one another";
  "the picture and the words sit side by side because the question the page exists to answer is whether they say the same thing, and that is a question nobody can hold in their head across a scroll";
  let row = song_image_row_wrapping(parent);
  html_style_margin_top(row, "38px");
  html_style_set(row, "border-top", "1px solid #262626");
  html_style_set(row, "padding-top", "22px");
  let key = song_image_couplet_key(couplet.n);
  let gloss = song_image_couplet_gloss(couplet.n);
  let left = html_div(row);
  html_style_set(left, "width", "260px");
  song_image_audit_picture(left, key, gloss.kept);
  let symbol = song_image_text_quiet_line(left);
  html_style_margin_top(symbol, "10px");
  html_style_line_height(symbol, "1.5");
  html_text_set(symbol, couplet.symbol);
  let right = html_div(row);
  html_style_set(right, "flex", "1 1 340px");
  let head = song_image_text_quiet_line(right);
  let numbers = "verse " + couplet.verse + " · couplet " + couplet.n;
  let drawn = " · drawing " + key;
  html_text_set(head, numbers + drawn);
  let lines = html_div(right);
  html_style_margin_top(lines, "8px");
  html_style_font_size(lines, "24px");
  html_style_line_height(lines, "1.35");
  html_style_set(lines, "font-weight", "700");
  html_text_set(lines, couplet.first + "<br>" + couplet.second);
  song_image_audit_note(
    right,
    "the words",
    gloss.lyric_ref,
    gloss.lyric_explain,
  );
  song_image_audit_note(
    right,
    "the picture",
    couplet.symbol_ref,
    gloss.symbol_explain,
  );
  return row;
}
