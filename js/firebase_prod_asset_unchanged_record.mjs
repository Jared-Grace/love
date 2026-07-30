import { firebase_prod_asset_unchanged_is } from "./firebase_prod_asset_unchanged_is.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function firebase_prod_asset_unchanged_record(file_name) {
  "three answers, not two: yes it matches, no it differs, and nothing at all came back. the third is a real state, because a page can be live without the file beside it ever having been uploaded, and one such file must not be allowed to hide the verdict on all the others. it is reported rather than swallowed, so a whole list of nothings reads as the failure it would be";
  async function lambda() {
    let v = await firebase_prod_asset_unchanged_is(file_name);
    return v;
  }
  let unchanged = await catch_null_async(lambda);
  let record = {
    file_name,
    unchanged,
  };
  return record;
}
