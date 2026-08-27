import { html_body_div_page_dark } from "./html_body_div_page_dark.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { song_image_couplets_title } from "./song_image_couplets_title.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_div_paragraph_small } from "./html_div_paragraph_small.mjs";
import { song_image_color_text_quiet } from "./song_image_color_text_quiet.mjs";
import { song_image_review_couplets } from "./song_image_review_couplets.mjs";
import { song_image_review_row } from "./song_image_review_row.mjs";
export function song_image_review_preview() {
  "the few couplets somebody has been asked to look at this round, on the sandbox app at the hash song_image_review - each with what was changed in it and its picture full width, arrows to every other attempt, and a keep button to choose one on the spot";
  "it exists because the audit page shows all thirty-six and a round of changes touches six. Handing a reader the whole hymn to find six pictures in spends their attention on the finding, which is the one part nobody needed doing - and worse, it quietly asks them to review the thirty that were already agreed.";
  "the column is narrower than the audit page's because there is only ever one thing across here. The audit page sets a picture beside its verses and needs the width for two columns; this one stacks, and a line of text stretched to eight hundred pixels is harder to read rather than easier.";
  "which couplets these are lives in its own list and not here, so a fresh round is one small edit to that list and this file never changes";
  let root = html_body_div_page_dark();
  html_style_set(root, "max-width", "560px");
  html_style_margin(root, "0 auto");
  let title = html_div(root);
  html_style_font_size(title, "26px");
  html_style_set(title, "font-weight", "700");
  let named = song_image_couplets_title();
  html_text_set(title, named);
  let subtitle = html_div_paragraph_small(root);
  let quiet = song_image_color_text_quiet();
  html_style_set(subtitle, "color", quiet);
  let said =
    "the couplets changed this round, each with what changed in it - " +
    "the arrows under a picture reach every other attempt, and keep chooses one";
  html_text_set(subtitle, said);
  let asked_list = song_image_review_couplets();
  for (let asked of asked_list) {
    song_image_review_row(root, asked);
  }
  return root;
}
