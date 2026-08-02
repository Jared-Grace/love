import { json_equal_not } from "./json_equal_not.mjs";
import { firebase_prod_app_hashes } from "./firebase_prod_app_hashes.mjs";
import { firebase_prod_hashes } from "./firebase_prod_hashes.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
export async function firebase_prod_app_hashes_stale_is(app_name) {
  "$plain app_name";
  "whether what one app is serving has moved on from what was last written down about it";
  "this is the state a deploy leaves behind when it stops between sending and noting - what is served and what was noted come apart, and nothing about either of them looks wrong on its own. asking the two whether they still agree is the only way that gap is ever seen";
  "an app nothing has been written about yet counts as having moved on. nobody has looked at it, which is a different thing from it agreeing - and of the two ways to be wrong here the one to choose is the one that holds a deploy rather than the one that lets it by";
  "answering yes or no rather than stopping is what lets a caller ask about every app and still hear about all of them";
  let noted = await firebase_prod_hashes();
  let written = property_get_or_null(noted, app_name);
  let unwritten = null_is(written);
  if (unwritten) {
    return true;
  }
  let live = await firebase_prod_app_hashes(app_name);
  let stale = json_equal_not(written, live);
  return stale;
}
