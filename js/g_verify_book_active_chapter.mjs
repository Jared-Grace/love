import { g_verify_chapter_next } from "./g_verify_chapter_next.mjs";
import { g_chapter_code_next } from "./g_chapter_code_next.mjs";
import { g_sermon_generate_chapter_exists } from "./g_sermon_generate_chapter_exists.mjs";
// Auto-advance WITHIN a book: resolve a listed chapter to the first chapter of the
// SAME book that isn't done — walking HEB01 → HEB02 → … while each is done and the
// next chapter's source exists. Stops at the book's last chapter with source (never
// crosses into another book — that stays a deliberate chapters.txt choice).
export async function g_verify_book_active_chapter(chapter_code) {
  let state = await g_verify_chapter_next(chapter_code);
  while (state.action === "done") {
    // "done" = all passages WRITTEN. Cross to the next chapter only once the last
    // passage is also APPROVED — the same approval gate the loop applies within a
    // chapter — so we never write the next chapter ahead of the reviewer.
    if (state.approved !== state.latest) {
      return { chapter: state.chapter, approved: state.approved, latest: state.latest, next: state.next, action: "wait" };
    }
    let next_code = g_chapter_code_next(state.chapter);
    let exists = await g_sermon_generate_chapter_exists(next_code);
    if (!exists) return state;
    state = await g_verify_chapter_next(next_code);
  }
  return state;
}
