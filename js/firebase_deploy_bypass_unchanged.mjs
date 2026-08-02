import { firebase_prod_hashes_write_from_disk } from "./firebase_prod_hashes_write_from_disk.mjs";
import { firebase_deploy_bypass_unchaged_assert_confirm } from "./firebase_deploy_bypass_unchaged_assert_confirm.mjs";
import { equal_assert } from "./equal_assert.mjs";
import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { each_async } from "./each_async.mjs";
import { firebase_prod_app_backup_auto } from "./firebase_prod_app_backup_auto.mjs";
import { firebase_deploy_generic } from "./firebase_deploy_generic.mjs";
export async function firebase_deploy_bypass_unchanged(confirm) {
  let expected = firebase_deploy_bypass_unchaged_assert_confirm();
  equal_assert(confirm, expected);
  let app_names = apps_frozen_names();
  await each_async(app_names, firebase_prod_app_backup_auto);
  let words_after = [];
  let stdout = await firebase_deploy_generic(words_after);
  ("What was waiting has now gone out, so the note of what is being served is written from what was waiting. Every way of sending arrives here, which is why the noting lives here rather than beside any one of them - a note kept up to date by only some of the ways to send is worse than none, because it looks current");
  ("Reading it back off the wire instead would take about seven minutes and be less sure, since a piece just sent takes a moment to appear everywhere it is served from");
  ("A failure here throws after the sending has already happened, which is safe in the direction that matters: the note stays behind, every app then reads as still needing to be sent, and the next sending is held rather than let by. Running the writer again is the whole repair");
  await firebase_prod_hashes_write_from_disk();
  return stdout;
}
