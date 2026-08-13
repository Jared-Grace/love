import { list_filter_size } from "./list_filter_size.mjs";
import { g_coordinates_tile } from "./g_coordinates_tile.mjs";
import { g_coordinates_offset } from "./g_coordinates_offset.mjs";
import { g_coordinates_turn } from "./g_coordinates_turn.mjs";
import { g_coordinates_orthogonal } from "./g_coordinates_orthogonal.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { g_coordinates_index } from "./g_coordinates_index.mjs";
import { object_values } from "./object_values.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { each } from "./each.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
export function g_npc_path_clear_places(situation, player, land_index) {
  "where everybody stands and which tile to tap, worked out for where the player is now: the arrangement pointed whichever of the four ways there is most dry land for.";
  "TURNING IS THE WHOLE OF IT. Every arrangement is written facing east, and the player is standing wherever the last thing they did left them - which the first time this ran was the eastern shore, so the row of people and the gold tile alike were asked for out at sea. Nothing failed; the screen simply showed an empty stretch of water with a gold square on it. Turning asks the same shape all four ways and keeps the way that fits.";
  "THE TAP OUTWEIGHS EVERYBODY. A person that cannot be placed costs the arrangement one person, and it still mostly reads; a tap on water is a screen with nothing to do on it. So a way round that keeps the tap on dry land beats any number of extra people.";
  "HEMMED is added after the turning rather than before, because it is the four tiles beside the player and those are the same four whichever way the arrangement points.";
  "Water is dropped rather than moved to dry land. Nobody can stand on it, and these people are only there to be a wall - so water in the arrangement is a wall already, and the arrangement is right without it.";
  let place = g_coordinates_tile(player);
  let offsets = property_get(situation, "people");
  let tap_offset = property_get(situation, "tap");
  function land_is(tile) {
    let key = g_coordinates_key(tile);
    let b = property_exists(land_index, key);
    return b;
  }
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
  let best = tried[0];
  function better_keep(candidate) {
    let score = property_get(candidate, "score");
    let score_best = property_get(best, "score");
    let b = greater_than(score, score_best);
    if (b) {
      best = candidate;
    }
  }
  each(tried, better_keep);
  let asked = property_get(best, "people");
  let tap = property_get(best, "tap");
  let wanted = [];
  list_add_multiple(wanted, asked);
  let hemmed = property_get(situation, "hemmed");
  if (hemmed) {
    let beside = g_coordinates_orthogonal(place);
    list_add_multiple(wanted, beside);
  }
  let tapped = property_get(situation, "tapped");
  if (tapped) {
    ("the tap lands on a PERSON, so that person has to be one of the people standing - the arrangement names their tile twice and the next line makes it one");
    list_add(wanted, tap);
  }
  let dry = list_filter(wanted, land_is);
  ("one tile named twice is asked for once. What it guards against is not a duplicate person: a person's picture and the cross over them are remembered by where they are standing, so a second person arriving on a tile takes over the first one's drawer and the first drags somebody else's picture about from then on");
  let index = g_coordinates_index(dry);
  let people = object_values(index);
  let r = {
    people,
    tap,
  };
  return r;
}
