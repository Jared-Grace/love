import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
export async function firebase_storage_download_json_jg_decompress(
  destination,
) {
  "a jg-project storage download that UNWRAPS the {compressed} envelope — the shape firebase_upload_object_compressed writes, so anything uploaded by g_generate_upload_single must be read through this rather than firebase_storage_download_json_jg";
  let project_url = firebase_storage_url_project_jg();
  let o = await firebase_storage_download_json_decompress(
    project_url,
    destination,
  );
  return o;
}
