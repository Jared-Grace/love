import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_hero_evil_pace_ms } from "./app_g_hero_evil_pace_ms.mjs";
import { app_g_hero_evil_pause_ms } from "./app_g_hero_evil_pause_ms.mjs";
import { bless_person_crossing_clear } from "./bless_person_crossing_clear.mjs";
import { bless_world_on_foot } from "./bless_world_on_foot.mjs";
import { g_world_without_npcs } from "./g_world_without_npcs.mjs";
import { app_g_hero_hunt_path } from "./app_g_hero_hunt_path.mjs";
import { null_is } from "./null_is.mjs";
import { list_second } from "./list_second.mjs";
import { g_distance_0 } from "./g_distance_0.mjs";
import { bless_person_tile_is } from "./bless_person_tile_is.mjs";
import { app_g_hero_kill } from "./app_g_hero_kill.mjs";
import { bless_person_crossing_set } from "./bless_person_crossing_set.mjs";
import { app_shared_game_npc_move } from "./app_shared_game_npc_move.mjs";
import { app_g_bless_person_slide } from "./app_g_bless_person_slide.mjs";
export async function app_g_hero_evil_step(hero, evil) {
  arguments_assert(arguments, 2);
  ("One step of the hunt, handing back how long to wait before the next.");
  ("The nearest person the hunter can reach is the one hunted, asked again every step, because the crowd keeps walking and whoever was nearest a moment ago may not be now.");
  ("The way there is worked out over the street with the crowd taken out of it, and only the next square of it is used. If somebody is standing on that square, they are the one killed - the hunter does not step round a person, it goes through them. Standing beside the one hunted is the same case, because their own square is the next one on the way.");
  ("The player is never killed. A hunter whose next square is the player's simply waits.");
  let world = property_get(hero, "world");
  let npcs = property_get(world, "npcs");
  let player = property_get(world, "player");
  let pace = app_g_hero_evil_pace_ms();
  let pause = app_g_hero_evil_pause_ms();
  bless_person_crossing_clear(evil);
  let on_foot = bless_world_on_foot(world);
  let alone = g_world_without_npcs(on_foot);
  let path = app_g_hero_hunt_path(alone, npcs, evil);
  if (null_is(path)) {
    return pace;
  }
  let to = list_second(path);
  let x = property_get(to, "x");
  let y = property_get(to, "y");
  let blocked = g_distance_0(player, to);
  if (blocked) {
    return pace;
  }
  function standing_is(person) {
    let here = bless_person_tile_is(person, x, y);
    return here;
  }
  let blockers = list_filter(npcs, standing_is);
  if (list_empty_not_is(blockers)) {
    ("Two people can answer for one square at once - one standing on it and one stepping across onto it - so the first of them is the one killed.");
    let blocker = list_first(blockers);
    await app_g_hero_kill(hero, evil, blocker);
    return pause;
  }
  bless_person_crossing_set(evil);
  app_shared_game_npc_move(evil, to, 0);
  let seconds = divide(pace, 1000);
  app_g_bless_person_slide(evil, seconds);
  return pace;
}
