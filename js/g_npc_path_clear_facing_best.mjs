import { g_coordinates_offset } from "./g_coordinates_offset.mjs";
import { g_coordinates_turn } from "./g_coordinates_turn.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { list_map } from "./list_map.mjs";
import { list_max_by } from "./list_max_by.mjs";
import { add } from "./add.mjs";
export function g_npc_path_clear_facing_best(situation, place, land_is) {
  "ask one arrangement all four ways round from where the player stands, and hand back the way that fits the map best: its tiles, and the tile to tap.";
  "TURNING IS THE WHOLE OF IT. Every arrangement is written facing east, and the player is standing wherever the last thing they did left them - which the first time this ran was the eastern shore, so the row of people and the gold tile alike were asked for out at sea. Nothing failed; the screen simply showed an empty stretch of water with a gold square on it. Turning asks the same shape all four ways and keeps the way that fits.";
  "THE TAP OUTWEIGHS EVERYBODY. A person that cannot be placed costs the arrangement one person, and it still mostly reads; a tap on water is a screen with nothing to do on it. So a way round that keeps the tap on dry land beats any number of extra people.";
  "no turn at all is asked FIRST, and equal ways keep the earlier one - so an arrangement that already fits where it was written is left pointing the way it was written.";
  let offsets = property_get(situation, "people");
  let tap_offset = property_get(situation, "tap");
  function facing(turns) {
    function tile_of(offset) {
      let turned = g_coordinates_turn(offset, turns);
      let tile = g_coordinates_offset(place, turned);
      return tile;
    }
    let placed = list_map(offsets, tile_of);
    let tap_tile = tile_of(tap_offset);
    let standing = list_filter_size(placed, land_is);
    let tappable = land_is(tap_tile);
    ("a whole arrangement is worth less than the one tile there is anything to do on, so being able to tap at all is worth more than every person in it put together");
    let worth = 0;
    if (tappable) {
      worth = 1000;
    }
    let score = add(standing, worth);
    let attempt = {
      people: placed,
      tap: tap_tile,
      score,
    };
    return attempt;
  }
  let turnings = [0, 1, 2, 3];
  let tried = list_map(turnings, facing);
  function scored(attempt) {
    let score = property_get(attempt, "score");
    return score;
  }
  let best = list_max_by(tried, scored);
  return best;
}
