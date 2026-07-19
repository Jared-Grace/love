import { g_verify_book_active_chapter } from "./g_verify_book_active_chapter.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
// Multi-book: given a list of active chapter codes, return every book's state plus
// the FIRST pending write across all of them. Per-book field is "state" (not
// "action") so the single top-level "action" stays unambiguous for the Monitor's grep.
// Each listed chapter auto-advances WITHIN its book (g_verify_book_active_chapter):
// a done chapter rolls forward to the next chapter of the same book that has source.
export async function g_verify_next_across(chapter_codes) {
  let raw = await list_map_unordered_async(chapter_codes, g_verify_book_active_chapter);
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
