import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function bless_person_place(person, rung) {
  arguments_assert(arguments, 2);
  ("Which place a prayer at this rung would cover, given who it is being prayed over.");
  ("This is the whole of what a rung DOES. The player always performs the same act - look");
  ("at somebody and pray - and the rung only decides how far out from them it carries. So");
  ("a blessing is never aimed at a place; it lands on a person and the place comes along");
  ("because it is theirs.");
  ("At the lowest rung the answer is the person themselves, and their address carries that");
  ("rung like any other. So every rung has the same shape here - a name of something that");
  ("can be marked as blessed - and this reading needs no case for the bottom.");
  ("It is deliberately not the id their picture is filed under. That id is the tile they");
  ("were first set down on, and a person walks; what belongs in a record of who has been");
  ("prayed for is the one number about them that never moves.");
  let place = property_path_get_2(person, "places", rung);
  return place;
}
