import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { firebase_deploy_bypass_unchaged_assert_confirm } from "./firebase_deploy_bypass_unchaged_assert_confirm.mjs";
import { firebase_deploy_bypass_unchanged } from "./firebase_deploy_bypass_unchanged.mjs";
import { firebase_deploy_locked_message } from "./firebase_deploy_locked_message.mjs";
import { firebase_prod_app_unchanged_assert } from "./firebase_prod_app_unchanged_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { lock_error } from "./lock_error.mjs";
import { qa_promoted_unjudged } from "./qa_promoted_unjudged.mjs";
export async function qa_promoted_publish() {
  "Sends out everything waiting in the folder the sending reads from, once every app standing there has been accounted for";
  "The sending was never about one app. It puts out the whole folder, so it is the same act whether one app was put there or five, and naming it after the one app somebody happened to come to send hid that. Split out here, it can be paid for once by a run that prepares several - which is where the saving is, because the upload walks the whole folder and the lock is held for the machine";
  "Nothing here judges a commit and nothing here builds. Whoever calls this has already put the pieces where the sending reads from; what is left is to check that every app standing there can account for itself, and then to send";
  "Sending puts out every app waiting in the folder, not the one somebody came for, so the others have to be accounted for before anything goes. Each of them either already matches what is being served - in which case it changes nothing and was argued about when it was sent - or it was built out of a named commit that was judged sound for it. Anything else is somebody's unfinished work about to be published under this run's name";
  "This asks nothing of the whole repo and judges no commit, so it costs about a second and cannot drift into the fourteen-minute question this whole path exists to avoid";
  "It belongs to this way of sending and not to the one that gates the whole tree first. That one has already asked whether everything standing in the folder is sound, which is a different warrant for the same conclusion - and asking this of it as well would refuse a build it had every right to send";
  let unaccounted = await qa_promoted_unjudged();
  list_empty_is_assert_json(unaccounted, unaccounted);
  async function lambda() {
    let app_names = apps_frozen_names();
    await list_map_unordered_async(
      app_names,
      firebase_prod_app_unchanged_assert,
    );
    let confirm = firebase_deploy_bypass_unchaged_assert_confirm();
    let stdout = await firebase_deploy_bypass_unchanged(confirm);
    return stdout;
  }
  let message = firebase_deploy_locked_message();
  let lock_name = fn_name("firebase_deploy");
  let published = await lock_error(
    lock_name,
    lambda,
    qa_promoted_publish.name,
    message,
  );
  return published;
}
