import { firebase_prod_asset_download } from "./firebase_prod_asset_download.mjs";
import { firebase_prod_asset_disk_read } from "./firebase_prod_asset_disk_read.mjs";
import { equal } from "./equal.mjs";
export async function firebase_prod_asset_unchanged_is(file_name) {
  "does the file that is live right now match the one sitting on disk. answering this as a plain yes or no, rather than by throwing, is what lets a caller ask about many files and still hear about all of them";
  let prod = await firebase_prod_asset_download(file_name);
  let disk = await firebase_prod_asset_disk_read(file_name);
  let same = equal(prod, disk);
  return same;
}
