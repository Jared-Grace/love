import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_concat } from "./list_concat.mjs";
import { divide_round } from "./divide_round.mjs";
import { multiply } from "./multiply.mjs";
import { app_g_bless_person_step_boxed } from "./app_g_bless_person_step_boxed.mjs";
export function app_g_bless_dev_crowd_counts(world) {
  arguments_assert(arguments, 1);
  ("How crowded the street actually is right now: how many people are out, how many tiles");
  ("they have to stand on, and how many of them have nowhere to step.");
  ("Counted off the LIVE world rather than worked out from the numbers that built it,");
  ("because those two answer different questions. The ladder says how many people a block");
  ("holds; only the world knows how many of them ended up somewhere they can move. Every");
  ("time this has been got wrong it was got wrong in the gap between the two - a share of");
  ("walkers raised on the arithmetic, and a street that stood still when it was looked at.");
  ("Stuck is asked with the game's OWN answer, the same one a person's step asks before");
  ("taking it, so this cannot report a street the game is not actually walking. A second");
  ("reading of what counts as a free tile would agree today and drift the day stepping");
  ("learns a new rule, and it would drift silently, because a wrong number here looks");
  ("exactly like a right one.");
  ("Tiles are the pavement and the alleys together, which is everywhere on a block a person");
  ("may stand. Counting only the pavement would flatter the number by the width of five");
  ("gaps.");
  let npcs = property_get(world, "npcs");
  let blocks = property_get(world, "blocks");
  function block_tiles(block) {
    let sidewalk = property_get(block, "sidewalk");
    let alleys = property_get(block, "alleys");
    let both = list_concat(sidewalk, alleys);
    return both;
  }
  let tiles_each = list_map(blocks, block_tiles);
  let tiles = list_flat(tiles_each);
  function stuck_is(person) {
    let r = app_g_bless_person_step_boxed(world, person);
    let boxed = property_get(r, "boxed");
    return boxed;
  }
  let stuck_people = list_filter(npcs, stuck_is);
  let people = list_size(npcs);
  let room = list_size(tiles);
  let stuck = list_size(stuck_people);
  let number = multiply(people, 100);
  let occupied = divide_round(number, room);
  let number2 = multiply(stuck, 100);
  let held = divide_round(number2, people);
  let counts = {
    people: people,
    room: room,
    stuck: stuck,
    occupied: occupied,
    held: held,
  };
  return counts;
}
