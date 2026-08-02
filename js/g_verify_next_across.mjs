import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { g_verify_book_active_chapter } from "./g_verify_book_active_chapter.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
("Multi-book: given a list of active chapter codes, return every book's state plus");
('the FIRST pending write across all of them. Per-book field is "state" (not');
('"action") so the single top-level "action" stays unambiguous for the Monitor\'s grep.');
("Each listed chapter auto-advances WITHIN its book (",
  fn_name("g_verify_book_active_chapter"),
  "):");
("a done chapter rolls forward to the next chapter of the same book that has source.");
export async function g_verify_next_across(chapter_codes) {
  let raw = await list_map_unordered_async(
    chapter_codes,
    g_verify_book_active_chapter,
  );
  function to_book(b) {
    let r = {
      chapter: b.chapter,
      approved: b.approved,
      latest: b.latest,
      next: b.next,
      state: b.action,
    };
    return r;
  }
  let books = raw.map(to_book);
  function is_pending(b) {
    let r2 = b.action.startsWith("write:");
    return r2;
  }
  let pending = raw.find(is_pending);
  let action = null;
  function lambda(b) {
    let eq = equal(b.action, "done");
    return eq;
  }
  if (pending) {
    action =
      "write:" + pending.chapter + ":" + pending.action.slice("write:".length);
  } else if (raw.every(lambda)) {
    action = "done";
  } else action = "wait";
  let r3 = {
    books,
    action,
  };
  return r3;
}
