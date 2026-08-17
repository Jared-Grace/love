import { g_game_plants_whole_plant } from "./g_game_plants_whole_plant.mjs";
import { g_game_plants_whole_spare } from "./g_game_plants_whole_spare.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_game_plants_whole(next, days_total) {
  "Every plant of a whole game, each one whole, together filling exactly the days of preaching there are.";
  "Plants are drawn at the size they mean to be until one of them would not fit in the days that are left. That one is not made at all - the days it would have taken are handed back to the plants that already exist, a day at a time round the whole game.";
  "Nothing here is a remainder, and that is the change. The leftover used to be given to whichever plant happened to be last, which made one plant of every game a runt or a stretched one for a reason nobody playing could see. Spreading it means every plant is the size it asked for and no single plant carries the arithmetic.";
  "Extra days are days the arcs did not need, so a plant that receives them holds the same people a little longer. That lowers the leader's SHARE of the days rather than the leader's turns, which is the harmless direction - a floor of half the days is a long way below where these land.";
  "Shared out in PROPORTION to how long each plant already is, and the whole days go first with what is left over landing on the longest. A day each all round was tried and fell hardest on the small early plants, which have the fewest days to dilute: a nine-day plant taking two spare days dropped its leader from three days in four to three in five, while a twenty-three-day plant hardly noticed. Proportion means the plants with room take the days, which is where the room is.";
  let s = g_generation_settings();
  let r = g_game_plants_whole_spare(days_total, s, next);
  let plants = g_game_plants_whole_plant(r, s);
  return plants;
}
