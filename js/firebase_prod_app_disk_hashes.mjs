import { firebase_prod_app_disk_file_names } from "./firebase_prod_app_disk_file_names.mjs";
import { firebase_prod_asset_disk_read } from "./firebase_prod_asset_disk_read.mjs";
import { firebase_prod_hashes_generic } from "./firebase_prod_hashes_generic.mjs";
export async function firebase_prod_app_disk_hashes(app_name) {
  "$plain app_name";
  "one short word standing for each piece of one app that is built and waiting to be sent";
  "nothing here goes near a wire. that is the whole point of it - what is waiting to be sent can be reduced to a handful of words in the time a single request would take to leave the machine, so a check standing on this one costs nothing to run while everything else is held up waiting for it";
  let file_names = await firebase_prod_app_disk_file_names(app_name);
  let read = firebase_prod_asset_disk_read;
  let hashes = await firebase_prod_hashes_generic(file_names, read);
  return hashes;
}
