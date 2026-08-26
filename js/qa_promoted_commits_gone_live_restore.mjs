import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { qa_promoted } from "./qa_promoted.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { firebase_prod_apps_unshipped } from "./firebase_prod_apps_unshipped.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { git_commit_exists_is } from "./git_commit_exists_is.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { firebase_prod_app_public_live_restore } from "./firebase_prod_app_public_live_restore.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_promoted_commits_gone_live_restore() {
  "Puts back into the folder that gets sent, for every waiting app whose note names a commit that is no longer here, exactly the pieces that app is being served - and says which apps those were and which of them still do not match what is live";
  "An app waiting to go out has to account for itself before anything can be sent, and the account it offers is the commit it was built out of. Where that commit has been rewritten away there is nothing left to judge and there never will be, so that app holds up the sending of every app standing beside it for good. Being what is already live is the one account left that needs no commit at all";
  "It finds its own set, and the set is the exact one that is stuck: the note is read for what each app claims, and each claim is asked of the store. Handed a list instead it would be somebody's reading of the note from earlier, and the whole reason this is needed is that nobody remembers which names went dead when the history was rewritten";
  "The apps that already match what is being served are left out, because putting back what is already there changes nothing and the answer would then name apps that were never in anybody's way";
  "Its neighbour that restores everything unshipped is deliberately not what this is. That one cannot be told which, so it takes down the very build somebody came to send along with the ones in the way - this takes down only what can never be judged, and leaves a build with a living commit to be judged on its merits";
  "Each app is committed as it lands, under its own name and its own argument, because these are that many separate changes rather than one change spread out. What was already noted as changed is committed first, under the bare word it deserves, so the first app restored cannot file somebody else's unfinished work under its name";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let promoted = await qa_promoted();
  let app_names = object_property_names(promoted);
  let unshipped = await firebase_prod_apps_unshipped();
  let done = [];
  let restored = [];
  for (let app_name of app_names) {
    let waiting = list_includes(unshipped, app_name);
    if (not(waiting)) {
      continue;
    }
    let note = property_get(promoted, app_name);
    let commit = property_get(note, "commit");
    let alive = await git_commit_exists_is(commit);
    if (alive) {
      continue;
    }
    let one = await function_call_commit(
      firebase_prod_app_public_live_restore,
      [app_name],
    );
    list_add(restored, app_name);
    list_add(done, {
      app: app_name,
      commit,
      one,
    });
  }
  let left_all = await firebase_prod_apps_unshipped();
  let left = [];
  for (let app_name of restored) {
    let still = list_includes(left_all, app_name);
    if (still) {
      list_add(left, app_name);
    }
  }
  let r = {
    done,
    left,
  };
  return r;
}
