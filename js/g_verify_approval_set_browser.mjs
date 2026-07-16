import { firebase_upload_object_compressed_browser } from "./firebase_upload_object_compressed_browser.mjs";
import { g_verify_approval_path } from "./g_verify_approval_path.mjs";
export async function g_verify_approval_set_browser(chapter_code, verse) {
  let destination = g_verify_approval_path(chapter_code);
  await firebase_upload_object_compressed_browser(destination, { approved: verse });
}
