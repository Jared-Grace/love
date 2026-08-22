import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { multiply_floor } from "./multiply_floor.mjs";
export function bless_still_turns(fraction) {
  arguments_assert(arguments, 1);
  ("How many times somebody looks a different way before they go back to walking, drawn");
  ("from a number between nought and one.");
  ("Never fewer than two, because one is indistinguishable from a step that went wrong.");
  ("A person who faced east and immediately carried on reads as somebody who changed their");
  ("mind about a direction, which is a thing the walking already does; two or more in a row");
  ("with waits between them reads as somebody who has stopped, and stopping is the whole");
  ("point of the stretch.");
  ("Never more than five either. Standing about is background: it is what the street is");
  ("doing while the player looks at somebody else, and past a certain length the player");
  ("comes back to find the same person still turning on the spot, which stops looking like");
  ("a life and starts looking like a person who is stuck.");
  ("The count is drawn afresh every time somebody stops rather than being a thing they are,");
  ("so the same person is brief on one doorstep and lingering on the next - which is what");
  ("stops the crowd resolving into a set of fixed rhythms the eye can learn.");
  let extra = multiply_floor(fraction, 4);
  let turns = add(2, extra);
  return turns;
}
