import { g_sermon_generate_chapter_passages_get } from "./g_sermon_generate_chapter_passages_get.mjs";
import { g_sermon_write_read } from "./g_sermon_write_read.mjs";
import { g_verify_approval_read } from "./g_verify_approval_read.mjs";
import { g_verify_chapter_next_generic } from "./g_verify_chapter_next_generic.mjs";
// The single source of truth for "where does this sermon chapter stand?" — reused by
// the loop (g_verify_loop_check) and the app's auto-advance. Returns
// { chapter, approved, latest, next, action } where action is
// "write:<key>" | "wait" | "done".
export async function g_verify_chapter_next(chapter_code) {
  let passages_get = g_sermon_generate_chapter_passages_get;
  let written_get = g_sermon_write_read;
  let approval_get = g_verify_approval_read;
  let r = await g_verify_chapter_next_generic(
    chapter_code,
    passages_get,
    written_get,
    approval_get,
  );
  return r;
}
