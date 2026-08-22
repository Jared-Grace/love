import { song_image_audit_picture_attempts } from "./song_image_audit_picture_attempts.mjs";
import { song_image_audit_picture_on } from "./song_image_audit_picture_on.mjs";
import { song_image_audit_picture_shown } from "./song_image_audit_picture_shown.mjs";
import { song_image_audit_picture_strip } from "./song_image_audit_picture_strip.mjs";
import { song_image_audit_picture_kept_now } from "./song_image_audit_picture_kept_now.mjs";
import { song_image_audit_picture_redraw } from "./song_image_audit_picture_redraw.mjs";
import { api_read } from "./api_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { html_img } from "./html_img.mjs";
import { html_button } from "./html_button.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
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
  let attempts = song_image_audit_picture_attempts(key, known, kept);
  let shown = song_image_audit_picture_shown(attempts, kept);
  let src = song_image_drawn_url(key, attempts[shown]);
  let picture = html_img(parent, src);
  let strip = song_image_audit_picture_strip(picture, parent);
  let kept_now = song_image_audit_picture_kept_now(strip, kept);
  async function keep_click() {
    let attempt = attempts[shown];
    html_text_set(keep, "keeping");
    let f_name = fn_name("song_image_kept_set");
    await api_read(f_name, [key, attempt]);
    kept_now = attempt;
    html_text_set(keep, "keep");
    song_image_audit_picture_redraw(
      attempts,
      shown,
      key,
      picture,
      kept_now,
      attempt_line,
    );
  }
  function step(by) {
    let next = shown + by;
    let inside =
      greater_than_equal(next, 0) && less_than(next, attempts.length);
    if (inside) {
      shown = next;
      song_image_audit_picture_redraw(
        attempts,
        shown,
        key,
        picture,
        kept_now,
        attempt_line,
      );
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
  let on = song_image_audit_picture_on(attempt_line, strip, on_click);
  html_style_padding(on, "4px 12px");
  html_cursor_pointer(on);
  let keep = html_button(strip, "keep", keep_click);
  html_style_padding(keep, "4px 10px");
  html_style_font_size(keep, "12px");
  html_cursor_pointer(keep);
  song_image_audit_picture_redraw(
    attempts,
    shown,
    key,
    picture,
    kept_now,
    attempt_line,
  );
  return picture;
}
