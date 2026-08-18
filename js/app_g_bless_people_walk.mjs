import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { app_g_bless_people_step } from "./app_g_bless_people_step.mjs";
import { app_g_bless_people_step_seconds } from "./app_g_bless_people_step_seconds.mjs";
export function app_g_bless_people_walk(world, on_move) {
  arguments_assert(arguments, 2);
  ("The crowd goes about its business for as long as the game is open - a step, a pause, and");
  ("a step again.");
  ("A world where only the player moves is a world that is waiting for the player, and this");
  ("game is about people who were already living their lives before anybody looked at them.");
  ("Once they walk, standing still and aiming becomes a real choice: who is in front of you");
  ("is not a fact about the map, it is a fact about this moment.");
  ("The caller is told after every step, because the cone is full of different people now. A");
  ("readout left alone would go on counting a crowd that has walked out of it.");
  ("Each pause is asked for as the one before it ends, rather than by a loop that waits.");
  ("Written as a loop this would be a run that never finishes, and every caller of it would");
  ("either have to wait for a street to stop walking - which it never does - or leave a");
  ("promise hanging that nothing will ever answer. Asking for the next step from inside the");
  ("last one hands control back each time, so starting the crowd is a thing that finishes.");
  let seconds = app_g_bless_people_step_seconds();
  let ms = multiply(seconds, 1000);
  function stepped() {
    app_g_bless_people_step(world);
    on_move();
    setTimeout(stepped, ms);
  }
  setTimeout(stepped, ms);
}
