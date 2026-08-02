import { firebase_prod_app_disk_hashes } from "./firebase_prod_app_disk_hashes.mjs";
import { firebase_prod_hashes } from "./firebase_prod_hashes.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { json_equal } from "./json_equal.mjs";
export async function firebase_prod_app_shipped_is(app_name) {
  "$plain app_name";
  "whether what is built and waiting for one app is already the thing being served - so sending it would change nothing";
  "this is the question the other apps have to answer when one app is being sent. the whole site goes up together, so sending one app republishes the rest - and an app whose waiting build is already the thing being served is carried along without anybody having to argue about whether it is sound. it was argued about when it was sent";
  "an app nothing has been written about yet answers no. nobody has looked at it, which is not the same as it matching - and of the two ways to be wrong the one to choose is the one that holds a deploy rather than the one that lets it by";
  "neither side of this goes near a wire. both were reduced to a handful of words beforehand - one of them the last time anybody looked at what is being served - so this can be asked while everything else is held up waiting for it";
  let noted = await firebase_prod_hashes();
  let written = property_get_or_null(noted, app_name);
  let unwritten = null_is(written);
  if (unwritten) {
    return false;
  }
  let disk = await firebase_prod_app_disk_hashes(app_name);
  let same = json_equal(written, disk);
  return same;
}
