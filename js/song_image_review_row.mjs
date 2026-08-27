import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { song_image_couplet_gloss } from "./song_image_couplet_gloss.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { song_image_color_border_resting } from "./song_image_color_border_resting.mjs";
import { html_border_top } from "./html_border_top.mjs";
import { html_style_padding_top } from "./html_style_padding_top.mjs";
import { song_image_text_quiet_line } from "./song_image_text_quiet_line.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { song_image_audit_picture } from "./song_image_audit_picture.mjs";
import { html_img_lazy_full_block } from "./html_img_lazy_full_block.mjs";
export function song_image_review_row(parent, asked) {
  "one couplet on the review page: the two lines it is sung to, one line saying what was changed in its picture, and then the picture itself full width with the arrows and the keep button under it";
  "the words and the note come ABOVE the picture and not beside it. A picture arrives at a height nobody knew in advance, so anything underneath one jumps down the page the moment it lands - and on a phone the column is one thing wide anyway, so beside is not on offer and the only question left is which of the two is read first.";
  "the picture is held to about a phone's width and centred rather than run to the full column. Drawn full width it took a whole screen each, so six of them were six screens of scrolling and no two could be held in mind together - and a review round is comparing as much as it is looking. This width still shows the big shapes the drawings are made of, and the arrows reach the same file at full size for the one picture that needs it.";
  "it borrows the audit page's picture outright, so every attempt ever drawn for the couplet is reachable from here by the arrows and any of them can be kept on the spot. Showing only the kept one would make this a page for approving rather than for choosing, and the alternative is usually the whole of what somebody wants to say.";
  let couplet = song_image_couplet_get(asked.n);
  let gloss = song_image_couplet_gloss(asked.n);
  let drawn = song_image_couplet_key(asked.n);
  let row = html_div(parent);
  html_style_margin_top(row, "38px");
  let resting = song_image_color_border_resting();
  html_border_top(row, "1px", resting);
  html_style_padding_top(row, "22px");
  let head = song_image_text_quiet_line(row);
  let numbers = "verse " + couplet.verse + " · couplet " + asked.n;
  html_text_set(head, numbers);
  let lines = html_div(row);
  html_style_margin_top(lines, "8px");
  html_style_font_size(lines, "24px");
  html_style_line_height(lines, "1.35");
  html_style_set(lines, "font-weight", "700");
  html_text_set(lines, couplet.first + "<br>" + couplet.second);
  let said = song_image_text_quiet_line(row);
  html_style_margin_top(said, "10px");
  html_style_line_height(said, "1.5");
  html_text_set(said, asked.note);
  let holder = html_div(row);
  html_style_assign(holder, {
    "max-width": "320px",
    "margin-top": "14px",
    "margin-left": "auto",
    "margin-right": "auto",
  });
  let picture = song_image_audit_picture(holder, drawn, gloss.kept);
  html_img_lazy_full_block(picture);
  song_image_review_notes(row, drawn);
  return row;
}
