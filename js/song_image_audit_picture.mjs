import { fn_name } from "./fn_name.mjs";
import { song_image_drawn_attempts_known } from "./song_image_drawn_attempts_known.mjs";
import { song_image_audit_picture_attempts } from "./song_image_audit_picture_attempts.mjs";
import { song_image_audit_picture_shown } from "./song_image_audit_picture_shown.mjs";
import { song_image_audit_picture_strip } from "./song_image_audit_picture_strip.mjs";
import { song_image_drawn_url } from "./song_image_drawn_url.mjs";
import { html_img } from "./html_img.mjs";
import { song_image_audit_picture_style } from "./song_image_audit_picture_style.mjs";
import { song_image_audit_picture_kept_now } from "./song_image_audit_picture_kept_now.mjs";
import { song_image_audit_picture_redraw } from "./song_image_audit_picture_redraw.mjs";
import { song_image_audit_picture_walk } from "./song_image_audit_picture_walk.mjs";
import { property_get } from "./property_get.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { api_read } from "./api_read.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { song_image_audit_picture_number } from "./song_image_audit_picture_number.mjs";
import { song_image_text_quiet_line } from "./song_image_text_quiet_line.mjs";
import { song_image_audit_picture_on } from "./song_image_audit_picture_on.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
export function song_image_audit_picture(parent, key, kept) {
  "one couplet's picture with a row of controls above it - an arrow at each side, the attempt's number in a box that can be typed into, and a keep press - so every attempt that was ever drawn for that couplet can be looked at rather than only the one being kept";
  "the number under the picture is the attempt's own number and not a fresh label, because that number is already the name of the file it came from and already the number written in the table as kept. A page that lettered them a to g would be inventing a second name for a thing that has one, and the moment somebody said try b nobody could tell which file they meant.";
  "it opens on the kept attempt rather than on the first, because the kept one is what the film shows and every other one is being offered as an alternative to it. Opening on the first would make the page argue for a picture nobody chose.";
  "the number can be typed into as well as arrowed to, because the arrows are a walk and a couplet with eighty attempts is not walkable. A drawing that was talked about by its number is reached by writing that number, and the box was already on the screen saying it.";
  "keep writes the attempt now on screen into the glosses file, so the choice is made in the one place where both pictures can be seen at once. Reading a number off this page and typing it into the file afterwards is the same choice made from memory, and a misread number there is a wrong picture in the film that nothing catches.";
  "THE THREE THINGS THE REDRAW REWRITES ARE GATHERED ONCE UNDER ONE NAME. They are handed over together at three places, and written out at each of them the same three names took the same eleven lines three times over - a third of everything this function holds, saying nothing that the first of them had not already said. Gathered here they are also gathered where they are read, which is what let the redraw's row of arguments come down to five.";
  "WHICH ATTEMPT IS ON SCREEN IS OWNED NEXT DOOR AND ASKED FOR HERE. The three presses that move it went with it, and what came back is a way of drawing whichever one it has reached. This side is then only the building of the row and the keep, and the walking is a thing that can be read on its own; while the two lived together, every press was free to move the number a different way and only reading all five of them at once said that they did not.";
  ("the picture is moved with ",
    fn_name("html_src_set"),
    " and never by writing to a src property, because everything ",
    fn_name("html_div"),
    " and ",
    fn_name("html_img"),
    " hand back is a wrapped component and not the element itself. Writing picture.src on the wrapper is accepted in silence: the property lands on the wrapper, nothing throws, no gate goes red, and the arrows move the number under the picture while the picture never changes at all - which is exactly how this was found, by a human clicking them.");
  let known = song_image_drawn_attempts_known();
  let attempts = song_image_audit_picture_attempts(key, known, kept);
  let shown = song_image_audit_picture_shown(attempts, kept);
  let strip = song_image_audit_picture_strip(parent);
  let src = song_image_drawn_url(key, attempts[shown]);
  let picture = html_img(parent, src);
  song_image_audit_picture_style(picture);
  let kept_now = song_image_audit_picture_kept_now(strip, kept);
  function redraw(index) {
    song_image_audit_picture_redraw(attempts, index, key, redrawn, kept_now);
  }
  let walking = song_image_audit_picture_walk(attempts, shown, redraw);
  let jump = property_get(walking, "jump");
  let back_click = property_get(walking, "back_click");
  let on_click = property_get(walking, "on_click");
  let shown_get = property_get(walking, "shown_get");
  async function keep_click() {
    let at = shown_get();
    let attempt = attempts[at];
    html_text_set(keep, "keeping");
    let f_name = fn_name("song_image_kept_set");
    await api_read(f_name, [key, attempt]);
    kept_now = attempt;
    html_text_set(keep, "keep");
    redraw(at);
  }
  let back = html_button(strip, "‹", back_click);
  html_style_padding(back, "4px 12px");
  html_cursor_pointer(back);
  let number = song_image_audit_picture_number(strip, jump);
  let attempt_line = song_image_text_quiet_line(strip);
  let redrawn = {
    picture,
    attempt_line,
    number,
  };
  let on = song_image_audit_picture_on(attempt_line, strip, on_click);
  html_style_padding(on, "4px 12px");
  html_cursor_pointer(on);
  let keep = html_button(strip, "keep", keep_click);
  html_style_padding(keep, "4px 10px");
  html_style_font_size(keep, "12px");
  html_cursor_pointer(keep);
  redraw(shown);
  return picture;
}
