import { g_sermon_write } from "./g_sermon_write.mjs";
import { g_sermon_write_upload } from "./g_sermon_write_upload.mjs";
import { g_verify_status_clear } from "./g_verify_status_clear.mjs";
// The whole save-and-publish step in one call: write the passage's sermon lines,
// upload them, and clear the "busy" status. Reused by every per-verse save script.
export async function g_sermon_write_publish(chapter_code, verse_numbers, english, lines) {
  await g_sermon_write(chapter_code, verse_numbers, english, lines);
  await g_sermon_write_upload();
  await g_verify_status_clear(chapter_code);
  return "saved + uploaded " + chapter_code + " " + verse_numbers.join(",") + "; status cleared";
}
