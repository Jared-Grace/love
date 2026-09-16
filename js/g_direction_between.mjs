import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_direction_between(a, b) {
  arguments_assert(arguments, 2);
  ("The facing half way between two directions at right angles to one another: south and");
  ("west give south-west.");
  ("It exists because a person can be doing two things at once with their body, and until");
  ("now the game could only say one of them. Somebody standing at a kerb about to cross");
  ("SOUTH who looks WEST up the lane is facing both - and asked for either one alone they");
  ("either turn their back on the road they are about to walk into, or fail to look up it.");
  ("The half-way facing is the one that says what they are actually doing: still pointed at");
  ("the crossing, head turned up the lane.");
  ("The upright one is named FIRST, because that is how the pictures are named. There is a");
  ("south-west.png and there is no west-south.png, so the order here is not a choice about");
  ("how to read a pair of directions - it is the spelling the art already uses, and the two");
  ("have to agree or the picture is simply missing.");
  ("The two are assumed to be at right angles, and nothing here checks it. A pair that is");
  ("not - south and north, or south and south - names a picture that was never drawn, which");
  ("shows up as a character that fails to load rather than as a wrong answer quietly");
  ("returned. That is the better of the two failures and it is why this does not guess.");
  let upright = ["north", "south"];
  let a_upright = list_includes(upright, a);
  let first = b;
  let second = a;
  if (a_upright) {
    first = a;
    second = b;
  }
  let name = text_combine_multiple([first, "-", second]);
  return name;
}
