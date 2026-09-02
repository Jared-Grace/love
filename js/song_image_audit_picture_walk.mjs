import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function song_image_audit_picture_walk(attempts, shown, redraw) {
  arguments_assert(arguments, 3);
  ("$plain attempts");
  ("$plain shown");
  ("Which attempt the audit page is looking at, and the three presses that move it - a step back, a step on, and a jump to a number somebody typed. Whichever way it moves, the page is asked to draw the attempt it landed on.");
  ("WHICH ONE IS BEING LOOKED AT IS KEPT HERE AND NOWHERE ELSE. Three presses and a keep all move or read it, and while it sat beside the drawing every one of them was free to move it a different way. Kept here it is written in one place, and the page learns where it landed the only way anything else does - by being told.");
  ("THE STEPS STOP AT EACH END INSTEAD OF WRAPPING ROUND, so a couplet with one attempt shows two dead arrows rather than two that appear to do something and change nothing.");
  ("A NUMBER THAT NAMES NO ATTEMPT MOVES NOTHING. The box can be typed into freely, so most of what arrives is half a number on the way to being a whole one, and refusing quietly is what lets somebody type at all.");
  ("A JUMP IS TO AN ATTEMPT'S OWN NUMBER AND NOT TO ITS PLACE IN THE ROW. That number is the name of the file it came from and the number written in the table as kept, so it is the one somebody reads off the screen and types back - the place in the row is looked up from it here.");
  let shown_at = shown;
  function moved(next) {
    shown_at = next;
    redraw(shown_at);
  }
  function step(by) {
    let next = shown_at + by;
    let inside =
      greater_than_equal(next, 0) && less_than(next, attempts.length);
    if (inside) {
      moved(next);
    }
  }
  function jump(text) {
    let wanted = Number(text);
    let known_attempt = list_includes(attempts, wanted);
    if (known_attempt) {
      let next = list_index_of(attempts, wanted);
      moved(next);
    }
  }
  function back_click() {
    step(-1);
  }
  function on_click() {
    step(1);
  }
  function shown_get() {
    return shown_at;
  }
  let walking = {
    jump,
    back_click,
    on_click,
    shown_get,
  };
  return walking;
}
