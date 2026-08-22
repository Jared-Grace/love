import { html_width_full } from "./html_width_full.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_align_items_center } from "./html_align_items_center.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { html_text_align } from "./html_text_align.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { api_read } from "./api_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_src_set } from "./html_src_set.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_img } from "./html_img.mjs";
import { html_button } from "./html_button.mjs";
import { html_text_set } from "./html_text_set.mjs";
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
import { song_image_text_quiet_line } from "./song_image_text_quiet_line.mjs";
export function song_image_audit_picture(parent, key, kept) {
  "one couplet's picture with an arrow at each side of it, so every attempt that was ever drawn for that couplet can be looked at rather than only the one being kept";
  "the number under the picture is the attempt's own number and not a fresh label, because that number is already the name of the file it came from and already the number written in the table as kept. A page that lettered them a to g would be inventing a second name for a thing that has one, and the moment somebody said try b nobody could tell which file they meant.";
  "it opens on the kept attempt rather than on the first, because the kept one is what the film shows and every other one is being offered as an alternative to it. Opening on the first would make the page argue for a picture nobody chose.";
  "the arrows stop at each end instead of wrapping round, so a couplet with one attempt shows two dead arrows rather than two that appear to do something and change nothing";
  "keep writes the attempt now on screen into the glosses file, so the choice is made in the one place where both pictures can be seen at once. Reading a number off this page and typing it into the file afterwards is the same choice made from memory, and a misread number there is a wrong picture in the film that nothing catches.";
  ("the picture is moved with ",
    fn_name("html_src_set"),
    " and never by writing to a src property, because everything ",
    fn_name("html_div"),
    " and ",
    fn_name("html_img"),
    " hand back is a wrapped component and not the element itself. Writing picture.src on the wrapper is accepted in silence: the property lands on the wrapper, nothing throws, no gate goes red, and the arrows move the number under the picture while the picture never changes at all - which is exactly how this was found, by a human clicking them.");
  ("the picture is marked lazy and async because there are thirty-two of these on the page and every one of them is a full square drawing about a thousand pixels on a side, shown at a fraction of that. Loaded eagerly the browser holds all thirty-two decoded at once, which is what made the page heavy to scroll; lazy leaves a row's drawing unfetched until it is nearly on screen, and async keeps the decoding off the thread that is doing the scrolling. The arrows still work, because changing src on an image already on screen fetches straight away.");
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
  html_attribute_set(picture, "loading", "lazy");
  html_attribute_set(picture, "decoding", "async");
  html_width_full(picture);
  html_display_block(picture);
  html_border_radius(picture, "8px");
  let strip = html_div(parent);
  html_display_flex(strip);
  html_style_gap(strip, "8px");
  html_style_margin_top(strip, "8px");
  html_align_items_center(strip);
  let kept_now = kept;
  function redraw() {
    let attempt = attempts[shown];
    let src2 = song_image_drawn_url(key, attempt);
    html_src_set(picture, src2);
    let of = String(attempt) + " of " + String(attempts.length);
    let mark = equal(attempt, kept_now) ? " · kept" : "";
    html_text_set(attempt_line, of + mark);
  }
  async function keep_click() {
    let attempt = attempts[shown];
    html_text_set(keep, "keeping");
    let f_name = fn_name("song_image_kept_set");
    await api_read(f_name, [key, attempt]);
    kept_now = attempt;
    html_text_set(keep, "keep");
    redraw();
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
  let attempt_line = song_image_text_quiet_line(strip);
  html_style_flex(attempt_line, "1 1 auto");
  html_text_align(attempt_line, "center");
  let on = html_button(strip, "›", on_click);
  html_style_padding(on, "4px 12px");
  html_cursor_pointer(on);
  let keep = html_button(strip, "keep", keep_click);
  html_style_padding(keep, "4px 10px");
  html_style_font_size(keep, "12px");
  html_cursor_pointer(keep);
  redraw();
  return picture;
}
