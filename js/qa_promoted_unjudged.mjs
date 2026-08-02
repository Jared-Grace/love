import { firebase_prod_app_disk_hashes } from "./firebase_prod_app_disk_hashes.mjs";
import { firebase_prod_apps_unshipped } from "./firebase_prod_apps_unshipped.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { qa_app_commit_gate_run_at } from "./qa_app_commit_gate_run_at.mjs";
import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_promoted } from "./qa_promoted.mjs";
export async function qa_promoted_unjudged() {
  "The apps whose waiting pieces would go out on the next sending without anybody having shown them to be sound, each one with what is missing";
  "Sending puts out the whole folder at once, so whoever sends sends every app that is waiting, not only the one they came to send. An app somebody built by hand or built out of a commit nobody judged sits there looking exactly like one that was judged, and rides out on the next sending under somebody else's name. This is the question that tells those apart, asked about all of them at once";
  "Only the apps that would actually change are asked about. An app whose waiting pieces are already the thing being served changes nothing by going out again, and demanding an account of it would hold every sending hostage to work that was finished and argued about long ago";
  "Three ways to be an offender and they are kept apart, because the thing to do about each is different: nothing was written down about where the pieces came from, or something was but the pieces have since changed, or the pieces did come out of a named commit and that commit was not sound for this app";
  "Nothing here ever judges a commit. Judging one takes about a quarter of an hour, and a check that could quietly cost that is a check nobody can afford to put in front of a sending. A commit nobody has judged is counted as an offender rather than judged on the spot - which is also the right way round to be wrong, holding a sending rather than letting one by";
  "The pieces on disk are compared against the note rather than trusted to still match it, because the note is written once and the folder it describes is shared by all of us. A later build, a hand edit, or a stale file left behind all leave the note saying something that has stopped being true";
  let app_names = await firebase_prod_apps_unshipped();
  let promoted = await qa_promoted();
  let known = await qa_commit_named();
  let offenders = [];
  for (let app_name of app_names) {
    let note = property_get_or_null(promoted, app_name);
    let unwritten = null_is(note);
    if (unwritten) {
      list_add(offenders, {
        app: app_name,
        why: "nothing says which commit these pieces were built out of",
      });
      continue;
    }
    let commit = property_get(note, "commit");
    let written = property_get(note, "hashes");
    let disk = await firebase_prod_app_disk_hashes(app_name);
    let same = json_equal(written, disk);
    if (not(same)) {
      list_add(offenders, {
        app: app_name,
        commit,
        why: "the pieces have changed since that was written down",
      });
      continue;
    }
    let remembered = property_get_or_null(known, commit);
    let unjudged = null_is(remembered);
    if (unjudged) {
      list_add(offenders, {
        app: app_name,
        commit,
        why: "nobody has judged the commit these pieces came out of",
      });
      continue;
    }
    let at = await qa_app_commit_gate_run_at(app_name, commit);
    let deployable = property_get(at, "deployable");
    if (not(deployable)) {
      list_add(offenders, {
        app: app_name,
        commit,
        why: "that commit was judged and is not sound for this app",
        blocking: property_get(at, "blocking"),
      });
    }
  }
  return offenders;
}
