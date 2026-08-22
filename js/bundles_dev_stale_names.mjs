import { fn_name } from "./fn_name.mjs";
import { app_shared_name_dev_bundle_path } from "./app_shared_name_dev_bundle_path.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { date_ms_to_hours } from "./date_ms_to_hours.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { subtract } from "./subtract.mjs";
import { apps_names_dev } from "./apps_names_dev.mjs";
import { property_get } from "./property_get.mjs";
import { webpack_watch_app_deps_get } from "./webpack_watch_app_deps_get.mjs";
import { null_is } from "./null_is.mjs";
import { webpack_watch_bundle_stale_is } from "./webpack_watch_bundle_stale_is.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function bundles_dev_stale_names() {
  "Every dev app whose bundle is older than something it is built from, which is the set of apps whose size on disk is a reading about the past.";
  "It answers the question the step gate cannot ask for itself: that gate weighs what is on disk, so a bundle nobody has rebuilt hides its growth until somebody does, and the growth then lands on whoever happened to rebuild it. This says which readings are stale before the weighing rather than after.";
  "It is a report and not a gate on purpose. Ten people edit shared code here all day, so at any instant some bundle is behind its sources and a gate against zero would be red almost always - it would be measuring how recently somebody saved a file. The thing that keeps this at zero is the watching daemon rather than a refusal, and what a report is for is telling whether that daemon is in fact doing it.";
  "The judging is borrowed whole from the watcher rather than written again here - the same reachable set, the same comparison - because two answers to is this bundle stale would be two chances to disagree about what an app is built from.";
  "Each name comes with how many hours old its bundle file is, because that is the reading that tells churn from a backlog and the bare list does not: an app six hours behind is a peer who saved a file, an app eight days behind is one nothing has rebuilt since. A null there is no reading at all, and the word beside it says why there is none.";
  "Being named here does not mean the bundle would come out different - it means its sources moved. The eight-day-old one this was first pointed at rebuilt to the same bytes. So this narrows where to look and never says on its own that anything is wrong.";
  "Each name comes with a word for WHY it is here, because the first reading of this list put three unlike things under one heading and a person had to say which was which. An app behind its sources, an app with no bundle built, and a page in the dev folder that is no app at all are three different pieces of news, and only the first is about staleness.";
  "★ THIS ASKED A QUESTION THE DATE ON A BUNDLE COULD NOT ANSWER, AND SO NAMED HEALTHY APPS FOREVER. A compiler that finds it would write the bytes already there leaves the file alone, so a bundle rebuilt and found correct kept the date it was last different - and a rebuild, the one thing a person would try, was exactly what could not change it. Twenty apps sat here for that reason and the watcher was doing its job the whole time.";
  ("It is fixed where the date is made rather than here: ",
    fn_name("webpack_config"),
    " writes every time now, so a date means the last build that confirmed the bundle. A name stays on this list until that app has been built once since, which is why the list empties gradually rather than at once.");
  let names = await apps_names_dev();
  function a_name_of(ad) {
    let a_name = property_get(ad, "a_name");
    return a_name;
  }
  let now = date_now_milliseconds();
  async function aged(a_name, why) {
    let bundle = await app_shared_name_dev_bundle_path(a_name);
    let no_app = null_is(bundle);
    if (no_app) {
      let page_only = {
        name: a_name,
        hours: null,
        why: "no app of that name",
      };
      return page_only;
    }
    let built_ms = await path_modified_ms(bundle);
    let never = null_is(built_ms);
    if (never) {
      let unbuilt = {
        name: a_name,
        hours: null,
        why: "never built",
      };
      return unbuilt;
    }
    let since = subtract(now, built_ms);
    let value = date_ms_to_hours(since);
    let hours = number_round_places(value, 1);
    let old = {
      name: a_name,
      hours,
      why,
    };
    return old;
  }
  async function stale_of(a_name) {
    let ad = await webpack_watch_app_deps_get(a_name);
    let unreadable = null_is(ad);
    if (unreadable) {
      let unknown = await aged(a_name, "sources could not be read");
      return unknown;
    }
    let stale = await webpack_watch_bundle_stale_is(ad, a_name_of);
    if (stale) {
      let behind = await aged(a_name, "behind its sources");
      return behind;
    }
    return null;
  }
  let flags = await list_map_async(names, stale_of);
  let stale_names = list_filter(flags, null_not_is);
  return stale_names;
}
