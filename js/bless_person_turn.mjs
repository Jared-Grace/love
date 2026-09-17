import { bless_person_turn_ready } from "./bless_person_turn_ready.mjs";
import { not } from "./not.mjs";
import { g_direction_opposite } from "./g_direction_opposite.mjs";
import { list_without } from "./list_without.mjs";
import { bless_person_face } from "./bless_person_face.mjs";
import { g_direction_sides } from "./g_direction_sides.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function bless_person_turn(person) {
  arguments_assert(arguments, 1);
  ("Somebody looks another way without going anywhere - the whole of what standing about");
  ("outside your own front door consists of.");
  ("A person who is not walking had nothing to do until now. Standing still was the");
  ("ABSENCE of a step, so a still person was a picture that had stopped, and a street where");
  ("three quarters of everybody lives at a door was three quarters statues. Yet standing");
  ("about is not nothing: somebody outside their house looks up the road, then at the door,");
  ("then back up the road. That is the whole behaviour, and it needs no ground.");
  ("It is also the only thing a crowded pavement can afford. Every step is a claim on a");
  ("tile and a walker with nowhere to go turns round and bounces; a turn asks the map for");
  ("nothing at all, so any number of people can do it at once in a street that is full.");
  ("They are never turned to the way they are already facing. A quarter of the draws would");
  ("otherwise be a person visibly doing nothing at the moment they were meant to be seen");
  ("doing something, and the wait after it would read as the game having stalled.");
  ("The four facings are the ones the pictures exist for, and the same four a step could");
  ("have taken - so a turn is a step's worth of intention with the step withheld, which is");
  ("what makes turning and walking read as one person rather than two behaviours.");
  let facing = property_get(person, "direction");
  ("A look round is a QUARTER turn, to one side or the other, and never a turn about. A person who spins to face the way they came, and then again a moment later, twirls on the spot; somebody standing about glances left and right. Turning right round is kept for giving up on a walk, where it happens once and means something.");
  ("And a look never turns their back on where they were going. Two quarter turns the same way are a turn about, and four are a spin: picking either side at random kept turning the same way half the time, and a person looking about their doorstep went round and round. So from a side they look back along their way, and from their way they look to a side - left, ahead, right, ahead.");
  let heading = property_get(person, "heading");
  let away = g_direction_opposite(heading);
  let sides = g_direction_sides(facing);
  let others = list_without(sides, away);
  let direction = list_random_item(others);
  ("Too soon after their last turn, they hold the way they are looking instead - a look held a little longer, never a quick look back.");
  let ready = bless_person_turn_ready(person, direction);
  if (not(ready)) {
    return;
  }
  bless_person_face(person, direction);
}
