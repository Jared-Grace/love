import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_prod_apps_unshipped } from "./firebase_prod_apps_unshipped.mjs";
import { firebase_prod_app_hashes_stale_is } from "./firebase_prod_app_hashes_stale_is.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export async function firebase_prod_hashes_stale_apps() {
  "The apps that read as needing to be argued about before a sending, but only because the written note of what is being served for them has fallen behind what is actually being served";
  "Whether an app would change on the next sending is decided by comparing what is waiting on disk against a note of what is served. That note is a copy of something that lives at the other end of a wire, so it goes wrong quietly and by itself, and an app it has gone wrong about is indistinguishable from an app somebody genuinely has to judge. The two cost wildly different things to put right - a few minutes of reading the wire for all of them at once, against a quarter of an hour of gates each and sometimes at a commit that no longer exists - so telling them apart before anybody starts is the whole of this";
  "Measured 2026-08-26: a sending was refused naming sixteen apps. The note held an entry for every one of them, so nothing was missing; each entry simply listed pieces the site had long since stopped serving. Reading them off the wire again shrank the note by half and left exactly one app genuinely changing. Sixteen apps' worth of unaccounted-for was one file that had fallen behind";
  "Only the apps that read as changing are asked about, so this costs nothing at all when nothing is waiting, and costs one reading of the wire for each app that is about to cost a quarter of an hour of gates. What is spent is in proportion to what is being blamed";
  "How many were asked about travels out beside the answer, because naming nobody is what this says on a good day and also what it says on a day when what is waiting could not be worked out at all. The count is the only part of the answer that can tell those apart";
  "An app that cannot be read from the wire is left out rather than named. There is nothing live under that name to have fallen behind, and it is also what makes this harmless off the network: every reading fails, nobody is named, and the answer is that nothing is known to have fallen behind rather than that everything is broken";
  arguments_assert(arguments, 0);
  let unshipped = await firebase_prod_apps_unshipped();
  let offenders = [];
  for (let app_name of unshipped) {
    async function lambda() {
      let stale = await firebase_prod_app_hashes_stale_is(app_name);
      return stale;
    }
    let answered = await catch_null_async(lambda);
    let unreadable = null_is(answered);
    let readable = not(unreadable);
    if (readable) {
      if (answered) {
        list_add(offenders, app_name);
      }
    }
  }
  let r = {
    walked: unshipped.length,
    offenders,
  };
  return r;
}
