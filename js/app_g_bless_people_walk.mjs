import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_person_walk } from "./app_g_bless_person_walk.mjs";
import { app_g_bless_repaint_ms } from "./app_g_bless_repaint_ms.mjs";
export function app_g_bless_people_walk(world, on_move) {
  arguments_assert(arguments, 2);
  ("The crowd goes about its business for as long as the game is open - everybody set");
  ("walking on their own, and the screen drawn again on its own steady beat.");
  ("A world where only the player moves is a world that is waiting for the player, and this");
  ("game is about people who were already living their lives before anybody looked at them.");
  ("Once they walk, standing still and aiming becomes a real choice: who is in front of you");
  ("is not a fact about the map, it is a fact about this moment.");
  ("Nothing here decides when anybody steps. Each person is handed their own walk and then");
  ("this is finished with them, which is what stops the crowd being turn-based: there is no");
  ("moment at which the street takes a step, only people who each take theirs.");
  ("Drawing is the one thing still done for everybody at once, because there is only one");
  ("screen. The caller is told on that beat, because the cone is full of different people");
  ("now - a readout left alone would go on counting a crowd that has walked out of it.");
  let npcs = property_get(world, "npcs");
  function person_walk(person) {
    app_g_bless_person_walk(world, person);
  }
  each(npcs, person_walk);
  let ms = app_g_bless_repaint_ms();
  function repainted() {
    on_move();
    setTimeout(repainted, ms);
  }
  setTimeout(repainted, ms);
}
