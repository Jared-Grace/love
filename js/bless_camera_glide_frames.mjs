import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply } from "./multiply.mjs";
import { number_part_way } from "./number_part_way.mjs";
import { bless_camera_glide_frames_draw } from "./bless_camera_glide_frames_draw.mjs";
import { less_than } from "./less_than.mjs";
export function bless_camera_glide_frames({
  container,
  map_c,
  reach_start,
  reach_end,
  from,
  to,
  token,
}) {
  arguments_assert(arguments, 1);
  ("Builds the running of one camera journey: every frame draws the map at a size a little");
  ("further along an eased path from where it started towards where it is going, shifted to");
  ("whatever place keeps the same square in the middle at that size. It reports once when it");
  ("has settled.");
  ("The size and the shift are worked out together on the same frame, and that is the whole");
  ("reason this is one loop rather than a resize and a scroll running side by side. Where the");
  ("map has to be drawn to hold a square in the middle depends on how big the squares are; a");
  ("move aimed at an answer worked out before the resize is aimed at where that square USED to");
  ("be, so the picture slides while it zooms and the player sees a camera that misses.");
  ("Everything the frames need is worked out ONCE, before the first of them, and handed in.");
  ("The sums are all about where a square sits, and where a square sits is a thing the page");
  ("has to lay the whole street out to answer; asked every frame it cost about twice a frame's");
  ("worth of time on a laptop and the zoom arrived in lurches. Asked once it costs that same");
  ("lay-out once, before anything is moving and where nobody can see it.");
  ("Sliding is ON while this runs, and the street goes on walking and driving underneath it.");
  ("It used to be switched off for the whole journey, back when a frame wrote a new square");
  ("size and every landing on the grid moved with it - a size that moves sets the whole street");
  ("walking to where it already stands. This loop writes no size. It writes one drawn-on scale");
  ("and the squares stay exactly as they were until the caller writes the real size once, at");
  ("the end, which is the only frame that ever needed holding.");
  ("Leaving it off cost the traffic. The cars ask the map whether it is being held and skip");
  ("their step while it is, so a journey that held the street held every car - and the journey");
  ("that matters most is the one a crossing makes, which exists precisely to put the camera");
  ("close on the cars.");
  ("Eased at both ends, quick through the middle, which is the same curve a plain scroll here");
  ("uses. A camera that starts and stops at full speed reads as a cut.");
  ("The pan runs on that same eased fraction as the zoom, from wherever the camera was");
  ("standing when the journey began towards the square it was sent to. Aimed straight at that");
  ("square instead, every frame including the first one would hold it dead centre, so the");
  ("whole journey across the street would be over before the zoom had begun and the player");
  ("would see a cut and then a move.");
  ("The box carries a token saying which journey is the current one. A journey that finds a");
  ("different token there has been overtaken - by a later camera move, or by an ordinary");
  ("scroll, both of which claim the token the same way - so it stops where it stands rather");
  ("than dragging the box back to its own destination.");
  ("The settling is reported exactly once whatever happens: a flag makes finishing safe to");
  ("reach twice, and a timer set a little past the intended length reaches it anyway. A");
  ("browser hands out no frames at all to a tab nobody is looking at, so without that timer a");
  ("journey begun and then hidden would never report and whoever was waiting on it would wait");
  ("for good.");
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
      let value = number_part_way(from, to, ease);
      bless_camera_glide_frames_draw(value, {
        map_c,
        from,
        reach_start,
        reach_end,
        ease,
      });
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
