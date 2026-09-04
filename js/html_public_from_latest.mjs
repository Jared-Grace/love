import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_frozen_assert } from "./app_shared_frozen_assert.mjs";
import { folder_web_latest } from "./folder_web_latest.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { folder_public } from "./folder_public.mjs";
import { folder_app_replace_all } from "./folder_app_replace_all.mjs";
import { firebase_public_app_expected_write } from "./firebase_public_app_expected_write.mjs";
export async function html_public_from_latest(search) {
  "$plain search";
  "Moves an app from the stage it was checked at into the one people see, every piece of it together, refusing on an app that is frozen, and writes down that these are the bytes that were approved.";
  "Putting the pieces in place and clearing away what the build before left is one named move now, and why it asks the folder which pieces there are, and why it clears away only after it has put in place, are written there rather than here. Both this and the unlinked-address sibling beside it spelled those two lines and that reasoning out separately.";
  "The writing down happens here rather than in whoever asked, because this is the one place every way of putting an app in front of people goes through, and putting it there is the whole of approving it - the folder people see holds what is ready to be sent, and anything not ready belongs at the stage before it. Written in the caller instead it was written by one of the three ways and not by the other two, so an app shipped through the full pipeline landed in that folder with the note still describing the build before it. Measured 2026-08-27: twenty of thirty-four apps were named as unapproved by a sending that had nothing wrong with them, and the one thing that had actually happened was this line sitting one level up.";
  "It comes after the taking away, so what is written down is the folder as it will be walked rather than the folder with the last build's leftovers still in it.";
  let info = await app_shared_name_search_info(search);
  let a_name = property_get(info, "a_name");
  app_shared_frozen_assert(a_name);
  let repo_name = property_get(info, "repo_name");
  let latest_relative = folder_web_latest();
  let from_folder = repo_path_combine(repo_name, latest_relative);
  let public_relative = folder_public();
  let to_folder = repo_path_combine(repo_name, public_relative);
  let copied = await folder_app_replace_all(from_folder, to_folder, a_name);
  await firebase_public_app_expected_write(a_name);
  return copied;
}
