import { webpack_builds_running_count } from "./webpack_builds_running_count.mjs";
import { greater_than } from "./greater_than.mjs";
import { webpack_watch_building_count } from "./webpack_watch_building_count.mjs";
import { builds_at_once } from "./builds_at_once.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists_equals } from "./property_exists_equals.mjs";
import { property_set } from "./property_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { log } from "./log.mjs";
import { app_shared_dev_build } from "./app_shared_dev_build.mjs";
import { webpack_watch_apps_discover } from "./webpack_watch_apps_discover.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
export async function webpack_watch_build_run(
  a_name,
  building,
  build_schedule,
  deps_refresh,
  app_deps,
  app_deps_get,
) {
  arguments_assert(arguments, 6);
  let busy = property_exists_equals(building, a_name, true);
  if (busy) {
    build_schedule(a_name);
    return;
  }
  ("★ A PIECE EVERY APP USES STARTS A BUILD IN EVERY APP AT THE SAME MOMENT. The flag above holds one app back from building twice over, and nothing held the apps back from each other - so editing one of the eighty four pieces all thirty apps share began thirty builds in the same instant, on fourteen processors that several people are already sharing. Counted with ",
    fn_name("webpack_watch_rebuild_fan_out"),
    " rather than guessed at.");
  ("Waiting is asked for in the way the line above already asks for it: put the app back in the queue and let the pause run again. So nothing new decides when a build happens, and an app that waits is retried rather than dropped - which is what makes this only a change to how many run together and not to what gets built.");
  ("★ THE ONE THING THIS MAKES WORSE, SAID PLAINLY. A build that hangs never clears its flag, so it holds a place here for as long as it hangs, and enough of them stop every app from building rather than only their own. That is not made up: on the 21st of August four builds were found stuck at full power for between six and seven hours, and their four apps had been quietly out of date the whole time.");
  ("It was still worth doing, and the reason is which way each failure is noticed. Before, a stuck build cost four apps their freshness and nobody saw it for most of a day; now it costs everybody theirs and somebody sees it within minutes. A hang is a fault to be found rather than a state to be lived in, so the loud version is the better one - but the hang itself is unexplained and is the thing that actually wants fixing.");
  ("★ THE MACHINE IS ASKED BEFORE THE FLAGS ARE, AND THE ORDER IS THE WHOLE SAFETY OF IT. Asking the machine takes a moment, and anything awaited is a moment in which another app can reach this same line. Reading the flags afterwards, with nothing awaited between that reading and the setting below, means two apps starting together cannot both be told there is room. Swap these two lines and they can.");
  ("The larger of the two is used rather than either alone, because each is blind where the other sees. The flags know about a build this program has just decided on and not yet started, which nothing on the machine can show yet; the machine knows about builds somebody started by hand, which no flag here was ever set for. Taking the larger is not their sum, so a machine running both kinds at once is still counted a little low - said plainly because it is a limit on starting rather than a lock.");
  let elsewhere = await webpack_builds_running_count();
  let mine = webpack_watch_building_count(building);
  let running = mine;
  let more = greater_than(elsewhere, mine);
  if (more) {
    running = elsewhere;
  }
  let b = builds_at_once();
  let room = less_than(running, b);
  if (not(room)) {
    build_schedule(a_name);
    return;
  }
  property_set(building, a_name, true);
  async function lambda() {
    fn_name("webpack_watch");
    log(webpack_watch_build_run.name, {
      rebuild: a_name,
    });
    await app_shared_dev_build(a_name);
    await deps_refresh(a_name);
    await webpack_watch_apps_discover(app_deps, app_deps_get, build_schedule);
  }
  try {
    await catch_log_async(lambda);
  } finally {
    property_set(building, a_name, false);
  }
}
