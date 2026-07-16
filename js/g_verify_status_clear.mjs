import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
import { g_verify_status_path } from "./g_verify_status_path.mjs";
export async function g_verify_status_clear(chapter_code) {
  let destination = g_verify_status_path(chapter_code);
  let status = { busy: false, verse: "", note: "" };
  await firebase_upload_object_compressed(destination, status);
}
