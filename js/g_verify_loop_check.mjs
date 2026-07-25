import { g_verify_active_chapters_path } from "./g_verify_active_chapters_path.mjs";
import { readFileSync } from "fs";
import { g_verify_next_across } from "./g_verify_next_across.mjs";
import { file_exists } from "./file_exists.mjs";
import { g_verify_suggest_read } from "./g_verify_suggest_read.mjs";
export async function g_verify_loop_check() {
  let ACTIVE_CHAPTERS_PATH = g_verify_active_chapters_path();
  let listed = await file_exists(ACTIVE_CHAPTERS_PATH);
  if (!listed)
    return {
      books: [],
      action: "wait",
    };
  let chapters = readFileSync(ACTIVE_CHAPTERS_PATH, "utf8")
    .trim()
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  let result = await g_verify_next_across(chapters);
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
