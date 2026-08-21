import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_img } from "./html_img.mjs";
import { html_button } from "./html_button.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { song_image_drawn_url } from "./song_image_drawn_url.mjs";
import { song_image_drawn_attempts_known } from "./song_image_drawn_attempts_known.mjs";
import { song_image_color_text_quiet } from "./song_image_color_text_quiet.mjs";
export function song_image_audit_picture(parent, key, kept) {
  "one couplet's picture with an arrow at each side of it, so every attempt that was ever drawn for that couplet can be looked at rather than only the one being kept";
  "the number under the picture is the attempt's own number and not a fresh label, because that number is already the name of the file it came from and already the number written in the table as kept. A page that lettered them a to g would be inventing a second name for a thing that has one, and the moment somebody said try b nobody could tell which file they meant.";
  "it opens on the kept attempt rather than on the first, because the kept one is what the film shows and every other one is being offered as an alternative to it. Opening on the first would make the page argue for a picture nobody chose.";
  "the arrows stop at each end instead of wrapping round, so a couplet with one attempt shows two dead arrows rather than two that appear to do something and change nothing";
  let known = song_image_drawn_attempts_known();
  let text_key = String(key);
  let attempts = property_exists(known, text_key)
    ? property_get(known, text_key)
    : [kept];
  let at = attempts.indexOf(kept);
  let start = less_than(at, 0) ? 0 : at;
  let shown = start;
  let src = song_image_drawn_url(key, attempts[shown]);
  let picture = html_img(parent, src);
  html_style_set(picture, "width", "100%");
  html_style_set(picture, "display", "block");
  html_border_radius(picture, "8px");
  let strip = html_div(parent);
  html_display_flex(strip);
  html_style_gap(strip, "8px");
  html_style_margin_top(strip, "8px");
  html_style_set(strip, "align-items", "center");
  function redraw() {
    let attempt = attempts[shown];
    picture.src = song_image_drawn_url(key, attempt);
    let of = String(attempt) + " of " + String(attempts.length);
    let mark = equal(attempt, kept) ? " · kept" : "";
    html_text_set(counter, of + mark);
  }
  function step(by) {
    let next = shown + by;
    let inside =
      greater_than_equal(next, 0) && less_than(next, attempts.length);
    if (inside) {
      shown = next;
      redraw();
    }
  }
  function back_click() {
    step(-1);
  }
  function on_click() {
    step(1);
  }
  let back = html_button(strip, "‹", back_click);
  html_style_padding(back, "4px 12px");
  html_cursor_pointer(back);
  let counter = html_div(strip);
  html_style_font_size(counter, "12px");
  let style_value = song_image_color_text_quiet();
  html_style_set(counter, "color", style_value);
  html_style_set(counter, "flex", "1 1 auto");
  html_style_set(counter, "text-align", "center");
  let on = html_button(strip, "›", on_click);
  html_style_padding(on, "4px 12px");
  html_cursor_pointer(on);
  redraw();
  return picture;
}
