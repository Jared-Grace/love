import { firebase_prod_app_asset_file_names } from "./firebase_prod_app_asset_file_names.mjs";
import { firebase_prod_asset_download } from "./firebase_prod_asset_download.mjs";
import { firebase_prod_hashes_generic } from "./firebase_prod_hashes_generic.mjs";
export async function firebase_prod_app_hashes(app_name) {
  "$plain app_name";
  "what one app is serving right now, as one short word standing for each file it serves";
  "read from what is live rather than from what is on disk on purpose - a record of what is being served that was written from what somebody meant to serve can be wrong and sure of itself at the same time, and the direction it would be wrong in is the one that lets a deploy through unexamined";
  "so this is both how such a record is first made and how a record that fell behind is put right - there is no state it cannot recover from, because what is live is the thing being asked and never a copy of it";
  let file_names = await firebase_prod_app_asset_file_names(app_name);
  let read = firebase_prod_asset_download;
  let hashes = await firebase_prod_hashes_generic(file_names, read);
  return hashes;
}
