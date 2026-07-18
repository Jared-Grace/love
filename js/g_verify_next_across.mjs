import { g_verify_chapter_next } from "./g_verify_chapter_next.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
// Multi-book: given a list of active chapter codes, return every book's state plus
// the FIRST pending write across all of them. Per-book field is "state" (not
// "action") so the single top-level "action" stays unambiguous for the Monitor's grep.
export async function g_verify_next_across(chapter_codes) {
  let raw = await list_map_unordered_async(chapter_codes, g_verify_chapter_next);
  let books = raw.map(function to_book(b) {
    return { chapter: b.chapter, approved: b.approved, latest: b.latest, next: b.next, state: b.action };
  });
  let pending = raw.find(function is_pending(b) {
    return b.action.startsWith("write:");
  });
  let action;
  if (pending) action = "write:" + pending.chapter + ":" + pending.action.slice("write:".length);
  else if (raw.every((b) => b.action === "done")) action = "done";
  else action = "wait";
  return { books, action };
}
