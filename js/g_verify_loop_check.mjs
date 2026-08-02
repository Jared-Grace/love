import { not } from "./not.mjs";
import { g_verify_active_chapters_path } from "./g_verify_active_chapters_path.mjs";
import { readFileSync } from "fs";
import { g_verify_next_across } from "./g_verify_next_across.mjs";
import { file_exists } from "./file_exists.mjs";
import { g_verify_suggest_read } from "./g_verify_suggest_read.mjs";
export async function g_verify_loop_check() {
  "Multi-book loop state: read the active-chapter list, one chapter code per line, and report each book's chapter, whether it is approved, its latest and next verse, and its state, through the shared cross-book next-step function. The action it returns is one of write, wait, or done, the write form carrying the chapter and verse key it wants written.";
  "The chapter list lives on a removable data disk. If it isn't mounted, report wait instead of throwing - a stack trace would make the watching monitor's grep miss, and the loop would go silently dead rather than resuming once the disk is back.";
  let ACTIVE_CHAPTERS_PATH = g_verify_active_chapters_path();
  let listed = await file_exists(ACTIVE_CHAPTERS_PATH);
  if (not(listed)) {
    let r = {
      books: [],
      action: "wait",
    };
    return r;
  }
  function lambda(s) {
    let r2 = s.trim();
    return r2;
  }
  let chapters = readFileSync(ACTIVE_CHAPTERS_PATH, "utf8")
    .trim()
    .split("\n")
    .map(lambda)
    .filter(Boolean);
  let result = await g_verify_next_across(chapters);
  ("A pending in-app suggestion on any active chapter takes priority over drafting new verses - the reviewer's feedback leads. Surface it as a suggest action carrying the chapter and key, so the watching monitor wakes the loop to judge and apply it, or reply to it, before writing ahead.");
  for (let book of result.books) {
    let suggestion = await g_verify_suggest_read(book.chapter);
    if (suggestion.text) {
      let r3 = {
        books: result.books,
        action: "suggest:" + book.chapter + ":" + suggestion.key,
      };
      return r3;
    }
  }
  return result;
}
