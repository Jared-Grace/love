import { buffer_to_json } from "./buffer_to_json.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { app_shared_error_report_prefix } from "./app_shared_error_report_prefix.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
export async function app_shared_error_report_download() {
  "every device's error report, read back - one entry per device that has hit an error, each holding the last few it hit";
  "The sibling of the message reader beside it. What people write and what breaks without them writing arrive in the same place because that place is the only one a browser may write to at all, and they are told apart by which folder they landed in.";
  "Each file is read through the same signed-in handle that listed it, rather than through its public address. Nothing under here is readable to the public - that is the whole point of the folder - so the public address answers a refusal, and a reader that used one would list every file and then be unable to open a single one of them.";
  let bucket = await firebase_bucket();
  let [files] = await bucket.getFiles({
    prefix: app_shared_error_report_prefix(),
  });
  async function lambda(item) {
    let [buffer] = await item.download();
    let o = buffer_to_json(buffer);
    return o;
  }
  let downloads = await list_map_unordered_async(files, lambda);
  return downloads;
}
