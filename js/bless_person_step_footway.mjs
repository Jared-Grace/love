import { list_empty_is } from "./list_empty_is.mjs";
import { and } from "./and.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function bless_person_step_footway(world, person, open) {
  arguments_assert(arguments, 3);
  ("The ways out of a tile that do not step into the road, out of the ways that were open.");
  ("Nobody out on the street steps into the ROAD. Cars drive along it, and a pavement that");
  ("people wander off is a pavement that stops reading as one - the whole point of a kerb is");
  ("that the crowd stays on one side of it.");
  ("Taken off the choices rather than off the map, because the road is real ground and the");
  ("player walks over it. It is the one way between the two streets, so making it solid would");
  ("cut the world in half. What is refused here is a decision an NPC makes, and the player");
  ("makes none of them.");
  ("Walkers were already held to the footway by their leash and residents were not: a front");
  ("door is four rows from the kerb and a resident may go six, so it was the people who live");
  ("here who were standing in the traffic.");
  ("The refusal is NEVER DROPPED, and that is a change from what this used to do. It used to");
  ("hand back every way out when all of them were road, on the reasoning that somebody with");
  ("no other way is otherwise walled in forever. That reasoning was sound and its conclusion");
  ("was still wrong: a rule with a way round it is a preference, and what was wanted was a");
  ("rule. A preference is exactly what put residents in the traffic in the first place.");
  ("What replaces it is narrower and cannot be reached by anybody standing where they should");
  ("be. SOMEBODY ALREADY ON THE ROAD is let off it, because the one thing worse than a person");
  ("in the road is a person stuck in the road; a crowd parted by the player, or a person");
  ("placed there before this rule existed, has to be able to get away from the cars. Standing");
  ("on the pavement, no such escape exists, so the kerb is absolute in the only direction");
  ("that matters - nobody CROSSES it.");
  ("The escape is a way OFF the road and not a way along it, and that is the whole of the");
  ("difference. It used to hand back every way out, which left somebody standing in the");
  ("traffic free to pick another road square - so a person who arrived there strolled up the");
  ("middle of the street for as long as the road ran, and read exactly like a crowd that");
  ("ignores the kerb. The pavement squares are still preferred first; only when NOTHING off");
  ("the road is open at all is a road square taken, which is the case the escape was written");
  ("for and the only one it now covers.");
  ("The cost is that somebody who ends up on the far pavement stays on that side of the");
  ("street. They are not stuck: their leash lets go once home is out of reach, and they walk");
  ("the side they are on. It reads as a person who lives over the road, which is a smaller");
  ("wrong than a person who strolls up the middle of it, and it is the one the traffic can");
  ("survive.");
  ("The CROSSING is refused along with the rest of the road, even though the player may use");
  ("it. Cars give way to the player and to nobody else, so a person of the crowd stepping out");
  ("onto the painted squares would be walked through by the next car along. The paint is a");
  ("promise the drivers only keep to one person, and only that person may take it up.");
  let roads = property_get(world, "roads");
  function road_not_is(neighbor) {
    let tile = property_get(neighbor, "neighbor");
    let key = g_coordinates_key(tile);
    let off = property_exists_not(roads, key);
    return off;
  }
  let footway = list_filter(open, road_not_is);
  let key_at = g_coordinates_key(person);
  let stranded = property_exists(roads, key_at);
  let walled = list_empty_is(footway);
  let escape = and(stranded, walled);
  if (escape) {
    return open;
  }
  return footway;
}
