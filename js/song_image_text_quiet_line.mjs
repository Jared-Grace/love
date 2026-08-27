import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { song_image_color_text_quiet } from "./song_image_color_text_quiet.mjs";
export function song_image_text_quiet_line(parent) {
  "A line of the small dim writing the hymn's pages put their labels, counts and references in - made empty, for the caller to set words on.";
  "IT IS THE SMALL SIZE AND THE DIM COLOUR TOGETHER, because either alone reads as a mistake. Small and full brightness looks like body text somebody shrank; dim at reading size looks like text that failed to load. The pair is what says this is here to be glanced at rather than read.";
  "THE COLOUR IS ASKED FOR RATHER THAN SPELLED, and the size sits beside it here so the two travel together. Three places set both by hand, and a fourth setting only one of them is the way a page goes quietly inconsistent.";
  "THE SIZE IS A SHARE OF THE PAGE'S OWN AND NOT A COUNT OF PIXELS. Written as twelve pixels it stayed twelve pixels while every app around it opened at twenty, so these pages read as the small ones - and a reader who grows the text everywhere else grows everything on the page except this.";
  arguments_assert(arguments, 1);
  let line = html_div(parent);
  let small = app_shared_caption_font_size();
  html_style_font_size(line, small);
  let quiet = song_image_color_text_quiet();
  html_style_set(line, "color", quiet);
  return line;
}
