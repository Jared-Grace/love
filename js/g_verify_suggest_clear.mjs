import { g_verify_suggest_set } from "./g_verify_suggest_set.mjs";
// Clear a chapter's pending suggestion once the loop has handled it (applied the
// edit or replied). Writing empty text makes g_verify_loop_check stop surfacing it.
export async function g_verify_suggest_clear(chapter_code) {
  return await g_verify_suggest_set(chapter_code, "", "");
}
