import { apps_all_main_fns } from "./apps_all_main_fns.mjs";
import { apps_all_main_fns_derived } from "./apps_all_main_fns_derived.mjs";
import { list_difference } from "./list_difference.mjs";
export async function apps_all_main_fns_stale() {
  "the two ways the written list of every app can have stopped being true: an app that is here and is not on it, and a name on it that is no longer an app.";
  "both directions are asked because they go wrong for opposite reasons and only one of them is ever noticed. A missing app is invisible - the page gathering all the apps simply does not offer it, and nobody looking at that page can tell that something is absent. A leftover name announces itself the moment somebody follows it.";
  "the answer that decides is the DERIVED one, asked fresh from the pages and the functions on disk. The written list is only ever the thing being judged, never part of the judging.";
  let listed = apps_all_main_fns();
  let derived = await apps_all_main_fns_derived();
  let missing = list_difference(derived, listed);
  let extra = list_difference(listed, derived);
  let r = {
    missing,
    extra,
    derived,
  };
  return r;
}
