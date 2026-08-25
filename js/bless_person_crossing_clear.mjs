import { arguments_assert } from "./arguments_assert.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
export function bless_person_crossing_clear(person) {
  arguments_assert(arguments, 1);
  ("This person's step is over - they are on one square again, and the square they were");
  ("crossing off is forgotten.");
  ("Said at the START of what they do next rather than at the end of the step itself,");
  ("because a step is a slide with a length and nothing tells this game when one has");
  ("finished. A person's next turn comes after exactly the length of their own step, so the");
  ("moment they are asked what to do again is the moment they have arrived - and that one");
  ("place covers every way of doing nothing there is: standing about, looking around, boxed");
  ("in with nowhere to go. Cleared by the mover instead, only the people who MOVED would");
  ("ever forget, and somebody who stopped walking would go on claiming the square they left");
  ("for as long as they stood there.");
  ("Nothing to forget is the ordinary answer, not a fault - most of a person's turns begin");
  ("with them already standing still.");
  property_delete_if_exists(person, "crossing");
}
