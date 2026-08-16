import { app_shared_animation_duration_quick } from "./app_shared_animation_duration_quick.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { sleep } from "./sleep.mjs";
export async function app_shared_animation_sleep_quick() {
  arguments_assert(arguments, 0);
  ("wait out the short while this app tidies up in, so whatever comes next begins where the tidying finished rather than on top of it");
  ("The twin of the plain wait, over the short while rather than the whole one. Asked for by name for the same reason: the while and the waiting for it have to be the same number, and there is nothing to notice when they stop being.");
  let duration = app_shared_animation_duration_quick();
  await sleep(duration);
}
