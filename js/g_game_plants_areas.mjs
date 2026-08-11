import { g_generation_settings } from "./g_generation_settings.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { property_get } from "./property_get.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_add } from "./list_add.mjs";
import { math_min } from "./math_min.mjs";
import { floor } from "./floor.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
export function g_game_plants_areas(plants) {
  "Which rung of the escalation each plant sits on, and whether the Sender is still alongside the player there.";
  "An area is a RUNG of the escalation, spread over the plants there turn out to be - it is NOT a book. Book length is the player's choice and has nothing to do with pacing: a selection can put one plant in Hebrews and eleven in Romans, so a rung would sit still for eleven plants and then move three times in three. Worse, a player who picks one book would get one area and never see the ladder at all.";
  "How many areas there are is therefore the GAME's answer, not the selection's. There are only so many rungs to climb, and a short selection climbs fewer of them rather than squeezing them all in - one plant cannot be a whole escalation.";
  "This used to lay the finished plants along the preaching supply to find out which chapters each had covered, because plants were sized by their casts and did not know. They know now - a plant is cut out of the chapters before anybody is put in it - so all that is left here is the rung.";
  "The Sender goes with the player through the first of the areas. That is what the early plants being under the elder floor MEANS: the player is not failing to raise up an elder, the church already has one standing in it, and the player is the one being formed. Elders get appointed on the way back through - Acts 14:23 - so the floor is a claim about the plants the player founds alone.";
  "A plant that ran out of people is UNFINISHED rather than failed, and the elder floor is not asked of it. Both supplies are sized to each other so both run low together, and the last plant of a game is the remainder of each - counting that as a plant with no elder in it would report the end of the content as a fault in the player.";
  let s = g_generation_settings();
  let areas = math_min(s.areas_maximum, plants.length);
  let placed = [];
  let index_plant = -1;
  for (let plant of plants) {
    index_plant = index_plant + 1;
    let along = multiply_divide(index_plant, areas, plants.length);
    let area = floor(along) + 1;
    let sender_present = greater_than_equal(s.sender_areas, area);
    let leader_short = property_get(plant, "leader_short");
    let unfinished = property_get(plant, "unfinished");
    let alone = not(sender_present);
    let finished = not(unfinished);
    let elder_short = leader_short && alone && finished;
    let added = {
      area,
      areas,
      sender_present,
      elder_short,
    };
    let both = {};
    object_merge(both, plant);
    object_merge(both, added);
    list_add(placed, both);
  }
  return placed;
}
