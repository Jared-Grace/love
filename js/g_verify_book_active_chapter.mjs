import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { g_verify_chapter_next } from "./g_verify_chapter_next.mjs";
import { g_chapter_code_next } from "./g_chapter_code_next.mjs";
import { g_sermon_generate_chapter_exists } from "./g_sermon_generate_chapter_exists.mjs";
export async function g_verify_book_active_chapter(chapter_code) {
  let state = await g_verify_chapter_next(chapter_code);
  while (equal(state.action, "done")) {
    if (not_equal(state.approved, state.latest)) {
      let r = {
        chapter: state.chapter,
        approved: state.approved,
        latest: state.latest,
        next: state.next,
        action: "wait",
      };
      return r;
    }
    let next_code = g_chapter_code_next(state.chapter);
    let exists = await g_sermon_generate_chapter_exists(next_code);
    if (not(exists)) {
      return state;
    }
    state = await g_verify_chapter_next(next_code);
  }
  return state;
}
