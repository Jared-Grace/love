import { property_equals } from "./property_equals.mjs";
import { git_commit_imports_missing } from "./git_commit_imports_missing.mjs";
import { property_get } from "./property_get.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { qa_app_commit_promote_judged } from "./qa_app_commit_promote_judged.mjs";
import { qa_promoted_publish } from "./qa_promoted_publish.mjs";
export async function qa_app_commit_deploy(search, commit) {
  "$plain search";
  "$plain commit";
  "Sends out one app, built out of the one commit you name, and only if that commit is whole and was found sound for that app";
  "This is the last link of a chain somebody else had already built every other piece of: one asks whether a commit is sound FOR THIS APP, one builds the app out of that commit alone and puts the very pieces it made where the sending reads from. What was missing was a way to then send, because the existing sending asks the whole repo whether it is well first - a question about every other app, which cannot be answered yes while ten of us are committing to one folder";
  "Measured the day this was written: thirteen sendings of one app in an afternoon, every one of them refused, not one of them refused for the change being sent. The whole-repo asking takes about fourteen minutes and the repo moved a hundred and eighty five commits in the two and three quarter hours after the last moment it was all well at once. Something red appears inside the window faster than the window closes, so the answer, when it finally comes, is about a repo that has already gone";
  "Whether the commit is WHOLE is asked first and costs under two seconds. A commit can hold a file that imports a file the same commit has not got - each file fine on its own, the fault only in what they say about each other - and there is no building anything out of such a commit. Asked here, that is a refusal in the first breath, naming the files. Left unasked, it was a refusal half an hour in, which said the app was broken when the app was fine: ten sendings died that way before anybody thought to look at the commit rather than at the app.";
  "It is asked before the soundness rather than after because it is a hundred times cheaper and because a torn commit makes the soundness answer meaningless anyway - a gate cannot be run in a copy that will not load.";
  "The asking happens BEFORE anything is put where the sending reads from, which is the other way round from the older path. There, a refused sending had already overwritten what was waiting to go, so being told no still changed what would go out next time somebody said yes";
  "Nothing about frozen apps is relaxed. The sending puts out the whole folder it reads from, not this app alone, so every app that must not move is still checked and still kept a copy of first. Narrowing WHICH app is judged for soundness is not the same as narrowing which apps are protected, and only the first of those was narrowed here";
  "The two halves it is made of are each their own name now, because a run that sends several apps wants the first half once per app and the second half once for all of them. Written out again here they would be a second copy of the order they go in, and the two copies would answer differently the first time either was corrected";
  let torn = await git_commit_imports_missing(commit);
  let whole = property_equals(torn, "count", 0);
  true_is_assert_json(whole, torn);
  let promoted = await qa_app_commit_promote_judged(search, commit);
  let published = await qa_promoted_publish();
  let r = {
    app: property_get(promoted, "app"),
    commit,
    hashes: property_get(promoted, "hashes"),
    published,
  };
  return r;
}
