import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { qa_app_commit_deployable_remembered } from "./qa_app_commit_deployable_remembered.mjs";
import { qa_app_commit_promote_judged } from "./qa_app_commit_promote_judged.mjs";
import { qa_promoted_publish } from "./qa_promoted_publish.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
export async function qa_apps_commit_deploy_remembered(
  searches_comma,
  commit_floor,
) {
  "$plain searches_comma";
  "$plain commit_floor";
  "Sends out several apps together, each built from the newest commit already judged sound for it, and pays for the sending once instead of once each";
  "Sending puts out the whole folder in one act, so sending three apps one after another walks that whole folder three times, takes the machine-wide lock three times, and waits behind everybody else's sending three times. Prepared together and sent once, the walking and the waiting are paid for once. Measured the day this was written: one app's sending found eight hundred and sixty seven files standing in the folder and uploaded forty of them, and three apps would have found the same eight hundred and sixty seven three times";
  "An app with nothing judged to ship is written down and the next one is begun, rather than the refusal ending the run. Whether a commit was found sound is a fact about that one app, and letting it stop the others holds back apps for a reason that has nothing to do with them";
  "Nothing is sent when nothing could be prepared. The sending would otherwise go out over a folder this run did not change, which is somebody else's sending wearing this one's name";
  "The accounting for every app standing in the folder happens inside the sending rather than here, so the apps this run prepared are checked by exactly the same question as the ones it did not - and preparing several before sending cannot become a way of slipping one past";
  let searches = text_split_comma(searches_comma);
  let prepared = [];
  let skipped = [];
  for (let search of searches) {
    let found = await qa_app_commit_deployable_remembered(search, commit_floor);
    let chosen = property_get(found, "chosen");
    if (null_is(chosen)) {
      list_add(skipped, {
        app: search,
        found,
      });
      continue;
    }
    let one = await qa_app_commit_promote_judged(search, chosen);
    list_add(prepared, one);
  }
  let nothing = list_empty_is(prepared);
  if (nothing) {
    let none = {
      deployed: false,
      prepared,
      skipped,
    };
    return none;
  }
  let published = await qa_promoted_publish();
  let r = {
    deployed: true,
    prepared,
    skipped,
    published,
  };
  return r;
}
