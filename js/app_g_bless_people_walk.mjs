import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_people_step } from "./app_g_bless_people_step.mjs";
import { app_g_bless_people_step_seconds } from "./app_g_bless_people_step_seconds.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
export async function app_g_bless_people_walk(world, on_move) {
  arguments_assert(arguments, 2);
  ("The crowd goes about its business for as long as the game is open - a step, a pause, and");
  ("a step again.");
  ("A world where only the player moves is a world that is waiting for the player, and this");
  ("game is about people who were already living their lives before anybody looked at them.");
  ("Once they walk, standing still and aiming becomes a real choice: who is in front of you");
  ("is not a fact about the map, it is a fact about this moment.");
  ("The caller is told after every step, because the cone is full of different people now.");
  ("A readout left alone would go on counting a crowd that has walked out of it.");
  ("This never finishes on purpose. Start it and let it run; there is nothing to wait for,");
  ("and awaiting it would hold up whoever asked for a street forever.");
  let seconds = app_g_bless_people_step_seconds();
  while (true) {
    await sleep_seconds(seconds);
    app_g_bless_people_step(world);
    on_move();
  }
}
