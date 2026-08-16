import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { sleep } from "./sleep.mjs";
export async function app_shared_animation_sleep() {
  arguments_assert(arguments, 0);
  ("wait out the one while this app takes to move or colour anything, so whatever comes next begins where the last change finished rather than on top of it");
  ("Asked for by name rather than by counting the same while out at each place that waits one, because the while and the waiting for it have to be the same number and there is nothing to notice when they stop being.");
  let duration = app_shared_animation_duration();
  await sleep(duration);
}
