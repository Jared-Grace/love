import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function song_image_couplet_lines(parent, couplet) {
  "The two lines a couplet is sung to, drawn the way every page of the hymn draws them - larger than the writing around them, heavy, and one above the other.";
  "THEY ARE THE ONE THING ON THESE PAGES THAT IS SUNG, and everything else on the band is written about them. Drawn at the size of the notes and the labels they would read as another note, and the reader would have to work out which of five paragraphs is the hymn.";
  "THE SIZE IS RELATIVE AND NOT A COUNT OF PIXELS, so it follows the size the page opens at rather than fixing its own. A number here is a number that stays put while the page around it grows, which is the whole of how a page ends up with one paragraph somebody cannot read.";
  arguments_assert(arguments, 2);
  let lines = html_div(parent);
  html_style_margin_top(lines, "8px");
  html_style_font_size(lines, "1.2em");
  html_style_line_height(lines, "1.35");
  html_style_set(lines, "font-weight", "700");
  html_text_set(lines, couplet.first + "<br>" + couplet.second);
  return lines;
}
