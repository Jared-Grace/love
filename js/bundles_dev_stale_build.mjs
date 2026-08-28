import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { bundles_dev_stale_names } from "./bundles_dev_stale_names.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_name_dev_bundle_path } from "./app_shared_name_dev_bundle_path.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { app_shared_build } from "./app_shared_build.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export async function bundles_dev_stale_build() {
  arguments_assert(arguments, 0);
  ("Builds every app whose bundle is behind its sources, exactly those, and says of each one whether the build actually wrote it.");
  ("The set is found here rather than handed in, because a list typed by a person is a reading of some earlier minute and ten people edit shared code here all day. Measured 2026-08-28: a list read forty minutes before this ran named six apps, of which four had gone level on their own and three others had since fallen behind - so acting on the typed list would have built four apps that needed nothing and missed three that did.");
  ("★ THE PROOF IS TAKEN PER APP, AT THE MOMENT THAT APP IS FINISHED, AND NEVER BY ASKING THE WHOLE QUESTION AGAIN AT THE END. The repair pattern this is shaped after closes by re-running its finder, which is sound there because a missing import stays missing until somebody adds it. A bundle does not hold still: this was first written that way, and the closing reading named two of the three apps it had just built, because a neighbour saved a source file while webpack was running. Nothing had failed. A whole-set reading taken afterwards mixes what this run did with what everybody else did meanwhile and cannot tell them apart, so on this trunk it would have reported failure on every run that succeeded.");
  ("What is asked instead is the one thing that is only about this run: the clock is read just before an app is built, and the date on the bundle afterwards has to be later than that. It is the compiler's own writing that makes this answer, and it answers even when the bytes come out identical, because the config writes the file every time on purpose.");
  ("A bundle with no date at all counts as unproven rather than as built, since a comparison against nothing is not evidence of anything.");
  ("Each app is committed the moment it is built rather than all of them at the end, because a run over several webpack builds lasts long enough for somebody else's sweep to take the files first, and what that sweep leaves behind says nothing about which command made them.");
  ("A name with no bundle to build is passed over and does not appear in the answer. The same list carries pages in the dev folder that are no app at all, and those have nowhere to put a bundle; the reading that decides is the bundle path itself, not the word beside the name, so a reworded reason cannot quietly turn this into a builder of nothing.");
  await ai_git_noted();
  let stale = await bundles_dev_stale_names();
  let built = [];
  for (let entry of stale) {
    let name = property_get(entry, "name");
    let bundle = await app_shared_name_dev_bundle_path(name);
    let some = null_not_is(bundle);
    if (some) {
      let started = date_now_milliseconds();
      let args = [name];
      await function_call_commit(app_shared_build, args);
      let written_ms = await path_modified_ms(bundle);
      let wrote = greater_than(written_ms, started);
      let one = {
        name,
        wrote,
      };
      list_add(built, one);
    }
  }
  return built;
}
