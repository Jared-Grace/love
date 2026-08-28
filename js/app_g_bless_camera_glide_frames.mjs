import { app_g_bless_camera_glide_frames_draw } from "./app_g_bless_camera_glide_frames_draw.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
export function app_g_bless_camera_glide_frames(
  container_map,
  player_img_c,
  container,
  focus,
  variable,
  from,
  to,
  token,
) {
  arguments_assert(arguments, 8);
  ("Builds the running of one camera journey: every frame draws the map at a size a little");
  ("further along an eased path from where it started towards where it is going, and moves");
  ("the scrolling box to whatever standing place keeps the same square in the middle at");
  ("that size. It reports once when it has settled.");
  ("The size and the scroll are moved together on the same frame, and that is the whole");
  ("reason this is one loop rather than a resize and a scroll running side by side. Where");
  ("the box has to stand to hold a square in the middle depends on how big the squares are;");
  ("a scroll aimed at an answer worked out before the resize is aimed at where that square");
  ("USED to be, so the picture slides while it zooms and the player sees a camera that");
  ("misses.");
  ("Sliding is off for the whole journey, switched off by the caller. The reason is the");
  ("same one an instant resize has - a person is placed in squares and told to walk to any");
  ("new place, so a size that moves would set the whole street walking - but here it holds");
  ("for hundreds of frames instead of one, which is why the switch is somebody else's to");
  ("throw and not this loop's.");
  ("Eased at both ends, quick through the middle, which is the same curve a plain scroll");
  ("here uses. A camera that starts and stops at full speed reads as a cut.");
  ("The box carries a token saying which journey is the current one. A journey that finds a");
  ("different token there has been overtaken - by a later camera move, or by an ordinary");
  ("scroll, both of which claim the token the same way - so it stops where it stands rather");
  ("than dragging the box back to its own destination.");
  ("The settling is reported exactly once whatever happens: a flag makes finishing safe to");
  ("reach twice, and a timer set a little past the intended length reaches it anyway. A");
  ("browser hands out no frames at all to a tab nobody is looking at, so without that timer");
  ("a journey begun and then hidden would never report and whoever was waiting on it would");
  ("wait for good.");
  let container_e = html_component_element_get(container);
  let duration = 460;
  let start = null;
  function animate(settled) {
    let done = false;
    function finish() {
      if (done) {
        return;
      }
      done = true;
      settled();
    }
    function step(now) {
      let cancelled = not_equal(container_e.scroll_animation_token, token);
      if (cancelled) {
        finish();
        return;
      }
      if (equal(start, null)) {
        start = now;
      }
      let gone = subtract(now, start);
      let fraction = divide(gone, duration);
      if (greater_than(fraction, 1)) {
        fraction = 1;
      }
      let squared = multiply(fraction, fraction);
      let twice = multiply(2, fraction);
      let rest = subtract(3, twice);
      let ease = multiply(squared, rest);
      let span = subtract(to, from);
      let right = multiply(span, ease);
      let value = add(from, right);
      app_g_bless_camera_glide_frames_draw(
        value,
        container_map,
        variable,
        focus,
        player_img_c,
        container,
        container_e,
      );
      if (less_than(fraction, 1)) {
        requestAnimationFrame(step);
        return;
      }
      finish();
    }
    requestAnimationFrame(step);
    setTimeout(finish, duration + 120);
  }
  return animate;
}
