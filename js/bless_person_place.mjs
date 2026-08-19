import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { g_npc_id } from "./g_npc_id.mjs";
export function bless_person_place(person, rung) {
  arguments_assert(arguments, 2);
  ("Which place a prayer at this rung would cover, given who it is being prayed over.");
  ("This is the whole of what a rung DOES. The player always performs the same act - look");
  ("at somebody and pray - and the rung only decides how far out from them it carries. So");
  ("a blessing is never aimed at a place; it lands on a person and the place comes along");
  ("because it is theirs.");
  ("At the lowest rung the place is the person themselves, which is why their own id is");
  ("the answer rather than a missing one. That keeps every rung the same shape - a name of");
  ("something that can be marked as blessed - so nothing above has to special-case the");
  ("bottom.");
  let alone = equal(rung, "person");
  if (alone) {
    let who = g_npc_id(person);
    return who;
  }
  let places = property_get(person, "places");
  let place = property_get(places, rung);
  return place;
}
