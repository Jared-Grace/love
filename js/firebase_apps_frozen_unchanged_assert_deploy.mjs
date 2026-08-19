import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_deploy_bypass_unchaged_assert_confirm } from "./firebase_deploy_bypass_unchaged_assert_confirm.mjs";
import { firebase_deploy_bypass_unchanged } from "./firebase_deploy_bypass_unchanged.mjs";
import { firebase_prod_app_unchanged_assert } from "./firebase_prod_app_unchanged_assert.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function firebase_apps_frozen_unchanged_assert_deploy() {
  "Proves that every app which must not move is still exactly what prod is serving, and only then sends out the whole folder that is waiting.";
  "The proof has to come before the sending rather than after it. A sending puts out the entire folder and not the one app somebody came for, so a frozen app that has quietly changed goes out along with everything else; asked afterwards the same question is worthless, because the answer arrives when the change is already live.";
  "It stands on its own name because it was written out twice, once in the path that builds something new and sends it and once in the path that only sends what is already waiting. Two spellings of the check that stops a frozen app being republished is the exact shape where somebody adds an app to one of them and not to the other, and nothing goes wrong until the day it does.";
  arguments_assert(arguments, 0);
  let app_names = apps_frozen_names();
  await list_map_unordered_async(app_names, firebase_prod_app_unchanged_assert);
  let confirm = firebase_deploy_bypass_unchaged_assert_confirm();
  let published = await firebase_deploy_bypass_unchanged(confirm);
  return published;
}
