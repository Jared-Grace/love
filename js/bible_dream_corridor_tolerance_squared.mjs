import { fn_name } from "./fn_name.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { bible_dream_corridor_width } from "./bible_dream_corridor_width.mjs";
export function bible_dream_corridor_tolerance_squared() {
  "How far a hand may be from the line before it counts as having left it, as a squared distance ready to be compared against a squared gap.";
  "★ IT IS DERIVED FROM THE DRAWN CORRIDOR AND MUST NEVER BE WRITTEN DOWN SEPARATELY. A stroke is drawn wide precisely so a player can see how much room they have before they move, and that promise holds only while the room shown and the room allowed are the same room. Written as its own number the two drift apart at the first change to either, and the corridor quietly starts lying - in one direction it shows room a trace is punished for using, in the other it hides room and a hand that plainly left the line is forgiven.";
  "It is half the width because the width spans both sides of the line and a gap is measured from the line outwards.";
  ("It comes back squared, because every gap it will be compared against arrives squared from ",
    fn_name("bible_dream_point_gap_squared"),
    ", which leaves the root off on purpose.");
  let top = bible_dream_corridor_width();
  let half_width = divide(top, 2);
  let p = multiply(half_width, half_width);
  return p;
}
