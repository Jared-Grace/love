import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_prod_hashes_stale_apps } from "./firebase_prod_hashes_stale_apps.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function firebase_prod_hashes_stale_gate_run() {
  "Gate: no app may read as needing to be argued about before a sending merely because the note of what is being served for it has fallen behind the wire.";
  "The note is a copy of something that lives at the other end of a wire, so it goes wrong quietly and by itself, and every app it has gone wrong about then reads exactly like an app somebody has to spend a quarter of an hour judging. That disguise is what this is here to strip.";
  "Written because it had already happened. Measured 2026-08-26: a sending was refused naming sixteen apps, every one of them innocent, and three of them naming commits a history rewrite had already destroyed - so no amount of judging could ever have cleared those three, and the expensive route was not merely wrong but impossible. Reading the wire again put all sixteen right in a few minutes, once anybody knew that was the thing to reach for.";
  "Measured against nothing rather than against a ratchet. There is nothing here to grandfather: a note that disagrees with the wire is not a fault the repo has to be walked out of, it is a file one command rewrites.";
  "Held here rather than in front of a sending, so the fact arrives before anybody has staged a build and decided what the day is for, instead of at the moment they are trying to send one.";
  "On an ordinary day this asks about nobody and never touches the wire, because nothing is waiting to change. It spends a reading only on apps that are already about to be blamed.";
  arguments_assert(arguments, 0);
  let found = await firebase_prod_hashes_stale_apps();
  let walked = property_get(found, "walked");
  let offenders = property_get(found, "offenders");
  let said =
    "this app reads as one that would change on the next sending, but what it is serving right now is not what the note beside it says - so the note is what is wrong, not the app. Read what every app is serving off the wire again, a few minutes for all of them at once, with ";
  let right = fn_name("firebase_prod_hashes_write_all");
  let hint = text_combine(said, right);
  let r = list_empty_is_assert_walked_generic(walked, offenders, hint);
  return r;
}
