import { firebase_bucket } from "./firebase_bucket.mjs";
import { dev_trace_report_prefix } from "./dev_trace_report_prefix.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function dev_trace_report_download() {
  "every trace a latest page uploaded, read back - one entry per device, each holding the newest few hundred steps it took";
  "read through the signed-in handle that listed them, because nothing under the uploads opening is public";
  let bucket = await firebase_bucket();
  let [files] = await bucket.getFiles({
    prefix: dev_trace_report_prefix(),
  });
  async function lambda(item) {
    let [buffer] = await item.download();
    let o = buffer_to_json(buffer);
    return o;
  }
  let downloads = await list_map_unordered_async(files, lambda);
  return downloads;
}
