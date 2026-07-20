import { readFileSync } from "fs";
import { g_verify_next_across } from "./g_verify_next_across.mjs";
import { file_exists } from "./file_exists.mjs";
import { g_verify_suggest_read } from "./g_verify_suggest_read.mjs";
// Multi-book loop state: read the active-chapter list (one chapter code per line)
// and return { books:[{chapter,approved,latest,next,state}], action } via the shared
// g_verify_next_across. action = "write:CHAPTER:KEY" | "wait" | "done".
const ACTIVE_CHAPTERS_PATH = "/media/j/JPM/user/storage/sermon_loop/chapters.txt";
export async function g_verify_loop_check() {
  // The chapter list lives on a removable data disk. If it isn't mounted, report
  // "wait" instead of throwing — a stack trace would make the Monitor's grep miss
  // and the loop would go silently dead rather than resuming once the disk is back.
  let listed = await file_exists(ACTIVE_CHAPTERS_PATH);
  if (!listed) return { books: [], action: "wait" };
  let chapters = readFileSync(ACTIVE_CHAPTERS_PATH, "utf8")
    .trim()
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  let result = await g_verify_next_across(chapters);
  // A pending in-app suggestion on any active chapter takes priority over drafting
  // new verses — the reviewer's feedback leads. Surface it as suggest:CHAPTER:KEY so
  // the Monitor wakes the loop to judge + apply (or reply) before writing ahead.
  for (let book of result.books) {
    let suggestion = await g_verify_suggest_read(book.chapter);
    if (suggestion.text) {
      return {
        books: result.books,
        action: "suggest:" + book.chapter + ":" + suggestion.key,
      };
    }
  }
  return result;
}
