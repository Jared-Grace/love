import { firebase_prod_app_live_sent_for_names } from "./firebase_prod_app_live_sent_for_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { firebase_prod_asset_disk_hash_or_null } from "./firebase_prod_asset_disk_hash_or_null.mjs";
import { firebase_prod_asset_disk_write } from "./firebase_prod_asset_disk_write.mjs";
import { firebase_prod_asset_download } from "./firebase_prod_asset_download.mjs";
import { firebase_prod_hashes } from "./firebase_prod_hashes.mjs";
import { folder_app_stale_delete } from "./folder_app_stale_delete.mjs";
import { folder_public } from "./folder_public.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_hash } from "./text_hash.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function firebase_prod_app_public_live_restore(app_name) {
  "$plain app_name";
  "Puts back into the folder that gets sent, for one app, exactly the pieces that app is being served - and takes out the extra pieces nothing is serving. Answers with what was put back, what was already right, and what was taken out.";
  "Afterwards that app is waiting to go out as a copy of what is already out there, and a set of pieces already public can put nothing new on the internet. That is the whole of why anybody wants this: a build that was put in the folder and never sent holds every other app's sending until somebody can account for it, and being what is already live is an account no note has to be written for.";
  "The pieces come down off the wire rather than out of the record of them. The record says which pieces there are and what they came to, which is all that is needed to know what to ask for and what to leave alone - but a record is a copy and the thing being copied here has to be the real one, or what ends up waiting is a build that merely matches a note somebody wrote.";
  "A piece already matching is left alone rather than fetched again, so asking for this twice costs almost nothing and the second answer is the proof the first one worked.";
  "A piece that comes down not matching what was written about it is still written to the disk and named separately in the answer. What is live has moved since anybody looked, and what is live is the thing being copied - so the copy is right and the record is what has fallen behind. Saying which pieces those were is how whoever asked finds out.";
  "The extra pieces go because a build is free to cut a page into scripts of its own choosing, and the ones the served build never named are not overwritten by anything - left there they describe the page as something no build ever made, and they would ride out on the next sending.";
  "An app nothing is being served under gets no answer here beyond the reason. There is nothing to copy, so the pieces waiting under that name cannot be made into a copy of anything, and whoever owns that app has to say what should happen to them.";
  arguments_assert(arguments, 1);
  let served = await firebase_prod_hashes();
  let noted = property_get_or_null(served, app_name);
  let unserved = null_is(noted);
  if (unserved) {
    let none = {
      app: app_name,
      why: "nothing is being served under this name, so there is nothing to put back",
    };
    return none;
  }
  let file_names = await firebase_prod_app_live_sent_for_names(app_name, noted);
  let restored = [];
  let unchanged = [];
  let moved = [];
  for (let file_name of file_names) {
    let want = property_get(noted, file_name);
    let disk = await firebase_prod_asset_disk_hash_or_null(file_name);
    let same = equal(disk, want);
    if (same) {
      list_add(unchanged, file_name);
      continue;
    }
    let text = await firebase_prod_asset_download(file_name);
    await firebase_prod_asset_disk_write(file_name, text);
    let came = text_hash(text);
    let expected = equal(came, want);
    if (not(expected)) {
      list_add(moved, file_name);
    }
    list_add(restored, file_name);
  }
  let public_relative = folder_public();
  let folder = await user_repo_path_combine(public_relative);
  let deleted = await folder_app_stale_delete(folder, app_name, file_names);
  let r = {
    app: app_name,
    restored,
    unchanged,
    moved,
    deleted,
  };
  return r;
}
