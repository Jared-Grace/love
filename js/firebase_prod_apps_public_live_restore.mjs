import { ai_git_noted } from "./ai_git_noted.mjs";
import { firebase_prod_app_public_live_restore } from "./firebase_prod_app_public_live_restore.mjs";
import { firebase_prod_apps_unshipped } from "./firebase_prod_apps_unshipped.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { list_add } from "./list_add.mjs";
export async function firebase_prod_apps_public_live_restore() {
  "Puts back into the folder that gets sent, for every app whose waiting build is not the thing being served, exactly the pieces that app is being served - so that sending the site puts out what is already out there and nothing else. Answers with what was done to each and with what would still change afterwards.";
  "It finds its own set rather than being handed one, so it cannot drift from the apps that are actually holding a sending up, and asking it again is all that is needed after somebody stages one more build.";
  "The set is asked for a second time at the end, and that second answer is the finding. Anything still in it is an app that could not be made into a copy of what is live - nothing is being served under that name, or what is live moved while this was running - and those are the ones a person still has to decide about.";
  "Each app is committed as it lands, under its own name and its own argument, because these are that many separate changes rather than one change spread out. Committing them together would leave the whole run wearing one bare word, and with many hands editing this same folder at once a sweep that arrives in the middle would take half of them anyway.";
  "What was already noted as changed is committed first, under the bare word it deserves, so that the first app restored cannot file somebody else's unfinished work under its name.";
  await ai_git_noted();
  let app_names = await firebase_prod_apps_unshipped();
  let done = [];
  for (let app_name of app_names) {
    let one = await function_call_commit(
      firebase_prod_app_public_live_restore,
      [app_name],
    );
    list_add(done, one);
  }
  let left = await firebase_prod_apps_unshipped();
  let r = {
    done,
    left,
  };
  return r;
}
