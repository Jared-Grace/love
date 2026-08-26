import { arguments_assert } from "./arguments_assert.mjs";
import { qa_promoted } from "./qa_promoted.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { firebase_prod_hashes } from "./firebase_prod_hashes.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function firebase_prod_hashes_unlooked() {
  "The apps that were built and staged for sending but that nobody has ever written down what is being served for - so what is live under those names is unknown rather than different";
  "Whether an app would change on the next sending is decided by comparing what is waiting against a written note of what is served, and an app missing from that note answers the same as an app that differs. Those are two facts jammed into one answer and the thing to do about each is opposite: one wants somebody to judge a build, the other wants somebody to spend a few minutes looking at the wire. Measured 2026-08-26: a sending was refused naming sixteen apps needing judgement, all sixteen of them merely unlooked-at, and three named commits a history rewrite had already destroyed - so the expensive route was not only wrong but impossible, and the whole of it was one note nobody had brought up to date";
  "An app with nothing written about where its pieces came from is left out. Nobody has built it here and nobody has sent it, so there is nothing live under that name to look at, and naming it would make every app somebody starts read as a defect";
  "Nothing here goes near a wire. Both sides are files, so this costs two reads and can stand in front of a sending or inside a gate without being the thing that makes either slow";
  arguments_assert(arguments, 0);
  let promoted = await qa_promoted();
  let app_names = object_property_names(promoted);
  let noted = await firebase_prod_hashes();
  let unlooked = [];
  for (let app_name of app_names) {
    let served = property_get_or_null(noted, app_name);
    let never = null_is(served);
    if (never) {
      list_add(unlooked, app_name);
    }
  }
  return unlooked;
}
