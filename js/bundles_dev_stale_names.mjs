export async function bundles_dev_stale_names() {
  "Every dev app whose bundle is older than something it is built from, which is the set of apps whose size on disk is a reading about the past.";
  ("It answers the question the step gate cannot ask for itself: that gate weighs what is on disk, so a bundle nobody has rebuilt hides its growth until somebody does, and the growth then lands on whoever happened to rebuild it. This says which readings are stale before the weighing rather than after.");
  ("It is a report and not a gate on purpose. Ten people edit shared code here all day, so at any instant some bundle is behind its sources and a gate against zero would be red almost always - it would be measuring how recently somebody saved a file. The thing that keeps this at zero is the watching daemon rather than a refusal, and what a report is for is telling whether that daemon is in fact doing it.");
  ("The judging is borrowed whole from the watcher rather than written again here - the same reachable set, the same comparison - because two answers to is this bundle stale would be two chances to disagree about what an app is built from.");
  let dev_relative = folder_public_join(app_shared_name_dev_text());
  let names = await apps_names_dev();
  function a_name_of(ad) {
    let a_name = property_get(ad, "a_name");
    return a_name;
  }
  async function stale_of(a_name) {
    let ad = await webpack_watch_app_deps_get(a_name);
    let unreadable = null_is(ad);
    if (unreadable) {
      return a_name;
    }
    let stale = await webpack_watch_bundle_stale_is(
      ad,
      a_name_of,
      dev_relative,
    );
    if (stale) {
      return a_name;
    }
    return null;
  }
  let flags = await list_map_async(names, stale_of);
  let stale_names = list_filter(flags, null_not_is);
  return stale_names;
}
