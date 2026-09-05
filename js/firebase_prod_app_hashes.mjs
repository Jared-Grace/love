import { firebase_prod_app_asset_file_names } from "./firebase_prod_app_asset_file_names.mjs";
import { firebase_prod_asset_download_or_null } from "./firebase_prod_asset_download_or_null.mjs";
import { firebase_prod_hashes_generic } from "./firebase_prod_hashes_generic.mjs";
export async function firebase_prod_app_hashes(app_name) {
  "$plain app_name";
  "what one app is serving right now, as one short word standing for each file it serves";
  "read from what is live rather than from what is on disk on purpose - a record of what is being served that was written from what somebody meant to serve can be wrong and sure of itself at the same time, and the direction it would be wrong in is the one that lets a deploy through unexamined";
  "so this is both how such a record is first made and how a record that fell behind is put right - there is no state it cannot recover from, because what is live is the thing being asked and never a copy of it";
  "★ ONLY THE CONTENTS COME OFF THE WIRE, AND THE LIST OF NAMES DOES NOT. The names are the ones sitting in the folder that is about to go live, so what is really being asked is what the far end is serving under each name this build would send. That is the right question for deciding whether sending again would change anything, and it is not the same question as what the far end holds - a piece the live build has that this one no longer does is not looked at by anybody here, and would not show up as a difference.";
  let file_names = await firebase_prod_app_asset_file_names(app_name);
  ("a piece the far end says it is serving no copy of is written into the answer as not served rather than ending the reading of this app - that is the very shape a page falling behind takes, so a reading that gave up on it would be blind to the one thing it is watching for");
  let read = firebase_prod_asset_download_or_null;
  let hashes = await firebase_prod_hashes_generic(file_names, read);
  return hashes;
}
