import { qa_promoted_unbuilt_is } from "./qa_promoted_unbuilt_is.mjs";
import { qa_promoted_public_copy_is } from "./qa_promoted_public_copy_is.mjs";
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
  "Two further kinds are no offender at all. An app somebody has started and not yet built is the first of them: every piece under its name is empty, so there is nothing written there for a judgement to be about, and a page with no bytes in it puts nothing on the internet that anything links to. Refusing it would mean one app being worked on holds every sending for as long as the work lasts";
  "The other is why the first of the three is asked twice. A kept copy of an app already being served was never built out of anything - it is what was public, copied, so that the next build of that app can replace it without the page people were sent going off the internet - so no commit can be named for it and none ever will be. Held to the same question it never stops failing, and because a sending puts out the whole folder at once, one such copy standing there refuses every sending for good. What it can show instead is that its pieces ARE the public ones, which is asked next door";
  "Nothing here ever judges a commit. Judging one takes about a quarter of an hour, and a check that could quietly cost that is a check nobody can afford to put in front of a sending. A commit nobody has judged is counted as an offender rather than judged on the spot - which is also the right way round to be wrong, holding a sending rather than letting one by";
  "The pieces on disk are compared against the note rather than trusted to still match it, because the note is written once and the folder it describes is shared by all of us. A later build, a hand edit, or a stale file left behind all leave the note saying something that has stopped being true";
  let app_names = await firebase_prod_apps_unshipped();
  let promoted = await qa_promoted();
  let known = await qa_commit_named();
  let offenders = [];
  for (let app_name of app_names) {
    ("an app somebody has started and not yet built is not a build waiting to go out. every piece sitting under its name is empty, so there is no code and no writing in it for a judgement to be about - and what a sending would put out is a page with nothing in it, which nothing anywhere links to. held to the question instead it never stops failing, so one app being worked on refuses every sending for as long as somebody is working on it");
    let unbuilt = await qa_promoted_unbuilt_is(app_name);
    if (unbuilt) {
      continue;
    }
    let note = property_get_or_null(promoted, app_name);
    let unwritten = null_is(note);
    if (unwritten) {
      ("a kept copy of an app that is already being served has no commit to name, because it was copied out of what was public rather than built out of anything - so before calling a set of pieces unaccounted for, ask whether it accounts for itself by being what is already out there");
      let kept = await qa_promoted_public_copy_is(app_name);
      if (kept) {
        continue;
      }
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
