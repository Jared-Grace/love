import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { path_name } from "./path_name.mjs";
import { path_base } from "./path_base.mjs";
export async function g_generate_upload_single(path_get, file) {
  "Send one file of generated content up to storage, under an address built from what the file is called.";
  "READS THE FILE IT WAS HANDED, rather than building a second path back to it out of the file's own name. Built, that path went through the check that a chapter code is letters and digits only - so a folder whose files are named for anything else threw on its first file and uploaded none of them, which is what kept the arc lengths off the bucket and out of the backup. The file is already known; asking where it is again could only ever agree or fail.";
  let fb = path_base(file);
  let name = path_name(fb);
  let destination = path_get(name);
  let data = await file_read_json(file);
  await firebase_upload_object_compressed(destination, data);
}
