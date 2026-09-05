import { list_concat_property } from "./list_concat_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
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
  ("Tiles are EVERY band of the block a person may stand on: the pavement, the gaps between");
  ("the houses, the grass, the drives across it and the road. That is not a widening of the");
  ("question, it is the same question asked of a block that grew. It used to be pavement and");
  ("gaps because those were the only ground there was; the block now has two rows of lawn and");
  ("two of road running its whole length, all of them walkable, and a count that stopped at");
  ("the kerb would report a street more than twice as full as it is.");
  ("What may be stood on is read off the WORLD by the stepping test below, so a band named");
  ("here that turned out to be solid would show up as people unable to move rather than as a");
  ("bigger number. The two halves of this answer are checked against each other by that.");
  let npcs = property_get(world, "npcs");
  let blocks = property_get(world, "blocks");
  function block_tiles(block) {
    let sidewalk = property_get(block, "sidewalk");
    let with_alleys = list_concat_property(sidewalk, block, "alleys");
    let both = list_concat_property(with_alleys, block, "yard");
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
