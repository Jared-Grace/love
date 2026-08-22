import { arguments_assert } from "./arguments_assert.mjs";
import { webpack_watch_bundle_stale_is } from "./webpack_watch_bundle_stale_is.mjs";
export async function webpack_watch_schedule_if_stale(
  ad,
  a_name_of,
  build_schedule,
) {
  arguments_assert(arguments, 3);
  let stale = await webpack_watch_bundle_stale_is(ad, a_name_of);
  if (stale) {
    let a_name = a_name_of(ad);
    build_schedule(a_name);
  }
}
