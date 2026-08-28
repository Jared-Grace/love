import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { bundles_dev_stale_names } from "./bundles_dev_stale_names.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_name_dev_bundle_path } from "./app_shared_name_dev_bundle_path.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { app_shared_build } from "./app_shared_build.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { property_get_name } from "./property_get_name.mjs";
export async function bundles_dev_stale_build() {
  arguments_assert(arguments, 0);
  ("Builds every app whose bundle is behind its sources, exactly those, and asks the same question again afterwards to say whether it took.");
  ("The set is found here rather than handed in, because a list typed by a person is a reading of some earlier minute and ten people edit shared code here all day - by the time the list is acted on it names apps that are level and misses ones that have since fallen behind.");
  ("Asking again at the end is the only honest way to report it worked. A build that writes the bytes already there looks exactly like one that changed everything, so the second reading, not the first, is the evidence.");
  ("Each app is committed the moment it is built rather than all of them at the end, because a run over several webpack builds lasts long enough for somebody else's sweep to take the files first, and what that sweep leaves behind says nothing about which command made them.");
  ("A name with no bundle to build is passed over rather than attempted. The same list carries pages in the dev folder that are no app at all, and those have nowhere to put a bundle; the reading that decides is the bundle path itself, not the word beside the name, so a reworded reason cannot quietly turn this into a builder of nothing.");
  await ai_git_noted();
  let stale = await bundles_dev_stale_names();
  let built = [];
  for (let entry of stale) {
    let name = property_get(entry, "name");
    let bundle = await app_shared_name_dev_bundle_path(name);
    let some = null_not_is(bundle);
    if (some) {
      let args = [name];
      await function_call_commit(app_shared_build, args);
      list_add(built, name);
    }
  }
  let left = await bundles_dev_stale_names();
  let names = list_map(left, property_get_name);
  let r = {
    built,
    remaining: names,
  };
  return r;
}
